import styled from 'styled-components';

export const Container = styled.div`
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

export const MetaContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ProfileImage = styled.div<{ img: string }>`
  width: 100%;
  height: 150px;
  display: block;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-size 0.5s;
`;

export const ProfileName = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProfileMeta = styled.p`
  font-size: 1rem;
  line-height: 150%;
`;
