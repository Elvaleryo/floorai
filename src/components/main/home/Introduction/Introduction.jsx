import { styled } from '@mui/material/styles';
import {Button, Grid, Typography} from '@mui/material';
import homeBg from 'assets/images/homebg.png';
import logo from 'assets/images/logo.png';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export const Introduction = () => {
  return (
    <StyledGrid container justifyContent="center">
      <div className={classes.bg}></div>
      <Grid item className={classes.wrap}>
        <div className={classes.textWrap}>
          <Typography variant="h4" sx={{ paddingBottom: '16px'}}>
            Insight Into Every Investment.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#9a99aa'}}>
            Decoding Crypto, Enhancing Profits
          </Typography>
        </div>
        <div className={classes.logoWrap}>
          <img className={classes.logo} src={logo} alt="logo" />
          <Typography variant="h4" sx={{ paddingBottom: '16px'}}>
            FloorAI
          </Typography>
        </div>
        <Button variant="contained">
          Launch App
        </Button>
      </Grid>
    </StyledGrid>
  );
};

const classes = generateUtilityClasses('Introduction', ['bg', 'wrap', 'textWrap', 'logoWrap', 'logo']);

const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: 'calc(100vh - 80px)',
  position: 'relative',
  [`& .${classes.bg}`]: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${homeBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1550px 101%',
    backgroundPosition: 'center 525%',
    opacity: '.6',
    zIndex: 1,
  },
  [`& .${classes.wrap}`]: {
    paddingTop: theme.spacing(20),
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  [`& .${classes.textWrap}`]: {
    marginBottom: theme.spacing(10),
  },
  [`& .${classes.logoWrap}`]: {
    marginBottom: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 0,
    [`& .MuiTypography-root`]: {
      padding: 0,
    },
  },
  [`& .${classes.logo}`]: {
    width: 50,
    marginRight: 10,
  },
}));

export default Introduction;
