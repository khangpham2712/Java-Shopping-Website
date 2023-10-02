package com.swshop.rest;

import com.swshop.dto.ThongKeDTO;
import com.swshop.repository.DetailInvoiceRepository;
import com.swshop.repository.InvoiceRepository;
import com.swshop.repository.ProductRepository;
import com.swshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ThongKeRest {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private DetailInvoiceRepository detailInvoiceRepository;

    @GetMapping("/admin/doanhThuThangNay")
    public Double doanhThuThangNay(){
        Date date = new Date(System.currentTimeMillis());
        String[] str = date.toString().split("-");
        Integer year = Integer.valueOf(str[0]);
        Integer month = Integer.valueOf(str[1]);
        System.out.println("----> "+invoiceRepository.tinhDoanhThu(month, year));
        return invoiceRepository.tinhDoanhThu(month, year);
    }

    @GetMapping("/admin/doanhThuTrongNgay")
    public Double doanhThuTrongNgay(){
        Date date = new Date(System.currentTimeMillis());
        return invoiceRepository.tinhDoanhThuByDate(date);
    }

    @GetMapping("/admin/soDonHoanThanhNgay")
    public Double soDonHoanThanhNgay(){
        Date date = new Date(System.currentTimeMillis());
        return invoiceRepository.soDonHoanThanhNgay(date);
    }

    @GetMapping("/admin/soLuongQuanTri")
    public Double soLuongQuanTri(){
        return userRepository.countAdmin();
    }

    @GetMapping("/admin/soLuongMatHang")
    public Double soLuongMatHang(){
        return productRepository.soLuongMatHang();
    }

    @GetMapping("/admin/thongkengay")
    public List<ThongKeDTO> statitic(@RequestParam(value = "date", required = false) Date date){
        if(date == null){
            date = new Date(System.currentTimeMillis());
        }
        List<ThongKeDTO> list = new ArrayList<>();
        List<Object[]> objects = detailInvoiceRepository.statitic(date);
        for(Object[] o : objects){
            ThongKeDTO t = new ThongKeDTO();
            Integer idpro = ((BigInteger) o[0]).intValue();
            t.setIdpro(idpro);
            String name = (String) o[1];
            t.setName(name);
            Double price = (Double) o[2];
            t.setPrice(price);
            Integer idinvoice = ((BigInteger) o[3]).intValue();
            t.setIdinvoice(idinvoice);
            String fullname = (String) o[4];
            t.setFullname(fullname);
            Integer soLuong = ((BigDecimal) o[6]).intValue();
            t.setQuantity(soLuong);
            Date da = ((Date) o[5]);
            t.setCreatedDate(da);
            list.add(t);
        }
        return list;
    }
}
