package com.board.back.controller;

import com.board.back.model.User;
import com.board.back.repository.MajorRepository;
import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TimetableController {
	@Autowired
	private MajorRepository majorRepository;
	@Autowired
	private TimetableService timetableService;
	@Autowired
	public TimetableController(TimetableService timetableService) {
		this.timetableService = timetableService;
	}

	@PostMapping("/timetableUser")
	public void getUser(@RequestBody int user_no) {
		System.out.println("출력");
		Integer u = user_no;
		timetableService.setUser_no(user_no);
		timetableService.getTime(user_no);
		timetableService.getUser_class(user_no);
		System.out.println("h5");
	}

}
