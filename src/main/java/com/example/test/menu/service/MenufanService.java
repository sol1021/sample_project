package com.example.test.menu.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.test.menu.mapper.MenufanMapper;

@Service
public class MenufanService {
	
	@Autowired
	MenufanMapper mapper;
	
	public List<Map<String, Object>> selectMenuAll() {
		return mapper.selectMenuAll();
	}
	
	
}