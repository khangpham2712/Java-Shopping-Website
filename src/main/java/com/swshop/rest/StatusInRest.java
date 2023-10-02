package com.swshop.rest;

import com.swshop.entity.StatusIn;
import com.swshop.repository.StatusInRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class StatusInRest {

    @Autowired
    private StatusInRepository statusInRepository;

    @GetMapping("/public/allstatus")
    public List<StatusIn> findAll(){
        return statusInRepository.findAll();
    }

    @GetMapping("/public/allstatusUpdate")
    public List<StatusIn> findByAdminUpdate(){
        return statusInRepository.findByAdmin();
    }
}
