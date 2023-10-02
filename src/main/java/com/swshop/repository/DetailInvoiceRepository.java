package com.swshop.repository;

import com.swshop.entity.DetailInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

public interface DetailInvoiceRepository extends JpaRepository<DetailInvoice, Long> {

    @Query("select d from DetailInvoice d where d.invoice.id = ?1")
    public List<DetailInvoice> findByInvoiceId(Long id);

    @Query(value = "SELECT  p.id,p.name,d.price,i.id as idinvoice,u.fullname,i.created_date,\n" +
            "(SELECT sum(di.quantity) from detail_invoice di " +
            "where di.product_id = p.id) as soluong\n" +
            "from detail_invoice d\n" +
            "INNER join invoice i on i.id = d.invoice_id\n" +
            "inner join product p on p.id = d.product_id\n" +
            "inner join user u on u.id = i.user_id\n" +
            "where i.created_date = ?1\n" +
            "GROUP by p.id,p.name,d.price,idinvoice,u.fullname,i.created_date,soluong",nativeQuery = true)
    public List<Object[]> statitic(Date date);
}

