package com.swshop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "ImageProduct")
@Getter
@Setter
public class ImageProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String link;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
