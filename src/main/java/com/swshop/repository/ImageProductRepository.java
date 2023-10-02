package com.swshop.repository;

import com.swshop.entity.ImageProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ImageProductRepository extends JpaRepository<ImageProduct, Long> {

    @Query(value = "select * from image_product where product_id = ?1", nativeQuery = true)
    public List<ImageProduct> findByProductId(Long proId);
}
