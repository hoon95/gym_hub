import { Avatar, Box } from '@mui/material';
import { LeftContainer, ListContainer } from './Left.styled';

export const Left = () => {
    return(
      <LeftContainer>
        <p className="community">커뮤니티</p>
        <div className="title">
          <h2>Weekly HOT</h2>
          <p>당신의 일상을 공유해보세요</p>
        </div>
        <LeftBtn />
        <LeftList />
      </LeftContainer>
    )
  };
  
const LeftBtn = () => {
    return(
        <div className="btnContainer">
        <div className="wod">
            <Avatar alt="운동 인증" src="" />
            <p>운동 인증</p>
        </div>
        <div className="diet">
            <Avatar alt="식단 공유" src="" />
            <p>식단 공유</p>
        </div>
        </div>
    )
}


const LeftList = () => {
    const boxData: Array<string> = [
        '오운완 인증 1',
        '오운완 인증 2',
        '오운완 인증 3',
    ];

    return(
        <ListContainer>
        {boxData.map((item, idx) => (
            <Box sx={{ boxShadow: 4, padding: 2, borderRadius: 4, marginLeft: 1 }}>
            <li>{item}</li>
            </Box>
        ))}
        </ListContainer>
    )
};
