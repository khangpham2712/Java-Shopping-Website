package com.swshop.rest;

import com.swshop.entity.Comment;
import com.swshop.entity.User;
import com.swshop.entity.UserSearch;
import com.swshop.repository.CommentRepository;
import com.swshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CommentRest {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/user/saveCommnet")
    public void save(@RequestBody Comment comment){
        User user = userService.getUserWithAuthority();
        comment.setUser(user);
        comment.setCreatedDate(new Date(System.currentTimeMillis()));
        commentRepository.save(comment);
    }

    @GetMapping("/public/comments")
    public List<Comment> findByPro(@RequestParam("id") Long id){
        List<Comment> list = commentRepository.findByProId(id);
        try {
            User user = userService.getUserWithAuthority();
            for(Comment c : list){
                if(c.getUser().getId() == user.getId()){
                    c.setMyComment(1);
                }
            }
        }
        catch (Exception e){
            return list;
        }
        return list;
    }

    @DeleteMapping("/user/deletcomments")
    public void delete(@RequestParam("id") Long id){
        commentRepository.deleteById(id);
    }
}
