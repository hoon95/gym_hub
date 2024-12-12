import { useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TypoContainer } from "./List.styled";
import AOS from 'aos';
import 'aos/dist/aos.css';

import card1 from '../../../assets/img/home/card/card_1.png';

export const List = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return(
    <Card sx={{ display: 'flex', width: '50vw', height: '30vh', minHeight: '200px' }}>
      <CardMedia sx={{ width: '60%' }} component="img" image={card1} alt="짐허브 지점 정보" data-aos="fade-up" data-aos-duration="1000" />
      <CardContent data-aos="fade-up" data-aos-duration="1000">
        <Typography sx={{ fontSize: 'var(--text-md)', fontWeight: 'bold' }}>
          짐허브 봉천
        </Typography>
        <Typography sx={{ fontSize: 'var(--text-sm)' }}>
          서울시 관악구 봉천동 12-34 | 승리빌딩 3층
        </Typography>
        <TypoContainer>
          <Typography sx={{ fontSize: 'var(--text-sm)' }}>
            02-123-4567
          </Typography>
        </TypoContainer>
      </CardContent>
    </Card>
  )
}