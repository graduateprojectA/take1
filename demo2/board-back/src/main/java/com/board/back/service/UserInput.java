package com.board.back.service;

import java.sql.*;

public class UserInput {
    public static void insert_query(String str){
        Connection conn = null;
        Statement state = null;
        ResultSet resset = null;
        PreparedStatement pstmt = null;
        String url = "jdbc:mysql://localhost:3306/graduate?&serverTimezone=UTC";
        String sql = "";
        try {
            conn = DriverManager.getConnection(url, "root", "wlsgml214");
            state = conn.createStatement();
            sql = "insert into graduate.user2 (user_id, user_pw,user_major, user_grade) values(?,?,?,?)";
            pstmt = conn.prepareStatement(sql);
            String user_source[]=str.split("%");
            int id=Integer.parseInt(user_source[0]);
            String paw=user_source[1].replaceAll("2F","");
            int major=Integer.parseInt(user_source[2].replaceAll("2F",""));
            int grade=Integer.parseInt(user_source[3].replaceAll("2F","").replaceAll("=",""));
            System.out.println(id+" "+paw+" "+major+" "+grade);
            pstmt.setInt(1, id);
            pstmt.setString(2, paw);
            pstmt.setInt(3, major);
            pstmt.setInt(4, grade);
            int r = pstmt.executeUpdate();
        } catch (SQLException e) {// if connection is failed
            System.out.println("에러: " + e);// print why fail
        } finally {// when ended
            if (resset != null) {
                try {
                    pstmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if (state != null) {
                try {
                    state.close();// close statement
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if (conn != null) {
                try {
                    conn.close();// close connection
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
