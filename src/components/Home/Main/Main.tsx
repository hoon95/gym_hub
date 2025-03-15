import { HomeContainer } from "./Main.styled";
import { ButtonModal } from "../../Modal/Modal";
import Image from "next/image";

export const Home = () => {
  return (
    <HomeContainer>
      <Image
        src="/img/logo_white.png"
        alt="logo"
        className="logo"
        width={100}
        height={100}
      />
      <div className="textWrapper">
        <h2 className="title">내 몸은 몇 살일까?</h2>
        <p className="desc">자가진단 테스트</p>
        <ButtonModal />
      </div>
    </HomeContainer>
  );
};
