import { Section } from 'react-fullpage';
import { ShareContainer, ShareContentWrapper } from "./Share.styled";

const ShareContentTop = () => {
  return(
    <section className="contentDesc">
      <p>Community</p>
      <div className="title">
        <h2>Weekly HOT</h2>
        <p>당신의 일상을 공유해보세요</p>
      </div>
      <div className="button">
        <p>운동 인증</p>
        <p>식단 공유</p>
      </div>
    </section>
  )
};

const ShareContentBottom = () => {
  return(
    <ul className="contentList">
      <li>Lorem ipsum amet dolor, etit tu</li>
      <li>Lorem ipsum amet dolor, etit tu</li>
      <li>Lorem ipsum amet dolor, etit tu</li>
    </ul>
  )
};

export const Share = () => {
  return(
    <Section>
      <ShareContainer>
        <ShareContentWrapper>
          <ShareContentTop />
          <ShareContentBottom />
        </ShareContentWrapper>
      </ShareContainer>
    </Section>
  )
};