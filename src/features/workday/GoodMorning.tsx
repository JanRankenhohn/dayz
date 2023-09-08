import {Box, Button, Grid, Typography} from '@mui/material';
import {FormattedMessage, useIntl} from 'react-intl';
import usePixbayImages from '../../hooks/usePixbayImages';
import {Link} from 'react-router-dom';

/**
 * Includes Good Morning view for authenticated user
 * @returns
 */
const GoodMorning = () => {
  const intl = useIntl();
  const {isLoading, isError, randomImage} = usePixbayImages();
  const remainingMinutes = 0;

  if (isLoading || !randomImage) {
    return <>Loading</>;
  }
  if (isError) {
    return <>Error</>;
  }

  console.log('random image');
  console.log(randomImage);

  return (
    <>
      <Box textAlign={'center'}>

        <Grid
          container
          direction="column"
          alignItems="start"
          justifyContent="center"
          sx={{py: 5, px: 3}}
        >
          <Grid item xs={12}>
            <Typography variant='h2'>
              <FormattedMessage id="greeting" />
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item maxHeight={'330px'} overflow={'hidden'}>
            <img src={randomImage.webformatURL} width={'100%'}></img>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={5}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{px: 3, mt: 1}}
        >
          <Grid item xs={12}>
            <Typography variant="h3">
              {intl.formatMessage({id: 'workdayStartCountdownText'})}
              {` ${remainingMinutes} `}
              {intl.formatMessage({id: 'minutes'})}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to="/DayOverview">
              <Button variant="contained" size="large">
                {remainingMinutes <= 0 ?
              intl.formatMessage({id: 'startMyDayButtonText'}) :
              intl.formatMessage({id: 'startMyDayNowButtonText'})
                }
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/DayOverview">
              <Button variant="outlined" size="small" color="secondary">
                {intl.formatMessage({id: 'openTimesheetButtonText'})}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GoodMorning;
