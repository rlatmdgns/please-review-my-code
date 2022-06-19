import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';

export const Wrapper = styled(FlexColumn)`
  width: 200px;
<<<<<<< HEAD
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 20px;
=======
  border: 1px solid #dedede;
  padding: 20px;
  flex: 1 1 30%;
  background: #fff;
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
`;

export const Category = styled.p`
  font-size: 12px;
<<<<<<< HEAD
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 1.5rem;
=======
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 150%;
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
`;

export const Labels = styled(FlexBox)`
  > *:not(:last-child) {
    margin-right: 10px;
  }
<<<<<<< HEAD
`;
=======

  margin: 20px 0;
`;

>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
export const Label = styled.span`
  font-size: 12px;
`;

export const Date = styled.p`
  font-size: 8px;
<<<<<<< HEAD
`;
export const BottomContainer = styled(FlexBox)`
  justify-content: space-between;
=======
  margin-bottom: 10px;
`;

export const BottomContainer = styled(FlexBox)`
  justify-content: space-between;
  margin-top: 10px;
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
`;
export const Left = styled.div``;
export const Writer = styled.div`
  font-size: 12px;
`;
export const Right = styled.div``;
export const Views = styled.div``;
export const Like = styled.div`
  font-size: 12px;
`;
export const Comments = styled.div`
  font-size: 12px;
`;
