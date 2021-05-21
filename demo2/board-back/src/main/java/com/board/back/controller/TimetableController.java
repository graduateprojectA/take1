package com.board.back.controller;

import com.board.back.model.User_elective_timetable2;
import com.board.back.model.User_timetable2;
import com.board.back.repository.UserTimetableRepository;
import com.board.back.service.TimeService;
import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TimetableController {
	@Autowired
	private TimetableService timetableService;
	@Autowired
	private TimeService timeService;
	@Autowired
	private UserTimetableRepository userTimetableRepository;
	@Autowired
	public TimetableController(TimetableService timetableService) {
		this.timetableService = timetableService;
	}

	public void getUser(@RequestBody int user_no) {
		timetableService.setUser_no(user_no);
		timetableService.getTime(user_no);
		timetableService.getUser_class(user_no);
		timeService.setUser_no(user_no);
		timeService.setTimetable(user_no);
	}
	@PostMapping("/testTime")
	public void test(@RequestBody int user_no) {
		timetableService.setUser_no(user_no);
		timetableService.getTime(user_no);
		timetableService.getUser_class(user_no);
		timeService.setUser_no(user_no);
		timeService.setTimetable(user_no);
	}
	@GetMapping("/timetableUser")
	public List<User_timetable2> printTimetable(){
		if (timeService.printTimetable() != null){
			return timeService.printTimetable();}
		else
			return null;
	}

	@GetMapping("/electiveUser")
	public List<List<User_elective_timetable2>> printElective(){
		if (timeService.printElective() != null)
			return timeService.printElective();
		else
			return null;
	}
}