import Introduction from 'components/main/home/Introduction';
import WhoWeAre from 'components/main/home/WhoWeAre';
import HowItWorks from 'components/main/home/HowItWorks';
import RoadMap from '../../components/main/home/RoadMap';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <HowItWorks />
      <RoadMap />
      <WhoWeAre />
    </>
  );
};

export default HomePage;
