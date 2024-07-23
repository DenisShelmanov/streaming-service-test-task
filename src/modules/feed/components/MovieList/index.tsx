import { Carousel } from 'antd';
import './index.css';

import { useGetMoviesQuery } from '../../../../api';
import { useDimension } from '../../../common/hooks';
import { MovieItem } from '../MovieItem';

export const MovieList = () => {
  const { data: movies } = useGetMoviesQuery();
  const { width } = useDimension();

  const slidesToShow = Math.floor(width / 240);

  return (
    <div className="movie-list-wrapper">
      <Carousel
        className="custom-carousel"
        arrows
        slidesToShow={slidesToShow}
        dots={false}
        draggable
        slidesToScroll={slidesToShow - 1 || 1}
      >
        {movies?.map((movie) => (
          <div className="carousel-item" key={movie.id}>
            <MovieItem movie={movie} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
