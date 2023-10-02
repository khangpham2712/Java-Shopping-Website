package com.swshop.repository;

import com.swshop.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Modifying
    @Transactional
    @Query(value = "delete from category n where id = ?1", nativeQuery = true)
    void deleteById(Long categoryId);

    @Modifying
    @Transactional
    @Query(value = "insert into category(name) values (?1)", nativeQuery = true)
    Integer save(String name);

    @Modifying
    @Transactional
    @Query(value = "update category set name = ?1 where id = ?2", nativeQuery = true)
    Integer update(String name, Long id);

    @Query(value = "select * from category", nativeQuery = true)
    List<Category> findAll();
}
