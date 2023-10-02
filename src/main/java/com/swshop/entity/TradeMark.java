package com.swshop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trade_mark")
@Getter
@Setter
public class TradeMark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String name;

    private String address;

    @JsonIgnore
    @OneToMany(mappedBy = "tradeMark", cascade = CascadeType.REMOVE)
    private List<Product> products;
}
