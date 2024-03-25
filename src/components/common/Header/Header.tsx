import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
// @ts-ignore
import logo from 'assets/images/logo.png';

const Header = () => {
  const headNav = [
    {
      label: 'How it works',
      href: '#howItWorks'
    },
    {
      label: 'Road map',
      href: '#roadMap'
    },
    {
      label: 'Who we are',
      href: '#whoWeAre'
    }
  ]
  return (
    <StyledGrid container alignItems="center" justifyContent="space-between" spacing={2}>
      <Grid item>
        <img className={classes.logo} src={logo} alt="logo" />
      </Grid>
      <Grid item>
        <div className={classes.menu}>
          <div className={classes.navWrap}>
            {headNav.map((nav) => (
              <Link to={nav.href}>
                <Typography variant="subtitle1" className={classes.navItem}>{nav.label}</Typography>
              </Link>
            ))}
          </div>
          <a target="_blank" href="https://twitter.com/FloorAIApp">
            <TwitterIcon sx={{fill: '#fff'}} />
          </a>
        </div>
      </Grid>
    </StyledGrid>
  );
};

const classes = generateUtilityClasses('Header', ['menu', 'navWrap', 'navItem', 'logo']);

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: '80px',
  lineHeight: 0,
  padding: theme.spacing(0, 10),
  '& a': {
    textDecoration: 'none',
  },
  [`& .${classes.logo}`]: {
    width: 40,
  },
  [`& .${classes.menu}`]: {
    display: 'flex',
  },
  [`& .${classes.navWrap}`]: {
    display: 'flex',
    gap: theme.spacing(3),
    marginRight: theme.spacing(10),
  },
  [`& .${classes.navItem}`]: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    transition: '.2s',
    '&:hover': {
      color: theme.palette.text.primary,
    }
  },

}));

export default Header;
