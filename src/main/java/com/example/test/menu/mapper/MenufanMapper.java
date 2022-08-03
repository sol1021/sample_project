package com.example.test.menu.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface MenufanMapper {
	
	List<Map<String, Object>> selectMenuAll();

}