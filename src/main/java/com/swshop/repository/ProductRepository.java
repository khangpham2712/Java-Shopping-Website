package com.swshop.repository;

import com.swshop.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select * from product where deleted = 0 order by id desc ", nativeQuery = true)
    public List<Product> findAllDesc();

    @Query(value = "select p from Product p where p.category.id = ?1 and p.tradeMark.id = ?2 and p.deleted = 0")
    public List<Product> findByDmAndTh(Long iddm, Long idth);

    @Query("select p from Product p where p.category.id = ?1 and p.deleted = 0")
    public Page<Product> getByCategory(Long cateId, Pageable pageable);

    @Query("select p from Product p where (p.name like ?1 or p.category.name like ?1 or p.tradeMark.name like ?1) and p.deleted = 0")
    public Page<Product> searchByParam(String search, Pageable pageable);

    @Query("select sum(p.quantity) from Product p where p.deleted = 0")
    public Double soLuongMatHang();

    @Query(value = "SELECT * from product where category_id = ?1 and id != ?2 and deleted = 0 limit 4", nativeQuery = true)
    public List<Product> getByCategoryLimit4(Long cateId, Long id);

    @Query("select p from Product p where (p.price >= ?1 and p.price <= ?2) and p.deleted = 0")
    public Page<Product> searchFull(Double small, Double large, Pageable pageable);

    @Query("select p from Product p where p.price >= ?1 and p.price <= ?2 and p.category.id = ?3 and p.deleted = 0")
    public Page<Product> searchFull1(Double small, Double large, Long cateId, Pageable pageable);

    @Query("select p from Product p where p.price >= ?1 and p.price <= ?2 and p.tradeMark.id = ?3 and p.deleted = 0")
    public Page<Product> searchFull2(Double small, Double large, Long trademark, Pageable pageable);

    @Query("select p from Product p where p.price >= ?1 and p.price <= ?2 and p.tradeMark.id = ?3 and p.category.id = ?4 and p.deleted = 0")
    public Page<Product> searchFull3(Double small, Double large, Long trademark, Long idcate, Pageable pageable);

    @Query(value = "SELECT * FROM product where deleted = 0 ORDER by id desc limit ?1", nativeQuery = true)
    public Set<Product> getIndexPage(Integer size);

    @Query(value = "(SELECT p.* from product p where p.category_id = ?2 and p.deleted = 0 ORDER BY p.id DESC limit ?1) " +
            "UNION (SELECT p.* from product  p where p.category_id = ?3 and p.deleted = 0 ORDER BY p.id DESC limit ?1) " +
            "UNION (SELECT p.* from product  p where p.id = ?5 and p.deleted = 0) " +
            "UNION (SELECT p.* from product  p where p.id = ?4 and p.deleted = 0) " +
            "UNION (SELECT p.* from product  p where p.category_id != ?2 and p.category_id != ?3 and p.deleted = 0 ORDER BY p.id DESC limit ?1)", nativeQuery = true)
    public Set<Product> getByCate(Integer size, Long cate1, Long cate2, Long pro1, Long pro2);

    @Query(value = "(SELECT p.* from product p where p.name like ?2 and p.deleted = 0 ORDER BY p.id DESC limit ?1) " +
            "UNION (SELECT p.* from product  p where p.name like ?3 and p.deleted = 0 ORDER BY p.id DESC limit ?1) " +
            "", nativeQuery = true)
    public Set<Product> getByParam(Integer size, String param1, String param2);

    @Query(value = "SELECT AVG(p.price) from product p where p.deleted = 0", nativeQuery = true)
    public Double avg();
}
