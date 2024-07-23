import { MainLayout } from '../../../common/components';
import { HeroSection } from '../../components';
import { MovieList } from '../../components/MovieList';

export const FeedPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <MovieList />
    </MainLayout>
  );
};
