package com.rasal.lasttimeforsure;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class RootController {
	@RequestMapping (value="", method=RequestMethod.GET)
	public String rootController () {
		return "index";
	}
}
