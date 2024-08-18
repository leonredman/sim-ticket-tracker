package com.simTrak.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "category")
@Data
public enum Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private Long id;

    private String status;

    private String CustomerName;

    private Long customerId;

    private String email;

    private String phoneNumber;

    private String domain;

    private String planType;

    private Date dateCreated;

    private Date dateDue;

    private String category;

    private String description;

    private String priority;
}
