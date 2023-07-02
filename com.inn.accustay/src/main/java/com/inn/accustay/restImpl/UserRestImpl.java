package com.inn.accustay.restImpl;

import com.inn.accustay.constents.hotelConstants;
import com.inn.accustay.rest.UserRest;
import com.inn.accustay.service.UserService;
import com.inn.accustay.utils.hotelUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserRestImpl implements UserRest {
@Autowired
UserService userService;
    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        try{
            return userService.signUp(requestMap);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return hotelUtils.getResponseEntity(hotelConstants.SOMETHING_WENT_WRONG,HttpStatus.INTERNAL_SERVER_ERROR);

    }
}
