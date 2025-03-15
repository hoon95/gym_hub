import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { List } from "./List/List";
import { SearchContainer, SearchHeader } from "./Search.styled";
import searchBg from "../../assets/img/search/search.png";

import ExploreIcon from "@mui/icons-material/Explore";
import Image from "next/image";

export const Search = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SearchContainer>
      <SearchHeader bgImage={searchBg}>
        <Image src="/img/logo_white.png" alt="logo" className="logo" />
        <div className="textWrapper">
          <h2 className="title" data-aos="flip-up" data-aos-duration="1000">
            지점 찾기
          </h2>
          <p className="desc" data-aos="flip-up" data-aos-duration="1000">
            가까운 지점을 만나보세요
          </p>
        </div>
      </SearchHeader>
      <div className="select">
        <section className="header">
          <ExploreIcon />
          <p>지점 찾기</p>
        </section>
        <List />
      </div>
    </SearchContainer>
  );
};
