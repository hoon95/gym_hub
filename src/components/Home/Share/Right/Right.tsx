import WodImg1 from '../../../../assets/img/community/community_1.png';
import WodImg2 from '../../../../assets/img/community/community_2.png';
import WodImg3 from '../../../../assets/img/community/community_3.png';
import { useActiveStore } from 'store/Store';
import { RightContainer } from './Right.styled';

export const Right = () => {
  interface ImgType {
    url: string
  }

  const { active } = useActiveStore();

  const wodData: Array<ImgType> = [
    {'url': WodImg1},
    {'url': WodImg2},
    {'url': WodImg3},
  ]
  
  const dietData = [
    {'url': WodImg3},
    {'url': WodImg1},
    {'url': WodImg2},
  ]
  
  const imgData: Array<ImgType> = active === "wod" ? wodData : dietData;

  return(
    <RightContainer>
      {imgData.map((item, idx) => (
        <img src={item.url} className={`item item-${idx+1}`} alt={'운동 인증'} />
      ))}
    </RightContainer>
  )
};