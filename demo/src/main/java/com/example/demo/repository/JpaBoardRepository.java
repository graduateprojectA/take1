package com.example.demo.repository;
import java.util.List;
import com.example.demo.domain.Board;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
@Repository
public class JpaBoardRepository implements BoardRepository{
    private final EntityManager em;
    public JpaBoardRepository(EntityManager em) {
        this.em = em;
    }
    public List<Board> findAll() {
        return em.createQuery("select m from Board m", Board.class)
                .getResultList();
    }
}
