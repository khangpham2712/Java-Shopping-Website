package com.swshop.repository;

import com.swshop.entity.Product;
import com.swshop.entity.ProductView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProductViewRepository extends JpaRepository<ProductView, Long> {

    @Query("select p from ProductView p where p.product.id = ?1 and p.user.id = ?2")
    public Optional<ProductView> findByUserAndProduct(Long productId, Long userId);

    @Query("select p from ProductView p where p.product.id = ?1 and p.randomKey = ?2")
    public Optional<ProductView> findByUserAndKey(Long productId, String key);

    @Query("select p from ProductView p where p.randomKey = ?1 order by p.id desc, p.ngaySearch desc ")
    public List<ProductView> findByKey(String key);


}
