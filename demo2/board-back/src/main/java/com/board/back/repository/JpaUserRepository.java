package com.board.back.repository;
import com.board.back.model.User;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;
import org.graalvm.compiler.lir.LIRInstruction;

public class JpaUserRepository implements UserRepository {
    private final EntityManager em;
    public JpaUserRepository(EntityManager em) {
        this.em = em;
    }

    public Optional<User> findUser(Integer user_id) {
        List<User> result = em.createQuery("select m from User m where m.user_id = :user_id", User.class)
                .setParameter("user_id", user_id)
                .getResultList();
        return result.stream().findAny();  /*return : 찾은 user 정보 그대로 optional 형태로 전달*/
    }

}
