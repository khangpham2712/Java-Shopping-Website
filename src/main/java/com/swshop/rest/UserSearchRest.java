package com.swshop.rest;

import com.swshop.repository.UserSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserSearchRest {

    @Autowired
    private UserSearchRepository userSearchRepository;

}
