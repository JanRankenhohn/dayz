import {Grid, Typography, Stack, IconButton, Chip, Button, Link, InputAdornment, useTheme} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {useIntl} from 'react-intl';
import WhiteCard from '../../components/WhiteCard';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import WorkItemCardListProps from '../../types/WorkItemCardListProps';
import {WorkItemStates} from '../../constants/constants';

const WorkItemCardList = (props: WorkItemCardListProps) => {
  const intl = useIntl();
  const theme = useTheme();
  const {workItems, heading} = props;

  return (
    <>
      {
        heading &&
        <Grid container spacing={1} justifyContent="center" sx={{mt: 2}} >
          <Grid item>
            <Typography variant='h5'>
              {intl.formatMessage({id: 'reviewHeading'})}
            </Typography>
          </Grid>
        </Grid>
      }
      <Stack sx={{px: 2, mt: 2}} spacing={2}>
        {
          workItems.map((workItem) => {
            return (
              <WhiteCard
                key={workItem.id}
                borderColor={workItem.state ===
                  WorkItemStates.DOING ? theme.palette.success.light : undefined}>
                <Grid
                  container justifyContent={'space-between'} alignItems={'center'}>
                  <Grid item xs={6}>
                    <Typography variant="h5">
                      {workItem.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} textAlign={'end'}>
                    <IconButton edge="end">
                      <DisabledByDefaultIcon color="error"></DisabledByDefaultIcon>
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      {workItem.description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{mt: 2}}>
                  <Grid item xs={6}>
                    <Grid container spacing={2} justifyContent={'start'} alignItems={'center'}>
                      <Grid item>
                        {
                          workItem.state === WorkItemStates.DOING ?
                          <Chip label="doing" size='small' variant="outlined" color='success' /> :
                          <Typography>
                            <Link href="#">
                              {intl.formatMessage({id: 'startText'})}
                            </Link>
                          </Typography>
                        }
                      </Grid>
                      <Grid item>
                        <Typography>
                          <Link href="#">
                            {intl.formatMessage({id: 'linkText'})}
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} textAlign={'end'}>
                    {
                      workItem.state === WorkItemStates.DOING &&
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        startIcon={<CheckIcon />}>
                        {intl.formatMessage({id: 'doneButtonText'})}
                      </Button>
                    }
                  </Grid>
                </Grid>
              </WhiteCard>);
          })
        }
      </Stack>
    </>
  );
};

export default WorkItemCardList;
