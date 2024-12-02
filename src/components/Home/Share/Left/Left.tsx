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
    const { active, setClickIdx } = useActiveStore();

    interface wodDietData {
        name: string;
        age: number;
        content: string;
    }

    const wodData: wodDietData[] = [
        {'name': '김희연', 'age': 21, 'content': '식습관 변화로 건강 관리'},
        {'name': '이정훈', 'age': 57, 'content': '디지털 디톡스와 헬스의 조합'},
        {'name': '박민지', 'age': 35, 'content': '직장인의 점심시간 활용법'},
    ];
    const dietData: wodDietData[] = [
        {'name': '김희연', 'age': 21, 'content': '식습관 변화로 건강 관리'},
        {'name': '이정훈', 'age': 57, 'content': '디지털 디톡스와 헬스의 조합'},
        {'name': '박민지', 'age': 35, 'content': '직장인의 점심시간 활용법'},
    ];

    const dataArr: wodDietData[] = active === "wod" ? wodData : dietData;

    return(
        <ListContainer>
        {dataArr.map((item, idx) => (
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