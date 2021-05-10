package com.board.back.service;

import com.board.back.repository.MajorRepository;
import com.board.back.repository.TimeRepository;
import com.board.back.repository.UserClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimetableService {
    @Autowired
    private MajorRepository majorRepository;
    @Autowired
    private TimeRepository timeRepository;
    @Autowired
    private UserClassRepository userClassRepository;

    public static int out_time[][] = new int[5][7];
    int major_no=0;
    int time_mon = 0, time_tue = 0, time_wed = 0, time_thr = 0, time_fri = 0;
    int now_class_no=0;

    public void getMajor(Integer no) {
        major_no = majorRepository.findMajorno(no);
        System.out.println(major_no);
    }
    public void getTime(Integer no) {
        time_mon = timeRepository.findMon(no);
        time_tue = timeRepository.findTue(no);
        time_wed = timeRepository.findWed(no);
        time_thr = timeRepository.findThr(no);
        time_fri = timeRepository.findFri(no);
        String[] time_out_now = Integer.toString(time_mon).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[0][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_tue).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[1][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_wed).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[2][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_thr).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[3][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_fri).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[4][i] = Integer.parseInt(time_out_now[i]);
        }

        System.out.println("사용자가 제외한 시간");
        for(int i = 0 ; i < 5; i++) {
            for (int j = 0; j < 7; j++) {
                System.out.printf("%d", out_time[i][j]);
            }
            System.out.println("");
        }
    }
    public void getUser_class(Integer no) {
        now_class_no = userClassRepository.findCnum(no);
        System.out.println(now_class_no);
    }

}
