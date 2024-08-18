package com.simTrak.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "customer")
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    @Column(name = "customer_id")
    private Long id;

    @Column(name="customer_first_name")
    private String firstName;

    @Column(name="customer_last_name")
    private String lastName;

    @Column(name="street_address")
    private String street_address;

    @Column(name="city")
    private String city; 

    @Column(name="state")
    private String state; 

    @Column(name="country")
    private String country; 

    @Column(name="zip_code")
    private String zip_code;

    @Column(name="email")
    private String email;

    @Column(name="phone_number")
    private String phone_number;

    @Column(name="register_date")
    private Date register_date;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customers")
    private Set<Ticket> tickets;
}
