package com.swshop.repository;

import com.swshop.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Long> {

    @Query(value = "select * from blog order by id desc", nativeQuery = true)
    public List<Blog> findAllDesc();
}
