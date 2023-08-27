import {Button, Grid, Typography} from '@mui/material';
import {FormattedMessage, useIntl} from 'react-intl';
import usePixbayImages from '../../hooks/usePixbayImages';

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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="start"
        justifyContent="center"
        sx={{minHeight: '150px', px: 3}}
      >
        <Grid item xs={12}>
          <Typography variant='h2'>
            <FormattedMessage id="greeting" />Jan!
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <img src={randomImage.webformatURL} width={'100%'}></img>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{px: 3, mt: 0}}
      >
        <Grid item xs={12}>
          <Typography variant="h3">
            {intl.formatMessage({id: 'workdayStartCountdownText'})}
            {` ${remainingMinutes} `}
            {intl.formatMessage({id: 'minutes'})}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" size="large">
            {remainingMinutes <= 0 ?
              intl.formatMessage({id: 'startMyDayButtonText'}) :
              intl.formatMessage({id: 'startMyDayNowButtonText'})
            }
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" size="small" color="secondary">
            {intl.formatMessage({id: 'openTimesheetButtonText'})}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default GoodMorning;
