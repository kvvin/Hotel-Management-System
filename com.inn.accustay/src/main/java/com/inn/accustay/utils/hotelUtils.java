package com.inn.accustay.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class hotelUtils {
    private  hotelUtils(){

    }
    public static ResponseEntity<String> getResponseEntity(String responseMessage, HttpStatus httpStatus){
        return  new ResponseEntity<String>("{\"message\":\""+ responseMessage + "\"}", httpStatus);
    }
}
