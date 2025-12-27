package com.server.plane;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.server.plane.mapper")
public class PlaneApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlaneApplication.class, args);
	}

}
