package com.swshop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "ImportOrder")
@Getter
@Setter
public class ImportOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Integer quantity;

    private Double importPrice;

    private String distributor;

    private String phone;

    private String address;

    private Date createdDate;

    private Date importDate;

    @ManyToOne
    @JoinColumn(name = "product")
    private Product product;
}
