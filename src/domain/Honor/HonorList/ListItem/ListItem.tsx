import { NavLink } from 'react-router-dom';
import { Container, ProfileName, MetaContainer, ProfileImage, ProfileMeta } from './ListItem.style';
import { HonorType } from '../../index';

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
