package com.swshop.rest;

import com.swshop.dto.OrderDto;
import com.swshop.dto.PaymentDto;
import com.swshop.dto.ProductOrderDto;
import com.swshop.dto.ResponsePayment;
import com.swshop.entity.*;
import com.swshop.repository.*;
import com.swshop.service.UserService;
import com.vnua.edu.hieu.config.Environment;
import com.vnua.edu.hieu.enums.RequestType;
import com.vnua.edu.hieu.models.PaymentResponse;
import com.vnua.edu.hieu.models.QueryStatusTransactionResponse;
import com.vnua.edu.hieu.processor.CreateOrderMoMo;
import com.vnua.edu.hieu.processor.QueryTransactionStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MomoPayment {

    @Autowired
    private HistoryPayRepository historyPayRepository;

    @Autowired
    private StatusInRepository statusInRepository;

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private DetailInvoiceRepository detailInvoiceRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/urlpayment")
    public ResponsePayment getUrlPayment(@RequestBody PaymentDto paymentDto){
        String orderId = String.valueOf(System.currentTimeMillis());
        String requestId = String.valueOf(System.currentTimeMillis());
        Environment environment = Environment.selectEnv("dev");
        PaymentResponse captureATMMoMoResponse = null;
        try {
            captureATMMoMoResponse = CreateOrderMoMo.process(environment, orderId, requestId, Long.toString(paymentDto.getAmount()), paymentDto.getContent(), paymentDto.getReturnUrl(), paymentDto.getNotifyUrl(), "", RequestType.PAY_WITH_ATM, null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("url ====: "+captureATMMoMoResponse.getPayUrl());
        ResponsePayment responsePayment = new ResponsePayment(captureATMMoMoResponse.getPayUrl(),orderId,requestId);
        return responsePayment;
    }

    @PostMapping("/checkPayment")
    public Integer checkPayment(@RequestBody OrderDto orderDto) throws Exception {
        Environment environment = Environment.selectEnv("dev");
        QueryStatusTransactionResponse queryStatusTransactionResponse = QueryTransactionStatus.process(environment, orderDto.getOrderId(), orderDto.getRequestId());
        System.out.println("qqqq-----------------------------------------------------------"+queryStatusTransactionResponse.getMessage());
        if(queryStatusTransactionResponse.getResultCode() == 0){
            if(historyPayRepository.findByOrderIdAndRequestId(orderDto.getOrderId(), orderDto.getRequestId()).isPresent() == false){
                Integer soluong = 0;
                for(ProductOrderDto p : orderDto.getProductOrderDtos()){
                    soluong += p.getQuantity();
                }
                User user = userService.getUserWithAuthority();
                Invoice invoice = new Invoice();
                invoice.setCreatedDate(new Date(System.currentTimeMillis()));
                invoice.setPayType(1);
                invoice.setNote(orderDto.getNote());
                invoice.setTotalAmount(Double.valueOf(queryStatusTransactionResponse.getAmount()));
                invoice.setFullname(user.getFullname());
                invoice.setAddress(user.getDiaChi());
                invoice.setPhone(user.getPhone());
                invoice.setStatusIn(statusInRepository.getFirst());
                invoice.setUser(user);
                invoice.setNumOfProduct(soluong);
                invoiceRepository.save(invoice);

                HistoryPay historyPay = new HistoryPay();
                historyPay.setCreatedDate(new Date(System.currentTimeMillis()));
                historyPay.setTotalAmount(invoice.getTotalAmount());
                historyPay.setInvoice(invoice);
                historyPay.setOrderId(orderDto.getOrderId());
                historyPay.setRequestId(orderDto.getRequestId());
                historyPayRepository.save(historyPay);

                for(ProductOrderDto p : orderDto.getProductOrderDtos()){
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
                return 1;
            }
        }
        else{
            return 0;
        }
        return 1;
    }
}

