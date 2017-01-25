package com.rasal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rasal.domain.JustAnEntity;
import com.rasal.service.UserCreatorAndSignerService;

@Controller
@RequestMapping("/transaction_test")
public class ExceptionController {

	@Autowired
	private UserCreatorAndSignerService userCreatorAndSignerService;
	
	@RequestMapping("/save_without_exception")
	public String saveController() {
		JustAnEntity entity = new JustAnEntity("Sajana Maharjan", 29);
		userCreatorAndSignerService.createUserAndSignTheDeedDocuments(entity, "SMDhakal", false);
		return "index.jsp";
	}
	
	@RequestMapping("/exit_with_exception") 
	public String rollbackController() {
		try {
			JustAnEntity entity = new JustAnEntity("Binayak Dhakal", 28);
			userCreatorAndSignerService.createUserAndSignTheDeedDocuments(entity, "BDhakal", true);
		} catch (Exception e) {
			System.out.println("Exception occured");
		}
		return "index";
	}
}
