package com.swshop.repository;

import com.swshop.entity.ImportOrder;
import com.swshop.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

public interface ImportOrderRepository extends JpaRepository<ImportOrder, Long> {

    @Query("select i from ImportOrder i order by i.id desc ")
    public List<ImportOrder> findAllDesc();

    @Query("select i from ImportOrder i where i.importDate >= ?1 and i.importDate <= ?2 and i.product.id =?3 order by i.id desc ")
    public List<ImportOrder> searchFull(Date start, Date end, Long spId);

    @Query("select i from ImportOrder i where i.importDate >= ?1 and i.importDate <= ?2 order by i.id desc ")
    public List<ImportOrder> searchByDate(Date start, Date end);

    @Query("select i from ImportOrder i where i.product.id =?1 order by i.id desc ")
    public List<ImportOrder> searchByProduct(Long spId);
}
