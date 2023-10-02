package com.swshop.repository;

import com.swshop.entity.Product;
import com.swshop.entity.StatusIn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StatusInRepository  extends JpaRepository<StatusIn, Long> {

    @Query(value = "SELECT s.* from status_in s order by id asc limit 1", nativeQuery = true)
    public StatusIn getFirst();

    @Query(value = "SELECT s.* from status_in s where id = 5", nativeQuery = true)
    public StatusIn statusHuy();

    @Query(value = "SELECT s.* from status_in s where id != 5", nativeQuery = true)
    public List<StatusIn> findByAdmin();
}
