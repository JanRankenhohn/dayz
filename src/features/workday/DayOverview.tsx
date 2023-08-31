import {Divider, Grid, Typography, Card, CardContent, Button} from '@mui/material';
import {useIntl} from 'react-intl';
import useDailyQuote from '../../hooks/useDailyQuote';
import {Link} from 'react-router-dom';

const DayOverview = () => {
  const intl = useIntl();
  const {isLoading, isError, dailyQuote} = useDailyQuote();

  if (isLoading) {
    return <>Loading</>;
  }
  if (isError) {
    return <>Error</>;
  }

  return (
    <>
      <Grid container spacing={3} justifyContent="center" sx={{mt: 2}}>
        <Grid item>
          <Typography variant="h5">
            {intl.formatMessage({id: 'yourDay'})}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h1'>
            Mo {intl.formatDate(new Date(), {month: 'numeric', day: 'numeric'})}
          </Typography>
          <Typography variant='h1'>
            {intl.formatDate(new Date(), {hour: 'numeric', minute: 'numeric'})}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5'>
            {intl.formatMessage({id: 'workhoursOverview'})}
          </Typography>
          <Typography variant='h3'>
            8
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{my: 3}}>
          <Card variant="outlined" sx={{mx: 5}}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom fontStyle={'italic'}>
                {`"${dailyQuote.q}"`}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {`${dailyQuote.a}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Link to="/DayReview">
            <Button variant="contained" size="large">
              {intl.formatMessage({id: 'startReviewButtonText'})}
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sx={{mt: 2}}>
          <Link to="/Day/Doing">
            <Button variant="outlined" size="small" color="secondary">
              {intl.formatMessage({id: 'skipReviewButtonText'})}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default DayOverview;
