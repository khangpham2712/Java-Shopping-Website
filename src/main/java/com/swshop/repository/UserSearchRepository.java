package com.swshop.repository;

import com.swshop.entity.Product;
import com.swshop.entity.UserSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserSearchRepository extends JpaRepository<UserSearch, Long> {

    @Query("select u from UserSearch u where u.randomKey = ?1 order by u.id desc, u.ngaySearch desc ")
    public List<UserSearch> findByKey(String key);
}
