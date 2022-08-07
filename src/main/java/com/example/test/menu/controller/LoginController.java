package com.example.test.menu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;


@Controller
public class LoginController {
	
	@GetMapping("/login")
	public String todo(Model model){
        model.addAttribute("page","로그인 페이지");
        return "login";
    }
}
	
	