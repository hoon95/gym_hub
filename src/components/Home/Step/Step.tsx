import { StepContainer } from './Step.styled';
import { CardWrapper } from '../Card/Card';
import { GlobalStyle } from '../../../common/GlobalStyle';

// import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const getRandomTags = (tags: string[], count: number) => {
  const shuffled = [...tags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

interface SliderProps {
  tags: string[];
  num: number;
  dir: string;
}

const Slider = ({ tags, num, dir }: SliderProps) => {
  const randomTags = getRandomTags(tags, num);

  return (
    <Swiper
      dir={dir}
      allowTouchMove={false}
      slidesPerView={5}
      centeredSlides={true}
      speed={4000}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      className="hashSlide"
    >
      {randomTags.map((tag, idx) => (
        <SwiperSlide key={idx} dir={dir}>
            {tag}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export const Step = () => {
  const tags = [
    "#운동스타그램", "#헬스타그램", "#운동하는 직장인", "#다이어트", "#다이어트그램",
    "#다이어트 식단", "#식단조절", "#다이어터", "#몸스타그램", "#필라테스",
    "#요가", "#피트니스", "#스포츠 모델", "#피지크", "#벌크업",
    "#힙업", "#PT", "#유지어터", "#웨이트"
  ];
  
  return (
    <>
      <StepContainer>
        <GlobalStyle />
        <section>
          <h2>A부터 Z까지, 헬스를 위한 첫 걸음</h2>
          <p>나에게 맞는 운동을 찾아보세요</p>
          <Slider tags={tags} num={5} dir={'ltr'} />
          <Slider tags={tags} num={5} dir={'rtl'} />
        </section>
      </StepContainer>
      <CardWrapper />
    </>
  );
}