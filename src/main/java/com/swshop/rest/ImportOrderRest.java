package com.swshop.rest;

import com.swshop.entity.Blog;
import com.swshop.entity.ImportOrder;
import com.swshop.entity.Product;
import com.swshop.repository.ImportOrderRepository;
import com.swshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ImportOrderRest {

    @Autowired
    private ImportOrderRepository importOrderRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/admin/addOrUpdateImportOrder")
    public void save(@RequestBody ImportOrder imp){
        ImportOrder importOrder = null;
        Product product = null;
        if(imp.getId() != null){
            importOrder = importOrderRepository.findById(imp.getId()).get();
            product = importOrder.getProduct();
            product.setQuantity(product.getQuantity() - importOrder.getQuantity());
            product.setQuantity(product.getQuantity() + imp.getQuantity());
        }
        else{
            product = productRepository.findById(imp.getProduct().getId()).get();
            product.setQuantity(product.getQuantity() + imp.getQuantity());
        }
        imp.setCreatedDate(new Date(System.currentTimeMillis()));
        importOrderRepository.save(imp);
        productRepository.save(product);
    }

    @GetMapping("/public/allImportOrder")
    public List<ImportOrder> findAll(){
        return importOrderRepository.findAllDesc();
    }

    @GetMapping("/public/searchImportOrder")
    public List<ImportOrder> search(@RequestParam(value = "start", required = false) Date start,
                                    @RequestParam(value = "end", required = false) Date end,
                                    @RequestParam(value = "sanpham", required = false) Long spId){
        List<ImportOrder> list = null;
        if(start != null && end != null && spId != -1){
            list = importOrderRepository.searchFull(start, end, spId);
        }
        else if(start != null && end != null && spId == -1){
            list = importOrderRepository.searchByDate(start, end);
        }
        else if(start == null && end == null && spId != -1){
            list = importOrderRepository.searchByProduct(spId);
        }
        return list;
    }

    @GetMapping("/public/ImportOrderById")
    public ImportOrder findById(@RequestParam("id") Long id){
        return importOrderRepository.findById(id).get();
    }

    @DeleteMapping("/admin/deleteImportOrder")
    public void deleteCategory(@RequestParam("id") Long id){
        ImportOrder importOrder = importOrderRepository.findById(id).get();
        Product product = importOrder.getProduct();
        product.setQuantity(product.getQuantity() - importOrder.getQuantity());
        importOrderRepository.deleteById(id);
        productRepository.save(product);
    }
}
