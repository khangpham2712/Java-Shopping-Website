package com.swshop.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AllViewAdmin {

    @RequestMapping(value = {"/admin","/admin/index"}, method = RequestMethod.GET)
    public String home(){
        return "admin/index";
    }

    @RequestMapping(value = {"/admin/addblog"}, method = RequestMethod.GET)
    public String baiviet(){
        return "admin/addblog";
    }

    @RequestMapping(value = {"/admin/addcategory"}, method = RequestMethod.GET)
    public String addcategory(){
        return "admin/addcategory";
    }

    @RequestMapping(value = {"/admin/adddonnhap"}, method = RequestMethod.GET)
    public String adddonnhap(){
        return "admin/adddonnhap";
    }

    @RequestMapping(value = {"/admin/addproduct"}, method = RequestMethod.GET)
    public String addproduct(){
        return "admin/addproduct";
    }

    @RequestMapping(value = {"/admin/addtrademark"}, method = RequestMethod.GET)
    public String addtrademark(){
        return "admin/addtrademark";
    }

    @RequestMapping(value = {"/admin/blogadmin"}, method = RequestMethod.GET)
    public String blogadmin(){
        return "admin/blogadmin";
    }

    @RequestMapping(value = {"/admin/category"}, method = RequestMethod.GET)
    public String category(){
        return "admin/category";
    }

    @RequestMapping(value = {"/admin/donhang"}, method = RequestMethod.GET)
    public String donhang(){
        return "admin/donhang";
    }

    @RequestMapping(value = {"/admin/nhaphang"}, method = RequestMethod.GET)
    public String nhaphang(){
        return "admin/nhaphang";
    }

    @RequestMapping(value = {"/admin/sanpham"}, method = RequestMethod.GET)
    public String sanpham(){
        return "admin/sanpham";
    }

    @RequestMapping(value = {"/admin/trademark"}, method = RequestMethod.GET)
    public String trademark(){
        return "admin/trademark";
    }

    @RequestMapping(value = {"/admin/user"}, method = RequestMethod.GET)
    public String user(){
        return "admin/user";
    }

    @RequestMapping(value = {"/admin/wallet"}, method = RequestMethod.GET)
    public String wallet(){
        return "admin/wallet";
    }

    @RequestMapping(value = {"/admin/lienhe"}, method = RequestMethod.GET)
    public String lienhe(){
        return "admin/lienhe";
    }
}
