package com.board.back.service;

import com.board.back.model.User;
import com.board.back.model.User2;
import com.board.back.repository.LoginRepository;
import com.board.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public List<User2> getAllUser() {
        return loginRepository.findAll();
    }

    Boolean status = null;
    public void setStatus(boolean a){
        this.status = a;
    }
    public boolean getStatus(){
        return this.status;
    }

    // login (React에서 로그인 버튼을 눌렀을 때 넘어온 정보: 학번, pw  ==  User)
    public void postUser(User user) {
//        String u = user.toString();
        int user_id = user.getId();  //리액트로부터 받은 id
        String user_pw = user.getPassword();
        List<User2> us = getAllUser();
        Boolean fla = false;
        setStatus(false);

        for (int i = 0; i < us.size(); i++) {
            if (us.get(i).getId() == user_id) {
                if (us.get(i).getPassword().equals(user_pw)) {
                    checkUser(true);
                    fla = true;
                    setStatus(true);
                    break;
                }
            }
            else {
                checkUser(false);
                fla = false;
                setStatus(false);
            }
        }
        if (fla==true)                     System.out.println("Available user");
        else                 System.out.println("Denied user");
    }

    public boolean checkUser(Boolean a) {
        return a;
    }
}

//        System.out.println("User : "+u);
//        System.out.println("DB: "+us);
//        System.out.println("DB num_1: "+us.get(0).getId());
//        System.out.println("User Id: "+user_id);


