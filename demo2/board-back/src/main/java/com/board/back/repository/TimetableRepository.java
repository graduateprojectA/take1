package com.board.back.repository;

import com.board.back.model.TimeTable;

import javax.persistence.EntityManager;
import java.util.List;

public interface TimetableRepository {
    TimeTable save(TimeTable timetable);
    List<TimeTable> findAll();
}
