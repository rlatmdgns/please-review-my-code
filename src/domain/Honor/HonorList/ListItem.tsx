import { HonorType } from '../index';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type Prop = {
  item: HonorType;
};

export const ListItem = ({ item }: Prop) => {
  return (
    <Container>
      <NavLink to={`/honor/${item.id}`}>
        <ProfileImage img={item.image} title="프로필 이미지" />
        <MetaContainer>
          <ProfileName>{item.name}</ProfileName>
          <ProfileMeta>리뷰 수 : {item.reviewCount}</ProfileMeta>
          <ProfileMeta>답변 수 : {item.answerCount}</ProfileMeta>
        </MetaContainer>
      </NavLink>
    </Container>
  );
};

const Container = styled.div`
  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #fff;
    border: 1px solid #dedede;
    min-width: 260px;

    &:hover div {
      background-size: 150%;
    }
  }
`;

const MetaContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProfileImage = styled.div<{ img: string }>`
  width: 100%;
  height: 150px;
  display: block;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-size 0.5s;
`;

const ProfileName = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProfileMeta = styled.p`
  font-size: 1rem;
  line-height: 150%;
`;
