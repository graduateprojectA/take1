package com.board.back.controller;

import com.board.back.model.User;
import com.board.back.repository.MajorRepository;
import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MajorController {
	@Autowired
	private MajorRepository majorRepository;
	@Autowired
	private TimetableService timetableService;
	@Autowired
	public MajorController(TimetableService timetableService) {
		this.timetableService = timetableService;
	}

	@PostMapping("/major")
	public void createUser(@RequestBody User user) {
		timetableService.getMajor(5);
		timetableService.getTime(5);
		timetableService.getUser_class(6);
	}
}
