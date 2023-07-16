package com.example.springproject.Employee;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class user {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public user(){

    }

    public int createTable(){
        String query="CREATE TABLE IF NOT EXISTS USER(ID INT PRIMARY KEY, NAME VARCHAR(200) , AGE INT , CITY VARCHAR(200))";
        int update= this.jdbcTemplate.update(query);

        return update;

    }
}
