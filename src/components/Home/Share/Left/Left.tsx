import { Avatar, Box } from '@mui/material';
import { LeftContainer, ListContainer } from './Left.styled';
import { useActiveStore } from '../../../../store/Store';

// Icon Load
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FlatwareIcon from '@mui/icons-material/Flatware';

const LeftBtn = () => {
    const { active, setActive } = useActiveStore();

    return(
        <div className="btnContainer">
            <div
                className={`wod ${active === "wod" ? "active" : ""}`}
                onClick={() => setActive("wod")}
            >
                <Avatar alt="운동 인증" className="avatar">
                    <FitnessCenterIcon />
                </Avatar>
                <p>운동 인증</p>
            </div>
            <div
                className={`diet ${active === "diet" ? "active" : ""}`}
                onClick={() => setActive("diet")}
            >
                <Avatar alt="식단 공유" className="avatar">
                    <FlatwareIcon />
                </Avatar>
                <p>식단 공유</p>
            </div>
        </div>
    )
}

const LeftList = () => {
    const { active } = useActiveStore();

    const wodData: Array<string> = [
        '오운완 인증 1',
        '오운완 인증 2',
        '오운완 인증 3',
    ];
    const dietData: Array<string> = [
        '식단 인증 1',
        '식단 인증 2',
        '식단 인증 3',
    ];

    const dataArr: Array<string> = active === "wod" ? wodData : dietData;

    return(
        <ListContainer>
        {dataArr.map((item, idx) => (
            <Box sx={{ boxShadow: 4, padding: 2, borderRadius: 4, marginLeft: 1 }}>
            <li>{item}</li>
            </Box>
        ))}
        </ListContainer>
    )
};
  
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