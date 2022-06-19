import { HonorType } from '../index';
import styled from 'styled-components';

type Prop = {
  item: HonorType;
};

export const ListItem = ({ item }: Prop) => {
  return (
    <Container>
      <ProfileImage src={item.image} title="프로필 이미지" />
      <ProfileName>dhrod0325@naver.com</ProfileName>
      <ProfileMeta>리뷰 수 : 125</ProfileMeta>
      <ProfileMeta>답변 수 : 125</ProfileMeta>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 20px;
  border: 1px solid #dedede;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
`;

const ProfileName = styled.p`
  font-weight: bold;
  margin: 20px 0;
`;

const ProfileMeta = styled.p`
  font-size: 1rem;
`;
