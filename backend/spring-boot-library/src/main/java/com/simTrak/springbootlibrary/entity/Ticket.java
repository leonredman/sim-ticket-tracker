// https://wgu.udemy.com/course/full-stack-react-and-java-spring-boot-the-developer-guide/learn/lecture/33605594#overview
package com.simTrak.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Table(name = "ticket")
@Data
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private Long id;

    @Column(name = "ticket_tracking_number")
    private String ticket_tracking_number;

    @ManyToOne
    private Customer customer;

    @Column (name = "created_date")
    private Date created_date;

    private StatusType status;

    @Column (name = "due_date")
    private Date due_date;

    private PriorityType priority;

    private CategoryType category;

    @Column (name = "description")
    private String description;

    @Column (name = "last_updated")
    private Date last_updated;


}
