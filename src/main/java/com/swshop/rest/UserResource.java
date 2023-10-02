package com.swshop.rest;

import com.swshop.dto.CustomUserDetails;
import com.swshop.dto.UserDto;
import com.swshop.entity.User;
import com.swshop.jwt.JwtTokenProvider;
import com.swshop.repository.UserRepository;
import com.swshop.service.MailService;
import com.swshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserResource {
    private final UserRepository userRepository;

    private final JwtTokenProvider jwtTokenProvider;

    private final UserService userService;

    private final MailService mailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserResource(UserRepository userRepository, JwtTokenProvider jwtTokenProvider, UserService userService, MailService mailService) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.mailService = mailService;
    }
    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody User user) throws URISyntaxException {
        Optional<User> users = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        System.out.println(users);
        if(users.isPresent() == false){
            return ResponseEntity.status(401)
                    .body(null);
        }
        CustomUserDetails customUserDetails = new CustomUserDetails(users.get());
        String token = jwtTokenProvider.generateToken(customUserDetails);
        return ResponseEntity
                .created(new URI("/api/authen/" ))
                .body(token);
    }

    @PostMapping("/register")
    public ResponseEntity<Integer> save(@RequestBody User user) throws URISyntaxException {
        if(userService.checkEmailexist(user.getEmail())){
            HttpHeaders headers = new HttpHeaders();
            headers.add("email already exist ", user.getEmail());
            return ResponseEntity.status(300).headers(headers)
                    .body(1);
        }
        User result = userService.save(user);
        System.out.println(result);
        mailService.sendEmail(user.getEmail(), "Kích hoạt tài khoản website","truy cập vào link sau để xác thực tài khoản: http://localhost:8080/keyactive?key="+result.getActivation_key(),false, false);
        return ResponseEntity
                .created(new URI("/api/save/" + result.getId()))
                .body(0);
    }

    @GetMapping("")
    public void finishRegistration(){

    }


    @PostMapping("/updateUser")
    public ResponseEntity<Integer> update(@RequestBody User user) throws URISyntaxException {
        User u = userService.getUserWithAuthority();
        if(u.getId() != user.getId()){
            return ResponseEntity.status(500).body(0);
        }
        u.setEmail(user.getEmail());
        u.setPhone(user.getPhone());
        User result = userRepository.save(u);
        System.out.println(result);
        return ResponseEntity.status(200).body(1);
    }

    @PostMapping("/admin/addAdmin")
    public ResponseEntity<Integer> addAdmin(@RequestBody User user) throws URISyntaxException {
        if(userService.checkEmailexist(user.getEmail())){
            HttpHeaders headers = new HttpHeaders();
            headers.add("email already exist ", user.getEmail());
            return ResponseEntity.status(300).headers(headers)
                    .body(1);
        }
        user.setActived(1);
        user.setUsername(user.getEmail());
        user.setCreated_date(new Timestamp(System.currentTimeMillis()));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User result = userRepository.save(user);
        System.out.println(result);
        return ResponseEntity
                .created(new URI("/api/save/" + result.getId()))
                .body(0);
    }


    @PostMapping("/userlogged")
    public User getUserLogged(){
        return userService.getUserWithAuthority();
    }

    @GetMapping("/admin/getUserNotAdmin")
    public List<User> getUserNotAdmin() {
        return userRepository.findUserNotAdmin("ROLE_ADMIN");
    }

    @GetMapping("/admin/getUserNotAdminThisMonth")
    public List<User> getUserNotAdminThisMonth() {
        String date = new Date(System.currentTimeMillis()).toString();
        return userRepository.findUserNotAdminThisMonth("ROLE_ADMIN",Integer.valueOf(date.split("-")[1]), Integer.valueOf(date.split("-")[0]));
    }

    @GetMapping("/admin/getUserNotAdminByDate")
    public List<User> getUserNotAdminByDate(@RequestParam("d1") Date d1, @RequestParam("d2") Date d2) {
        System.out.println("d1: "+d1);
        System.out.println("d2: "+d2);
        return userRepository.findUserNotAdminAndDate("ROLE_ADMIN", d1, d2);
    }

    @GetMapping("/admin/getUserNotUser")
    public List<User> getUserNotUser() {
        return userRepository.findUserNotAdmin("ROLE_USER");
    }

    @PostMapping("/admin/activeUser")
    public void activeOrUnactiveUser(@RequestParam("id") Long id){
        User user = userRepository.findById(id).get();
        if(user.getActived() == 1){
            user.setActived(0);
        }
        else{
            user.setActived(1);
        }
        userRepository.save(user);
    }

    @GetMapping("/public/findUserNotDtoById")
    public User findUserById(@RequestParam("id") Long id) {
        return userRepository.findById(id).get();
    }

    @PostMapping("/resetpass")
    public ResponseEntity<String> forgotpass(@RequestBody String email) throws URISyntaxException {
        Optional<User> user = userRepository.getUserByEmail(email);
        if(user.isPresent() == false){
            return ResponseEntity.status(500)
                    .body("this email not exist");
        }
        else{
            String newPass = userService.randomPass();
            User users = user.get();
            users.setPassword(passwordEncoder.encode(newPass));
            userRepository.save(users);
            mailService.sendEmail(email,"Đặt lại mật khẩu website swipshop","Mật khẩu mới của bạn là: "+newPass,false, false);
        }
        return ResponseEntity.status(200)
                .body("check your email");
    }

    @GetMapping("/admin/checkroleadmin")
    public void checkAdmin(){
        System.out.println("admin");
    }

    @GetMapping("/user/checkroleUser")
    public void checkroleUser(){
        System.out.println("user");
    }


    @PostMapping("/user/updateinfor")
    public void updateInfor(@RequestBody UserDto userDto){
        User user = userService.getUserWithAuthority();
        user.setFullname(userDto.getFullname());
        user.setEmail(userDto.getEmail());
        user.setPhone(userDto.getPhone());
        userRepository.save(user);
    }

    @PostMapping("/user/changePassword")
    public void changePassword(@RequestParam("old") String oldPass, @RequestParam("new") String newPass) throws Exception {
        User user = userService.getUserWithAuthority();
        if(passwordEncoder.matches(oldPass, user.getPassword())){
            user.setPassword(passwordEncoder.encode(newPass));
        }
        else{
            throw new Exception("password khong dung");
        }
        userRepository.save(user);
    }
}
