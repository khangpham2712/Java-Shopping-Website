package com.swshop.repository;

import com.swshop.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    @Query("select i from Invoice i where i.user.id = ?1")
    public List<Invoice> findByUserId(Long userId);

    @Query(value = "select i.* from Invoice i ORDER by i.status_in_id asc", nativeQuery = true)
    public List<Invoice> findAllAdmin();

    @Query("select i from Invoice i where i.user.id = ?1 and i.createdDate >= ?2 and i.createdDate <= ?3")
    public List<Invoice> filter1(Long userId, Date start, Date end);

    @Query("select i from Invoice i where i.user.id = ?1 and i.createdDate >= ?2 and i.createdDate <= ?3 and i.statusIn.id = ?4")
    public List<Invoice> filter2(Long userId, Date start, Date end, Long stausIn);

    @Query("select i from Invoice i where i.user.id = ?1 and i.createdDate >= ?2 and i.createdDate <= ?3 and i.payType = ?4")
    public List<Invoice> filter3(Long userId, Date start, Date end, Integer type);

    @Query("select i from Invoice i where i.user.id = ?1 and i.createdDate >= ?2 and i.createdDate <= ?3 and i.payType = ?4 and i.statusIn.id = ?5")
    public List<Invoice> filter4(Long userId, Date start, Date end, Integer type, Long staIn);


    @Query("select i from Invoice i where i.createdDate >= ?1 and i.createdDate <= ?2")
    public List<Invoice> filter1Admin(Date start, Date end);

    @Query("select i from Invoice i where i.createdDate >= ?1 and i.createdDate <= ?2 and i.statusIn.id = ?3")
    public List<Invoice> filter2Admin(Date start, Date end, Long stausIn);

    @Query("select i from Invoice i where i.createdDate >= ?1 and i.createdDate <= ?2 and i.payType = ?3")
    public List<Invoice> filter3Admin(Date start, Date end, Integer type);

    @Query("select i from Invoice i where i.createdDate >= ?1 and i.createdDate <= ?2 and i.payType = ?3 and i.statusIn.id = ?4")
    public List<Invoice> filter4Admin(Date start, Date end, Integer type, Long staIn);

    @Query(value = "select sum(i.total_amount) from invoice i where Month(i.created_date) = ?1 and Year(i.created_date) = ?2 and (i.pay_type = 1 or i.status_in_id = 4)", nativeQuery = true)
    public Double tinhDoanhThu(Integer thang, Integer month);

    @Query(value = "select sum(i.total_amount) from invoice i where (i.ngay_nhan = ?1 and i.pay_type = 0) or (i.pay_type = 1 and i.created_date = ?1)", nativeQuery = true)
    public Double tinhDoanhThuByDate(Date ngay);

    @Query(value = "select count(i.id) from Invoice i where i.ngayNhan = ?1")
    public Double soDonHoanThanhNgay(Date ngay);

    @Query(value = "SELECT MIN(i.total_amount) from invoice i", nativeQuery = true)
    public Double minAmount();

    @Query(value = "SELECT MAX(i.total_amount) from invoice i", nativeQuery = true)
    public Double maxAmount();
}
