package com.swshop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Invoice")
@Getter
@Setter
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Date createdDate;

    private Date ngayNhan;

    private Double totalAmount;

    private Integer payType;

    private String note;

    private Integer numOfProduct;

    private String address;

    private String phone;

    private String fullname;

    private String noteAdmin;

    @ManyToOne
    @JoinColumn(name = "statusIn_id")
    private StatusIn statusIn;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
