package com.board.back.repository;
import com.board.back.model.Class_elective;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClassElectiveRepository extends JpaRepository<Class_elective, Integer>{
<<<<<<< HEAD
    @Query(value="SELECT * FROM Class_elective s order by=:a desc," +
            ":b desc, :c desc,:d desc,:e desc,:f desc", nativeQuery = true)
    List<Class_elective> findCelective(@Param("a")String a, @Param("b")String b, @Param("c")String c,
                                        @Param("d")String d, @Param("e")String e, @Param("f")String f);
}
=======
    @Query(value="SELECT * FROM Class_elective", nativeQuery = true)
    List<Class_elective> findCelective();
}
>>>>>>> main
