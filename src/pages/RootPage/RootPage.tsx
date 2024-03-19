import React from 'react';
import { styled } from '@mui/material/styles';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import Header from 'components/common/Header';

interface Props {
  children: React.ReactNode;
}

export const RootPage: React.FC<Props> = ({ children }) => {
  return (
    <StyledRoot>
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>{children}</main>
      </div>
    </StyledRoot>
  );
};

const classes = generateUtilityClasses('RootPage', ['drawer', 'app', 'main']);

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  [`& .${classes.app}`]: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  [`& .${classes.main}`]: {
    flex: 1,
    padding: theme.spacing(4, 3),
    background: '#f7fafc',
    [`&.main-transparent-bg`]: {
      background: 'transparent',
    },
  },
}));

export default RootPage;
