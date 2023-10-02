package com.swshop.controller.user;

import com.swshop.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AllView {

    @RequestMapping(value = {"/","/index"}, method = RequestMethod.GET)
    public String home(){
        return "user/index";
    }

    @RequestMapping(value = {"/baiviet"}, method = RequestMethod.GET)
    public String baiviet(){
        return "user/baiviet";
    }

    @RequestMapping(value = {"/cart"}, method = RequestMethod.GET)
    public String cart(){
        return "user/cart";
    }

    @RequestMapping(value = {"/checkout"}, method = RequestMethod.GET)
    public String checkout(){
        return "user/checkout";
    }

    @RequestMapping(value = {"/chinhsach"}, method = RequestMethod.GET)
    public String chinhsach(){
        return "user/chinhsach";
    }

    @RequestMapping(value = {"/chitietsp"}, method = RequestMethod.GET)
    public String chitietsp(){
        return "user/chitietsp";
    }

    @RequestMapping(value = {"/ctblog"}, method = RequestMethod.GET)
    public String ctblog(){
        return "user/ctblog";
    }

    @RequestMapping(value = {"/lichsudat"}, method = RequestMethod.GET)
    public String lichsudat(){
        return "user/lichsudat";
    }

    @RequestMapping(value = {"/lienhe"}, method = RequestMethod.GET)
    public String lienhe(){
        return "user/lienhe";
    }

    @RequestMapping(value = {"/listsp"}, method = RequestMethod.GET)
    public String listsp(){
        return "user/listsp";
    }

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public String login(){
        return "user/login";
    }

    @RequestMapping(value = {"/regis"}, method = RequestMethod.GET)
    public String regis(){
        return "user/regis";
    }

    @RequestMapping(value = {"/remember"}, method = RequestMethod.GET)
    public String remember(){
        return "user/remember";
    }

    @RequestMapping(value = {"/taikhoan"}, method = RequestMethod.GET)
    public String taikhoan(){
        return "user/taikhoan";
    }

    @RequestMapping(value = {"/thanhcong"}, method = RequestMethod.GET)
    public String thanhcong(){
        return "user/thanhcong";
    }

    @RequestMapping(value = {"/thanhcongoff"}, method = RequestMethod.GET)
    public String thanhcongoff(){
        return "user/thanhcongoff";
    }

    @RequestMapping(value = {"/vanchuyen"}, method = RequestMethod.GET)
    public String vanchuyen(){
        return "user/vanchuyen";
    }
}
