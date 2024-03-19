package com.ceica.springweb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {
    @GetMapping("/administrator")
    public String Hello(){
        return "admin";
    }
}
