import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { List } from "./List/List";
import { SearchContainer, SearchHeader } from "./Search.styled";
import searchBg from "../../assets/img/search/search.png";

import ExploreIcon from "@mui/icons-material/Explore";
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   SelectChangeEvent,
// } from "@mui/material";

// const Input = () => {
//   const [center, setCenter] = useState("");
//   const handleChange = (event: SelectChangeEvent) => {
//     setCenter(event.target.value as string);
//   };

//   return (
//     <FormControl sx={{ width: "25vw", margin: "calc(var(--gap) * 2) 0" }}>
//       <InputLabel id="center">지점</InputLabel>
//       <Select
//         labelId="center"
//         id="demo-simple-select"
//         value={center}
//         label="center"
//         onChange={handleChange}
//       >
//         <MenuItem value="" disabled>
//           <em>지점을 선택하세요</em>
//         </MenuItem>
//         <MenuItem value={"봉천"}>봉천점</MenuItem>
//         <MenuItem value={"서울대입구"}>서울대입구점</MenuItem>
//         <MenuItem value={"신림"}>신림점</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };

export const Search = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SearchContainer>
      <SearchHeader bgImage={searchBg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/logo_white.png`}
          alt="logo"
          className="logo"
        />
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
