package com.swshop.rest;

import com.swshop.entity.DetailInvoice;
import com.swshop.repository.DetailInvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DetailInvoiceRest {

    @Autowired
    private DetailInvoiceRepository detailInvoiceRepository;

    @GetMapping("/detailinvoiceByInvoice")
    public List<DetailInvoice> findByInvoice(@RequestParam("id") Long id){
        return detailInvoiceRepository.findByInvoiceId(id);
    }

}

