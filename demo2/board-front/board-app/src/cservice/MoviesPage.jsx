/***** ./components/MoviesPage.jsx *****/

import React, { useState } from 'react';
import Pagination from './Pagination';
import { paginate } from '../utils/paginate';

const MoviesPage = () => {
  const getMovies = () => {
    const movies = [
      { id: 0, title: "기생충", genre: "블랙 코미디", release: "2019-05-30" },
      { id: 1, title: "라이온 킹", genre: "애니메이션", release: "2019-07-17" },
      { id: 2, title: "날씨의 아이", genre: "애니메이션", release: "2019-10-31" },
      { id: 3, title: "알라딘", genre: "판타지", release: "2019-05-23" },
      { id: 4, title: "나랏말싸미", genre: "역사", release: "2019-07-24" },
      { id: 5, title: "주전장", genre: "역사", release: "2019-07-25" },
      { id: 6, title: "어벤져스: 엔드게임", genre: "판타지", release: "2019-04-24" },
      { id: 7, title: "봉오동 전투", genre: "역사", release: "2019-08-07" },
      { id: 8, title: "김복동", genre: "역사", release: "2019-08-08" },
      { id: 9, title: "코코", genre: "애니메이션", release: "2018-01-11" },
    ]
    return movies;
  }

  const [movies, setMovies] = useState({ // 영화 정보를 담는 state
    data: getMovies(), // 영화 정보
    pageSize: 3, // 한 페이지에 보여줄 아이템(영화목록) 개수
    currentPage: 1 // 현재 활성화된 페이지 위치
  });

  const handlePageChange = (page) => {
    setMovies({ ...movies, currentPage: page });
  };

  const { data, pageSize, currentPage } = movies;
  const pagedMovies = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴

  const { length: count } = movies.data;
  if (count === 0) 
    return <p>영화 정보가 없습니다.</p>;

  return (
    <>
      <p>{count} 개의 영화 정보가 있습니다.</p>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {pagedMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageSize={pageSize}
        itemsCount={count}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MoviesPage;