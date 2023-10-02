package com.swshop.rest;

import com.swshop.dto.ProductSearchDto;
import com.swshop.entity.Product;
import com.swshop.entity.ProductView;
import com.swshop.entity.User;
import com.swshop.entity.UserSearch;
import com.swshop.repository.ProductRepository;
import com.swshop.repository.ProductViewRepository;
import com.swshop.repository.UserSearchRepository;
import com.swshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductRest {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ProductViewRepository productViewRepository;

    @Autowired
    private UserSearchRepository userSearchRepository;

    @GetMapping("/allproduct")
    public List<Product> findAll(){
        return productRepository.findAllDesc();
    }

    @GetMapping("/allproductByDanhMucAndTh")
    public List<Product> allproductByDanhMucAndTh(@RequestParam("iddm") Long iddm, @RequestParam("idth") Long idth){
        return productRepository.findByDmAndTh(iddm, idth);
    }

    @GetMapping("/productByID")
    public Product findById(@RequestParam("id") Long id){
        return productRepository.findById(id).get();
    }

    @DeleteMapping("/admin/deleteProduct")
    public void deleteProduct(@RequestParam("id") Long id){
        try {
            productRepository.deleteById(id);
        }
        catch (Exception e){
            Product p = productRepository.findById(id).get();
            p.setDeleted(1);
            productRepository.save(p);
        }
    }

    @PostMapping("/admin/addOrUpdateproduct")
    public Product save(@RequestBody Product product){
        if(product.getId() == null){
            product.setCreatedDate(new Date(System.currentTimeMillis()));
            product.setDeleted(0);
            product.setQuantity(0);
            product.setRemainQuantity(0);
            product.setNumView(0);
        }
        else{
            Product p = productRepository.findById(product.getId()).get();
            product.setDeleted(p.getDeleted());
            product.setCreatedDate(p.getCreatedDate());
            product.setQuantity(p.getQuantity());
            product.setNumView(p.getNumView());

            if(product.getImageBanner() == null){
                product.setImageBanner(p.getImageBanner());
            }
        }

        Product result = productRepository.save(product);
        return result;
    }

    @GetMapping("/public/productBycategoryId")
    public Page<Product> searchProduct(@RequestParam(value = "cateId") Long cateId, Pageable pageable){
        return productRepository.getByCategory(cateId, pageable);
    }

    @GetMapping("/public/searchProByParam")
    public Page<Product> searchProductByName(@RequestParam(value = "search") String search,
                                             @RequestParam(value = "key") String keyrandom, Pageable pageable){
        UserSearch userSearch = new UserSearch();
        userSearch.setSearch(search);
        userSearch.setRandomKey(keyrandom);
        userSearch.setNgaySearch(new Date(System.currentTimeMillis()));
        userSearchRepository.save(userSearch);
        return productRepository.searchByParam("%"+search+"%", pageable);
    }

    @GetMapping("/public/prodetail")
    public Product findByIdPublic(@RequestParam("id") Long id, @RequestParam("key") String key){
        Product product = productRepository.findById(id).get();
        product.setNumView(product.getNumView() + 1);
        productRepository.save(product);

        Optional<ProductView> productView = productViewRepository.findByUserAndKey(id, key);
        if(productView.isPresent()){
            productView.get().setNumView(productView.get().getNumView() + 1);
            productView.get().setNgaySearch(new Date(System.currentTimeMillis()));
            productViewRepository.save(productView.get());
        }
        else{
            ProductView productView1 = new ProductView();
            productView1.setRandomKey(key);
            productView1.setNumView(1);
            productView1.setProduct(product);
            productView1.setNgaySearch(new Date(System.currentTimeMillis()));
            productViewRepository.save(productView1);
        }

        return product;
    }

    @GetMapping("/public/productByCateLimit")
    public List<Product> productBycategoryId(@RequestParam(value = "id") Long id){
        Product p = productRepository.findById(id).get();
        return productRepository.getByCategoryLimit4(p.getCategory().getId(), id);
    }


    @PostMapping("/public/searchFull")
    public Page<Product> searchFullProduct(@RequestBody ProductSearchDto s, Pageable pageable){
        Page<Product> page = null;
        if(s.getDanhmuc() == -1 && s.getHang() == -1){
            page = productRepository.searchFull(s.getSmall(), s.getLarge(),pageable);
        }
        else if(s.getDanhmuc() != -1 && s.getHang() == -1){
            page = productRepository.searchFull1(s.getSmall(), s.getLarge(), s.getDanhmuc(), pageable);
        }
        else if(s.getDanhmuc() == -1 && s.getHang() != -1){
            page = productRepository.searchFull2(s.getSmall(), s.getLarge(), s.getHang(), pageable);
        }
        else if(s.getDanhmuc() != -1 && s.getHang() != -1){
            page = productRepository.searchFull3(s.getSmall(), s.getLarge(), s.getHang(), s.getDanhmuc(), pageable);
        }
        return page;
    }

    @GetMapping("/public/productIndex")
    public Set<Product> getListIndex(@RequestParam("key") String key, @RequestParam("size") Integer size){
        Set<Product> list = productRepository.getIndexPage(size);
        List<ProductView> productViews = productViewRepository.findByKey(key);
        List<UserSearch> userSearches = userSearchRepository.findByKey(key);
        if(productViews.size() > 0 && userSearches.size() == 0){
            Product pro = productViews.get(0).getProduct();
            Product pro2 = productViews.get(0).getProduct();
            if(productViews.size() >1){
                pro2 = productViews.get(1).getProduct();
            }
            if(pro.getCategory().getId() != pro2.getCategory().getId()){
                size = size /2;
            }
            list = productRepository.getByCate(size, pro.getCategory().getId(), pro2.getCategory().getId(), pro.getId(), pro2.getId());
        }
        else if(userSearches.size() > 0 && productViews.size() == 0){
            String param = userSearches.get(0).getSearch();
            String param1 = userSearches.get(0).getSearch();
            if(userSearches.size() >1){
                param1 = userSearches.get(1).getSearch();
            }
            if(!param.equals(param1)){
                size = size /2;

            }
            System.out.println("==== "+size);
            list = productRepository.getByParam(size, "%"+param+"%", "%"+param1+"%");
            if(list.size() <= size){
                list.addAll(productRepository.getIndexPage(size));
            }
        }
        else if(userSearches.size() > 0 && productViews.size() > 0){
            String param = userSearches.get(0).getSearch();
            String param1 = userSearches.get(0).getSearch();
            Boolean check = false;
            if(userSearches.size() >1){
                param1 = userSearches.get(1).getSearch();
            }
            if(!param.equals(param1)){
                size = size /2;
                check = true;
            }
            System.out.println("==== "+size);
            list = productRepository.getByParam(size, "%"+param+"%", "%"+param1+"%");
            Product pro = productViews.get(0).getProduct();
            Product pro2 = productViews.get(0).getProduct();
            if(productViews.size() >1){
                pro2 = productViews.get(1).getProduct();
            }
            if(pro.getCategory().getId() != pro2.getCategory().getId()){
                if(check == false){
                    size = size /2;
                }
            }
            list.addAll(productRepository.getByCate(size, pro.getCategory().getId(), pro2.getCategory().getId(), pro.getId(), pro2.getId())) ;
        }
        return list;
    }

    @GetMapping("/admin/avgPriceProduct")
    public Double avgPrice(){
        return productRepository.avg();
    }
}
