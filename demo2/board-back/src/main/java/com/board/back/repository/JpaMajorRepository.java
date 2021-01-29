package com.board.back.repository;

import com.board.back.model.Majors;
import com.board.back.model.User;
import com.board.back.model.User1_dropmajor;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaMajorRepository {
    private final EntityManager em;
    public JpaMajorRepository(EntityManager em) {
        this.em = em;
    }

    public Optional<Majors> findMajor(String major_name, int major_number, int division_number) {
        List<Majors> result = em.createQuery("select m from Majors m where m.major_name = :major_name and m.major_number = :major_number and m.division_number = :division_number", Majors.class)
                .setParameter("major_name", major_name)
                .setParameter("major_number", major_number)
                .setParameter("division_number", division_number)
                .getResultList();
        return result.stream().findAny();
    }
    public List<Majors> findByRT(int recommend_time) {
        List<Majors> result = em.createQuery("select m from Majors m where m.recommend_time = :recommend_time", Majors.class)
                .setParameter("recommend_time", recommend_time)
                .getResultList();
        return result;
    }
    public List<User> findNoTime() {
        List<User> result = em.createQuery("select m from User m", User.class)
                .getResultList();
        return result;
    }
    public List<User1_dropmajor> findNoThing() {
        List<User1_dropmajor> result = em.createQuery("select m from User1_dropmajor m", User1_dropmajor.class)
                .getResultList();
        return result;
    }
    public List<Majors> findAll() {
        return em.createQuery("select m from Majors m", Majors.class)
                .getResultList();
    }
}
