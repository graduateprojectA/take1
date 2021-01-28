package com.board.back.service;

import com.board.back.exception.ResourceNotFoundException;
import com.board.back.model.Majors;
import com.board.back.repository.MajorRepository;
import com.board.back.util.EncryptUtil;
import com.board.back.util.ValidationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MajorService {

    @Autowired
    private MajorRepository majorRepository;

    ValidationUtil vUtil = ValidationUtil.getInstance();
    EncryptUtil eUtil = EncryptUtil.getInstance();

    /**
     * 회원 정보가져오기
     * @param id
     * @return
     */
    public ResponseEntity<Majors> getMajor(Integer id) {
        Majors majors= majorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Member Data by id : ["+id+"]"));
        return ResponseEntity.ok(majors);
    }

}
