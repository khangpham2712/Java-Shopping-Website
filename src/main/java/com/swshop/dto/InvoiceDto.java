package com.swshop.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class InvoiceDto {

    private Date start;

    private Date end;

    private Integer type;

    private Long statusIn;

}
