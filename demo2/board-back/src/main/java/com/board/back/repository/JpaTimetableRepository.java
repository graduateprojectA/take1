package com.board.back.repository;

import com.board.back.model.TimeTable;

import javax.persistence.EntityManager;
import java.util.List;

public class JpaTimetableRepository implements TimetableRepository{
    private final EntityManager em;

    public JpaTimetableRepository(EntityManager em) {
        this.em = em;
    }
    public TimeTable save(TimeTable timetable) {
        em.persist(timetable);
        return timetable;
    }

    @Override
    public List<TimeTable> findAll() {
        return null;
    }

}
