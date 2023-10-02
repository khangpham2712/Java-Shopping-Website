package com.swshop.dto;

import com.swshop.entity.Product;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductOrderDto {

    private Long id;

    private Integer quantity;

    private Double price;
}
