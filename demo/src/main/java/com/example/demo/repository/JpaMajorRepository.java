package com.example.demo.repository;

import javax.persistence.EntityManager;
import java.util.List;
import com.example.demo.domain.Majors;
import org.springframework.stereotype.Repository;
@Repository
public class JpaMajorRepository implements MajorRepository{
    private final EntityManager em;
    public JpaMajorRepository(EntityManager em) {
        this.em = em;
    }
    public List<Majors> findAll() {
        return em.createQuery("select m from Majors m", Majors.class)
                .getResultList();
    }
}
