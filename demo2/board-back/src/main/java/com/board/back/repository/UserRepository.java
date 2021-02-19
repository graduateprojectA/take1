package com.board.back.repository;
import java.util.Optional;
import com.board.back.model.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import javax.persistence.EntityManager;


public interface UserRepository{
    Optional<User> findUser(Integer user_id);

}
