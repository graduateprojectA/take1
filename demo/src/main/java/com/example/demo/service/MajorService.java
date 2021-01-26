package com.example.demo.service;

import com.example.demo.domain.Majors;
import com.example.demo.repository.MajorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MajorService {
    @Autowired
    private final MajorRepository majorRepository;
    public MajorService(MajorRepository majorRepository){
        this.majorRepository=majorRepository;
    }

    @Autowired
    public List<Majors> getAllMajor() {
        System.out.println("성공입니다2.");
        return majorRepository.findAll();
    }
}
