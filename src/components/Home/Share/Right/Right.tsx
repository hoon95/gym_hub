import { RightContainer } from './Right.styled';
import { InstagramPost } from './Insta/Insta';

export const Right = () => {
  return(
    <RightContainer>
      {Array.from({ length: 2 }).map((_,idx) => (<InstagramPost />))}
    </RightContainer>
  )
};