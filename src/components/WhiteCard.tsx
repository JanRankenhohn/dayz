import {Card, CardContent} from '@mui/material';
import ReactComponentProps from '../types/ReactComponentProps';


const WhiteCard = (props: ReactComponentProps) => {
  const {children, borderColor} = props;

  return (
    <Card style={{backgroundColor: 'white', border: `1px solid ${borderColor}` ?? 'default'}}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default WhiteCard;
