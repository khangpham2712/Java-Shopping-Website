package com.swshop.repository;

import com.swshop.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Long> {

    @Query("select c from Contact c order by c.daXem asc")
    public List<Contact> findAllDesc();

    @Modifying
    @Transactional
    @Query("update Contact set daXem = 1")
    int updateAll();

    @Query("select count(c.id) from Contact c where c.daXem = 0")
    public Double demChuaXem();
}
