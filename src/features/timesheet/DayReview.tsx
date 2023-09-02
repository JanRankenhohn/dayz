import {Grid, Typography, Stack, IconButton, Chip, Button, Link} from '@mui/material';
import {useIntl} from 'react-intl';
import useReviewWorkItemsUpdate from '../../hooks/useReviewWorkItemsUpdate';
import WhiteCard from '../../components/WhiteCard';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const DayReview = () => {
  const intl = useIntl();
  const {isLoading, isError, data} = useReviewWorkItemsUpdate();

  if (isLoading) {
    return <>Loading</>;
  }
  if (isError) {
    return <>error</>;
  }

  return (
    <>
      <Grid container spacing={1} justifyContent="center" sx={{mt: 2}} >
        <Grid item>
          <Typography variant='h5'>
            {intl.formatMessage({id: 'reviewHeading'})}
          </Typography>
        </Grid>
      </Grid>
      <Stack sx={{px: 2, mt: 2}} spacing={2}>
        {
          data?.map((workItem) => {
            return (
              <WhiteCard>
                <Grid
                  container justifyContent={'space-between'} alignItems={'center'}>
                  <Grid item xs={6}>
                    <Typography variant="h5">
                    Heading
                    </Typography>
                  </Grid>
                  <Grid item xs={6} textAlign={'end'}>
                    <IconButton>
                      <DisabledByDefaultIcon color="error"></DisabledByDefaultIcon>
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Description</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                  <Grid item xs={6}>
                    <Grid container spacing={2} justifyContent={'start'} alignItems={'center'}>
                      <Grid item>
                        <Chip label="doing" size='small' variant="outlined" onClick={() => {}} />
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
                    <IconButton>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary">
                        {intl.formatMessage({id: 'doneButtonText'})}
                      </Button>
                    </IconButton>
                  </Grid>
                </Grid>
              </WhiteCard>);
          })
        }
      </Stack>
    </>
  );
};

export default DayReview;
