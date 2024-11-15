import { CardContainer } from './Card.styled';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import card1 from '../../assets/img/home/card_1.png';
import card2 from '../../assets/img/home/card_2.png';
import card3 from '../../assets/img/home/card_3.png';
import card4 from '../../assets/img/home/card_4.png';


export const CardWrapper = () => {
    const cards = [
        {
            'img': card1,
            'title': '바디프로필을 위한 첫걸음',
            'desc': '바디프로필 촬영을 목표로 운동을 시작하는 분들을 위한 첫 단계입니다.'
        },
        {
            'img': card2,
            'title': '여름을 위한 최고의 루틴',
            'desc': '짧은 시간 내 누구나 쉽게 따라 할 수 있는 루틴으로 여름을 대비하세요.'
        },
        {
            'img': card3,
            'title': '초보를 위한 헬스장 에티켓',
            'desc': '기구 사용법, 자리 비우기, 정리하기 등 헬스장 초보자가 알아야 할 필수 매너를 간단하게 정리합니다.'
        },
        {
            'img': card4,
            'title': '헬린이를 위한 운동법',
            'desc': '기초 운동을 통해 꾸준히 성장할 수 있는 탄탄한 기초를 쌓아보세요.'
        }
    ];

    return (
      <CardContainer>
        {cards.map((item, index) => (
            <Card sx={{ width: 250 }} key={index}>
                <CardMedia 
                    component="img"
                    height="150"
                    alt={item.title}
                    image={item.img}
                />
                <CardContent className="content">
                    <Typography className="title">{item.title}</Typography>
                    <Typography className="desc">{item.desc}</Typography>
                </CardContent>
            </Card>
        ))}
      </CardContainer>
    )
}