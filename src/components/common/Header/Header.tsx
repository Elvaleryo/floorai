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
      label: 'About',
      href: '#about'
    }
  ]
  return (
    <StyledGrid container alignItems="center" justifyContent="space-between" spacing={2}>
      <Grid item>
        <img className={classes.logo} src={logo} alt="logo" />
      </Grid>
      <Grid item>
        {headNav.map((nav) => (
          <Link to={nav.href}>
            <Typography variant="subtitle1" className={classes.navItem}>{nav.label}</Typography>
          </Link>
        ))}
      </Grid>
      <Grid item>
        <a href="#">
          <TwitterIcon sx={{fill: '#fff'}} />
        </a>
      </Grid>
    </StyledGrid>
  );
};

const classes = generateUtilityClasses('Header', ['navItem', 'logo']);

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
