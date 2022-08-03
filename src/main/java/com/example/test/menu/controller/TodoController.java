package com.example.test.menu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;


@Controller
public class TodoController {
	
	@GetMapping("/todo")
	public String todo(Model model){
        model.addAttribute("title","Todo!!");
        return "sample";
    }
}
	
	