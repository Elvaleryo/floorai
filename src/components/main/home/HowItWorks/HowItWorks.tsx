import { styled } from '@mui/material/styles';
import {Button, Grid, Typography} from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
// @ts-ignore
import whowe from 'assets/images/whowe.png';

export const HowItWorks = () => {
  return (
    <StyledGrid container justifyContent="center" alignItems="center" flexDirection="column" spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h5" sx={{ paddingBottom: '16px'}}>
          How It Works?
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#9a99aa', paddingBottom: '24px'}}>
          Floor AI simplifies the complex world of cryptocurrency trading with its advanced AI algorithms. First, users input their trading preferences and risk tolerance. Our AI then analyzes historical data and current market trends to generate personalized, real-time price predictions. These insights are delivered directly to the user's dashboard, allowing for informed decision-making and strategic trading. With Floor AI, users stay one step ahead in the fast-moving crypto market, optimizing their trading strategies for maximum profitability.        </Typography>
        <Button variant="contained">
          Launch App
        </Button>
      </Grid>
      <Grid item xs={6}>
        Chart
      </Grid>

    </StyledGrid>
  );
};

const classes = generateUtilityClasses('HowItWorks', ['img']);

const StyledGrid = styled(Grid)(() => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: 'rgb(0,0,41)',
  background: 'linear-gradient(180deg, rgba(7,7,96,1) 0%, rgba(0,0,41,1) 44%)',
  textAlign: 'center',
  [`& .${classes.img}`]: {
    width: '88%',
  },
}));

export default HowItWorks;
