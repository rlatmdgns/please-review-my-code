import { FlexBox } from 'styles/theme';
import { Sidebar } from '../components/common/Sidebar';
import { Card } from '../components/Feed/Card';

export const Feed = () => {
  return (
    <FlexBox>
      <Sidebar />
      <Card />
    </FlexBox>
  );
};
