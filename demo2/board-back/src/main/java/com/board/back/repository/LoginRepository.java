package com.board.back.repository;
import java.util.List;
import com.board.back.model.User2;
import org.springframework.data.jpa.repository.JpaRepository;
import javax.persistence.EntityManager;

public interface LoginRepository extends JpaRepository<User2, Integer> {

    public List<User2> findAll(Integer user_id);

//    private final EntityManager em;
//    public LoginRepository(EntityManager em) {
//        this.em = em;
//    }
//
////    public void getAllUser(){
////        List<User2> us = em.createQuery("select m from User m where m.user_id = :user_id", User.class)
////                .setParameter("user_id", user_id)
////                .getResultList();
////        return result.stream().findAny();  /*return : 찾은 user 정보 그대로 optional 형태로 전달*/
////    }
//
//    @Override
//    public List<User2> findAll() {
//        List<User2> us = em.createQuery("select m from User m", User.class)
//                .setParameter(m,"user_id");
//                .getResultList();
//        return result.stream().findAny();  /*return : 찾은 user 정보 그대로 optional 형태로 전달*/
//        return null;
//    }
}

