import { Section } from 'react-fullpage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StepContainer } from './Step.styled';
import { GlobalStyle } from '../../common/GlobalStyle';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      speed={500}
      modules={[Autoplay]}
      className="hashSlide"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  )
}

export const Step = () => {
  return (
    <Section>
      <StepContainer>
        <GlobalStyle />
        <section>
          <h2>A부터 Z까지, 헬스를 위한 첫 걸음</h2>
          <p>나에게 맞는 운동을 찾아보세요</p>
          <Slider />
        </section>
      </StepContainer>
    </Section>
  );
}