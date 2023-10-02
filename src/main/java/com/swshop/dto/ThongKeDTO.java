package com.swshop.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Setter
@Getter
public class ThongKeDTO {

    private Integer idpro;

    private String name;

    private Double price;

    private Integer idinvoice;

    private String fullname;

    private Date createdDate;

    private Integer quantity;
}
