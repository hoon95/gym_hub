import { useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TypoContainer } from "./List.styled";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSearchStore } from 'store/Store';

// Icons Load
import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';

export const List = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const { center } = useSearchStore();

  return (
    <>
      {center.map((item, index) => (
        <Card
          key={index} data-aos="fade-up" data-aos-duration="1000"
          sx={{ display: 'flex', width: '50vw', height: '30vh', minHeight: '200px', margin: '20px 0' }}
        >
          <CardMedia
            sx={{ width: '60%' }}
            component="img"
            image={item.image}
            alt={`${item.name} 정보`}
          />
          <CardContent>
            <TypoContainer>
              <Typography sx={{ fontSize: 'var(--text-md)', fontWeight: 'bold' }}>
                {item.name}
              </Typography>

              <Typography sx={{ fontSize: 'var(--text-sm)' }}>
                {item.address}
              </Typography>

              <div className="contact">
                <PhoneIcon />
                <Typography sx={{ fontSize: 'var(--text-sm)' }}>
                  {item.phone}
                </Typography>
              </div>

              <div className="schedule">
                <ScheduleIcon />
                <div>
                  <Typography sx={{ fontSize: 'var(--text-sm)' }}>
                    (평일) {item.schedule.weekday}
                  </Typography>
                  <Typography sx={{ fontSize: 'var(--text-sm)', color: '#ff1744' }}>
                    (주말) {item.schedule.weekend}
                  </Typography>
                </div>
              </div>
            </TypoContainer>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
