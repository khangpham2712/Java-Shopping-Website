package com.swshop.repository;

import com.swshop.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query(value = "select * from comment where product_id = ?1", nativeQuery = true)
    public List<Comment> findByProId(Long id);
}
