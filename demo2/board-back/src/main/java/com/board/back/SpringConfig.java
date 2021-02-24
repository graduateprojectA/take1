package com.board.back;

import com.board.back.repository.*;
import com.board.back.service.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

@Configuration
public class SpringConfig {
    private final DataSource dataSource;
    private final EntityManager em;
    public SpringConfig(DataSource dataSource, EntityManager em) {
        this.dataSource = dataSource;
        this.em = em;
    }
    /*
    @Bean
    public LoginService loginService(){
        return new LoginService(loginRepository());
    }
    @Bean
    public LoginRepository loginRepository() {
        return new JpaLoginRepository(em);
    }*/
}
