package com.swshop.rest;

import com.swshop.entity.TradeMark;
import com.swshop.repository.ProductRepository;
import com.swshop.repository.TradeMarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TradeMarkRest {

    @Autowired
    private TradeMarkRepository tradeMarkRepository;

    @PostMapping("/admin/addOrUpdateTradeMark")
    public void save(@RequestBody TradeMark tradeMark){
        tradeMarkRepository.save(tradeMark);
    }

    @GetMapping("/public/alltrademark")
    public List<TradeMark> findAll(){
        return tradeMarkRepository.findAll();
    }

    @GetMapping("/public/TradeMarkById")
    public TradeMark findById(@RequestParam("id") Long id){
        return tradeMarkRepository.findById(id).get();
    }

    @DeleteMapping("/admin/deleteTradeMark")
    public void deleteCategory(@RequestParam("id") Long id){
        tradeMarkRepository.deleteById(id);
    }

}
