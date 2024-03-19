import { styled } from '@mui/material/styles';
// import generateUtilityClasses from '@mui/material/generateUtilityClasses';

// const classes = generateUtilityClasses('RootPage', ['drawer', 'app', 'main']);

const StyledRoot = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
}));

export const RootPage = () => {
  return (
    <StyledRoot>
      <h1>HOME</h1>
    </StyledRoot>
  );
};

export default RootPage;
