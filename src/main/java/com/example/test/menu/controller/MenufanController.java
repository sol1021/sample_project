package com.example.test.menu.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.menu.service.MenufanService;

@RestController
@RequestMapping("/home")
public class MenufanController {
	
	@Autowired
	MenufanService menufanServ;	
	
	@GetMapping
	public List<Map<String, Object>> selectMenuAll() {
		return menufanServ.selectMenuAll();
	}
}
	
	