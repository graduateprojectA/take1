package com.board.back.service;
import com.board.back.model.User;
import com.board.back.model.User2;
import com.board.back.repository.LoginRepository;
import com.board.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public List<User2> getAllUser() {
        System.out.println(loginRepository.findAll());
        return loginRepository.findAll();
    }



    //  login (React에서 로그인 버튼을 눌렀을 때 넘어온 정보: 학번, pw  ==  User)
    public static void findUser(User user) {
        Integer id = user.getId(); /*React에서 입력된 id*/
        String pw = user.getPassword(); /*React에서 입력된 pw*/

        Optional<User> us = LoginRepository.findUser(id); /*DB속 id와 React id 정보 비교*/

        if (getAllUser().isPresent() == true){ /*us 값이 존재할 때 == 해당 id가 db에 있을 때*/
            if (pw == us.get().getPassword()){ /*해당 id 비밀번호 일치할 때*/

            }
            else{ /*해당 id 비밀번호 일치하지 않을 때*/

            }
        }
        else{ /*us 값이 존재하지 않을 때 == 해당 id가 db에 없을 때*/

        }
    }

}
