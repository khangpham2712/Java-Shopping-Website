package com.swshop.rest;

import com.swshop.dto.InvoiceDto;
import com.swshop.dto.OrderDto;
import com.swshop.dto.ProductOrderDto;
import com.swshop.entity.*;
import com.swshop.repository.*;
import com.swshop.service.MailService;
import com.swshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class InvoiceRest {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private StatusInRepository statusInRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private DetailInvoiceRepository detailInvoiceRepository;

    @Autowired
    private MailService mailService;

    @PostMapping("/user/createInvoice")
    public void save(@RequestBody OrderDto orderDto){
        List<ProductOrderDto> list = orderDto.getProductOrderDtos();
        Double tong = 0D;
        Integer soluong = 0;
        for(ProductOrderDto p : list){
            tong += p.getPrice() * p.getQuantity();
            soluong += p.getQuantity();
        }
        User user = userService.getUserWithAuthority();
        Invoice invoice = new Invoice();
        invoice.setCreatedDate(new Date(System.currentTimeMillis()));
        invoice.setPayType(0);
        invoice.setNote(orderDto.getNote());
        invoice.setTotalAmount(tong);
        invoice.setFullname(user.getFullname());
        invoice.setAddress(user.getDiaChi());
        invoice.setPhone(user.getPhone());
        invoice.setStatusIn(statusInRepository.getFirst());
        invoice.setUser(user);
        invoice.setNumOfProduct(soluong);
        invoiceRepository.save(invoice);

        for(ProductOrderDto p : list){
            Product product = productRepository.findById(p.getId()).get();
            DetailInvoice detailInvoice = new DetailInvoice();
            detailInvoice.setInvoice(invoice);
            detailInvoice.setTotalAmount(p.getPrice() * p.getQuantity());
            detailInvoice.setProduct(product);
            detailInvoice.setQuantity(p.getQuantity());
            detailInvoice.setPrice(p.getPrice());
            detailInvoiceRepository.save(detailInvoice);
            product.setQuantity(product.getQuantity() - p.getQuantity());
            productRepository.save(product);
        }
    }

    @GetMapping("/user/myInvoice")
    public List<Invoice> findByUser(){
        User user = userService.getUserWithAuthority();
        return invoiceRepository.findByUserId(user.getId());
    }

    @GetMapping("/admin/allInvoice")
    public List<Invoice> allInvoice(){
        return invoiceRepository.findAllAdmin();
    }

    @DeleteMapping("/user/huydon")
    public void findByUser(@RequestParam("id") Long id) throws Exception {
        User user = userService.getUserWithAuthority();
        Invoice invoice = invoiceRepository.findById(id).get();
        if(invoice.getUser().getId() != user.getId()){
            throw new Exception("");
        }
        invoice.setStatusIn(statusInRepository.statusHuy());
        List<DetailInvoice> list = detailInvoiceRepository.findByInvoiceId(invoice.getId());
        for(DetailInvoice d : list){
            Product product = d.getProduct();
            product.setQuantity(product.getQuantity() + d.getQuantity());
            productRepository.save(product);
        }
    }

    @PostMapping("/user/myInvoiceFilter")
    public List<Invoice> myInvoiceFilter(@RequestBody InvoiceDto i){
        User user = userService.getUserWithAuthority();
        List<Invoice> list = null;
        if((i.getStart() == null || i.getEnd() == null)  && i.getType() < 0 && i.getStatusIn() <0){
            list = invoiceRepository.findByUserId(user.getId());
            return list;
        }
        if(i.getStart() == null || i.getEnd() == null){
            i.setStart(Date.valueOf("1900-01-01"));
            i.setEnd(Date.valueOf("2100-01-01"));
        }
        if(i.getType() < 0 && i.getStatusIn() <0){
            list = invoiceRepository.filter1(user.getId(), i.getStart(), i.getEnd());
        }
        else if(i.getType() < 0 && i.getStatusIn() > 0){
            list = invoiceRepository.filter2(user.getId(), i.getStart(), i.getEnd(), i.getStatusIn());
        }
        else if(i.getType() >= 0 && i.getStatusIn() < 0){
            list = invoiceRepository.filter3(user.getId(), i.getStart(), i.getEnd(), i.getType());
        }
        else if(i.getType() >= 0 && i.getStatusIn() > 0){
            list = invoiceRepository.filter4(user.getId(), i.getStart(), i.getEnd(), i.getType(), i.getStatusIn());
        }
        return list;
    }

    @PostMapping("/admin/allInvoiceFilter")
    public List<Invoice> allInvoiceFilter(@RequestBody InvoiceDto i){
        List<Invoice> list = null;
        if((i.getStart() == null || i.getEnd() == null)  && i.getType() < 0 && i.getStatusIn() <0){
            list = invoiceRepository.findAllAdmin();
            return list;
        }
        if(i.getStart() == null || i.getEnd() == null){
            i.setStart(Date.valueOf("1900-01-01"));
            i.setEnd(Date.valueOf("2100-01-01"));
        }
        if(i.getType() < 0 && i.getStatusIn() <0){
            list = invoiceRepository.filter1Admin(i.getStart(), i.getEnd());
        }
        else if(i.getType() < 0 && i.getStatusIn() > 0){
            list = invoiceRepository.filter2Admin(i.getStart(), i.getEnd(), i.getStatusIn());
        }
        else if(i.getType() >= 0 && i.getStatusIn() < 0){
            list = invoiceRepository.filter3Admin(i.getStart(), i.getEnd(), i.getType());
        }
        else if(i.getType() >= 0 && i.getStatusIn() > 0){
            list = invoiceRepository.filter4Admin(i.getStart(), i.getEnd(), i.getType(), i.getStatusIn());
        }
        return list;
    }


    @PostMapping("/admin/huydonAdmin")
    public void huydonAdmin(@RequestParam("id") Long id, @RequestBody String content) throws Exception {
        Invoice invoice = invoiceRepository.findById(id).get();
        invoice.setNoteAdmin(content);
        invoice.setStatusIn(statusInRepository.statusHuy());
        List<DetailInvoice> list = detailInvoiceRepository.findByInvoiceId(invoice.getId());
        for(DetailInvoice d : list){
            Product product = d.getProduct();
            product.setQuantity(product.getQuantity() + d.getQuantity());
            productRepository.save(product);
        }
        mailService.sendEmail(invoice.getUser().getEmail(), "Đơn hàng đã bị hủy",content, false, true);
    }

    @GetMapping("/admin/doanhthu")
    public List<Double> doanhThu(@RequestParam("nam") Integer nam){
        List<Double> list = new ArrayList<>();
        for(int i=1; i< 13; i++){
            Double tong = invoiceRepository.tinhDoanhThu(i, nam);
            list.add(tong);
        }
        return list;
    }

    @PostMapping("/admin/updateTrangThai")
    public void updateTrangThai(@RequestParam("id") Long id, @RequestParam("tt") Long idtt){
        Invoice invoice = invoiceRepository.findById(id).get();
        StatusIn statusIn = statusInRepository.findById(idtt).get();
        invoice.setStatusIn(statusIn);
        if(idtt == 4){
            invoice.setNgayNhan(new Date(System.currentTimeMillis()));
        }
        invoiceRepository.save(invoice);
    }

    @GetMapping("/admin/minAmountInvoice")
    public Double minAmount(){
        return invoiceRepository.minAmount();
    }

    @GetMapping("/admin/maxAmountInvoice")
    public Double maxAmount(){
        return invoiceRepository.maxAmount();
    }
}
