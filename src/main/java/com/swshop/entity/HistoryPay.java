package com.swshop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "HistoryPay")
@Getter
@Setter
public class HistoryPay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Double totalAmount;

    private Date createdDate;

    private String requestId;

    private String orderId;

    @ManyToOne
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;
}
