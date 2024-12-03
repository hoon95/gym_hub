import { Avatar, Box } from '@mui/material';
import { LeftContainer, ListContainer } from './Left.styled';
import { useActiveStore } from '../../../../store/Store';

// Icon Load
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FlatwareIcon from '@mui/icons-material/Flatware';

const LeftBtn = () => {
    const { active, setActive, setClickIdx } = useActiveStore();

    return(
        <div className="btnContainer">
            <div
                className={`wod ${active === "wod" ? "active" : ""}`}
                onClick={() => {
                    setActive("wod");
                    setClickIdx(0);
                }}
            >
                <Avatar alt="운동 인증" className="avatar">
                    <FitnessCenterIcon />
                </Avatar>
                <p>운동 인증</p>
            </div>
            <div
                className={`diet ${active === "diet" ? "active" : ""}`}
                onClick={() => {
                    setActive("diet")
                    setClickIdx(0);
                }}
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
    const { setClickIdx, getLeftTxt } = useActiveStore();

    return(
        <ListContainer>
        {getLeftTxt().map((item, idx) => (
            <Box
                sx={{ boxShadow: 4, padding: 2, borderRadius: 4, marginLeft: 1 }}
                onClick={() => setClickIdx(idx)}
            >
                <li>
                    {`${item.name}(${item.age}) : ${item.content}`}
                </li>
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