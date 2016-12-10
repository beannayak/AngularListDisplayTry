package com.rasal.lasttimeforsure;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class RootController {
	@RequestMapping (value="", method=RequestMethod.GET)
	public String rootController (Model model, HttpServletRequest request) {
		model.addAttribute("contextPath", request.getContextPath());
		return "index";
	}
}
