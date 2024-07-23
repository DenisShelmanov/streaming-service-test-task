import { StarOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Card, Space, Modal } from 'antd';
import { MouseEvent, useState } from 'react';
import ReactPlayer from 'react-player';

import { Text } from '../../../common/components';
import { TextColor, TextSize } from '../../../common/components/Text';
import { IMovie } from '../../interfaces';

import './index.css';

interface IProps {
  movie: IMovie | null;
}

export const MovieItem = ({ movie }: IProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [position, setPosition] = useState(0);

  if (!movie) {
    return null;
  }

  const onCardClick = () => {
    setIsModalOpened(true);
  };

  const onMouseDown = (event: MouseEvent) => {
    setPosition(event.clientX);
  };

  const onMouseUp = (event: MouseEvent) => {
    const mouseUp = event.clientX;
    if (mouseUp < position + 6 && mouseUp > position - 6) {
      onCardClick();
    }
  };
  const renderCardCover = () => {
    return (
      <img
        className="movie-image"
        alt={movie.title}
        src={require(`../../../../assets/images/${movie.imageUrl}`)}
      />
    );
  };

  return (
    <>
      <Card
        cover={renderCardCover()}
        className={'movie-card'}
        bordered={false}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <Text color={TextColor.BLACK} size={TextSize.SMALL}>
          {movie.title}
        </Text>
        <Space className="movie-info">
          <Text color={TextColor.BLACK} size={TextSize.EXTRA_SMALL}>
            {movie.genre},
          </Text>
          <Text color={TextColor.BLACK} size={TextSize.EXTRA_SMALL}>
            {movie.year}
          </Text>
        </Space>
        <Text color={TextColor.BLACK} size={TextSize.SMALL}>
          {movie.rating}
          <StarOutlined className="star-icon" />
        </Text>
        <div className="hover-content">
          <PlayCircleOutlined />
          Watch
        </div>
      </Card>
      <Modal
        open={isModalOpened}
        onCancel={() => {
          setIsModalOpened(false);
        }}
        footer={null}
        className="modal-window"
      >
        <div className="movie-title">
          <Text size={TextSize.SMALL}>{movie.title}</Text>
        </div>
        <div className="player">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7PIji8OubXU&t=10s"
            width="90%"
            height="90%"
            style={{
              margin: 'auto',
              paddingTop: '20px',
            }}
          />
        </div>
      </Modal>
    </>
  );
};
