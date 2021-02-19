package com.board.back.repository;
import java.util.List;
import com.board.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {
    //User 회원정보 모두 불러오기
    public final static String SELECT_USER_LIST_PAGED = ""
            + "SELECT "
            + "user_no,"
            + "user_id,"
            + "user_pw,"
            + "user_major,"
            + "user_grade"
            + " FROM user WHERE 0 < user_no ";

    @Query(value = SELECT_USER_LIST_PAGED, nativeQuery = true)
    List<User> findFromTo(
            final Integer objectStartNum,
            final Integer objectEndNum);

}