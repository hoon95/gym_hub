import React from 'react';
import { SearchContainer } from './Search.styled';

function Search() {
  return (
    <SearchContainer>
      <h2>운동 프로그램 검색</h2>
      <input type="text" placeholder="검색어를 입력하세요..." />
      <button>검색</button>
    </SearchContainer>
  );
}

export default Search;