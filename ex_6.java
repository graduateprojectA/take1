import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class ex_6 {
	static int out_time[][] = new int[5][7];
	static int user_no = 0;
	static int major_no = 0;
	static ArrayList<class_character> able_class_list = new ArrayList<class_character> ();
	static int dfs_array[] = new int[10000];
	static ArrayList<String> new_timetable = new ArrayList<String> ();
	
	public static void dfs(int v, int n) {
		if (v == n) {
			int count = 0;
			for(int i = 0; i < n; i++) {
				if(dfs_array[i] == 1) {
					count += 1;
				}
			}
			if(count > 8) {
				return;
			}else {
				for(int i = 0; i < n; i++) {
					class_character now_class = able_class_list.get(i);
					String now_time = Integer.toString(now_class.class_time);
					for(int j = 0; i < now_time.length(); j++) {
						int now_time_integer_first = Integer.parseInt(now_time.substring(0, 1));
						int now_time_integer_second = Integer.parseInt(now_time.substring(1, 2));
						if(out_time[now_time_integer_first][now_time_integer_second] == 1) {
							return;
						}
						
						now_time = now_time.substring(2, now_time.length());
						
						String new_timetable_time = "";
						for(int k = 0; k < n; k++) {
							new_timetable_time  = new_timetable_time + Integer.toString(dfs_array[k]);
						}
						new_timetable.add(new_timetable_time);
					}
				}
			}
		}
		else {
			dfs_array[v] = 1;
			dfs(v+1, n);
			dfs_array[v] = 0;
			dfs(v+1, n);
		}		
	}
	
	public static void main(String[] args) {
		Connection conn = null;
		Statement state = null;
		ResultSet resset = null;
		ResultSet resset2 = null;
		ResultSet resset3 = null;
		ResultSet resset4 = null;
		PreparedStatement pstmt = null;
		PreparedStatement pstmt2 = null;
		PreparedStatement pstmt3 = null;
		PreparedStatement pstmt4 = null;
		
		int time_mon = 0, time_tue = 0, time_wed = 0, time_thr = 0, time_fri = 0;
		String url = "jdbc:mysql://localhost:3306/graduate?&serverTimezone=UTC";
		String sql = "";
		String sql2 = "";
		String sql3 = "";		
		String sql4 = "";	

		try {
			conn = DriverManager.getConnection(url, "root", "1234");
			state = conn.createStatement();
			// 사용자가 누구인지 어떻게 알지?????
			// major_no 입력받음
			sql = "select major_no from Majors, User where Majors.major_name = User.user_major and User.user_no = " + user_no;
			pstmt = conn.prepareStatement(sql);
			resset = state.executeQuery(sql);
			while(resset.next()) {
				major_no = resset.getInt("major_no");
			}resset.close();
			
			sql2 = "select * from User_time where user_no = " + user_no;
			pstmt2 = conn.prepareStatement(sql2);
			resset2 = state.executeQuery(sql2);
			while(resset2.next()) {
				time_mon = resset2.getInt("time_mon");
				time_tue = resset2.getInt("time_tue");
				time_wed = resset2.getInt("time_wed");
				time_thr = resset2.getInt("time_thr");
				time_fri = resset2.getInt("time_fri");
			}resset.close();
			
			// 사용자가 선택한 안되는 시간 배열에 저장
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
			
			// User_class에서 시간되는 강의 찾기
			sql3 = "select user_class.class_no, class.class_time from Class, User_class where User_class.class_pre = False and User_class.class_next = True and User_class.user_no = " + user_no + " and Class.class_no = User_class.class_no";
			pstmt3 = conn.prepareStatement(sql3);
			resset3 = state.executeQuery(sql3);
			while(resset3.next()) {
				int now_class_no = resset3.getInt("class_no");
				int now_class_time = resset3.getInt("class_time");
				class_character now_class = new class_character(now_class_no, now_class_time);
				able_class_list.add(now_class);
			}resset.close();
			
			dfs(0, able_class_list.size());
			
			for (int i = 0; i < new_timetable.size(); i++) {
				int timetable_number = 1;
				String now_timetable_add = new_timetable.get(i);

// 				credit 계산
//				int credit = 0;
//				for (int j = 0; j < able_class_list.size(); j++) {
//					
//				}
				
				for (int k = 0; k < now_timetable_add.length(); k++) {
					class_character new_add_class = able_class_list.get(k);
					int new_add_class_no = new_add_class.class_no;
					
					sql4 = "insert into graduate.user_timetable (timetable_number, class_no, user_no, credit) values(" + timetable_number + ", " + new_add_class_no + "," + user_no + ", 18);";
					pstmt4 = conn.prepareStatement(sql4);
					resset4 = state.executeQuery(sql4);
				}
				
				timetable_number += 1;
			}	
		}catch(SQLException e) {
			System.out.print("에러: " + e);
		}finally {
			if(resset != null) {
				try {
					pstmt2.close();
				}catch(SQLException e) {
					e.printStackTrace();
				}
			}
			if(state != null) {
				try {
					state.close();
				}catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if(conn != null) {
				try {
					conn.close();
				} catch(SQLException e){
					e.printStackTrace();
				}
			}
		}
	}
	
}
