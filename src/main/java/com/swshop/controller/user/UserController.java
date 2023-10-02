package com.swshop.controller.user;

import com.swshop.entity.User;
import com.swshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping(value = "/keyactive", method = RequestMethod.GET)
    public String finishRegis(@RequestParam("key") String key){
        User user = userRepository.getUserByActivationKey(key).get();
        user.setActivation_key(null);
        user.setActived(1);
        userRepository.save(user);
        return "redirect:login";
    }
}
