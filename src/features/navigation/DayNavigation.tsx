import {BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import {useIntl} from 'react-intl';

const DayNavigation = () => {
  const [value, setValue] = useState(0);
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <>
      <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{maxWidth: 'none'}}
            label={intl.formatMessage({id: 'toDoNavText'})}
            icon={<FormatListBulletedIcon />}
            onClick={() => (navigate('ToDo'))}
          />
          <BottomNavigationAction
            sx={{maxWidth: 'none'}}
            label={intl.formatMessage({id: 'doneNavText'})}
            icon={<CheckBoxIcon/>}
            onClick={() => (navigate('Done'))}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default DayNavigation;
