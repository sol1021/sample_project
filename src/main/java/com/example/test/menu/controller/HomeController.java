package com.example.test.menu.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {
    @GetMapping("/")
	public String todo(){
        return "index";
    }
}
