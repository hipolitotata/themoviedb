import React, {useEffect} from 'react';
import {Container} from '../../global-styles';
import {Header, BackButton, ImageMovie, Title, Text} from './styles';
import {IMAGE_PREFIX as _} from '../../constants';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import StarRating from 'react-native-star-rating';

export default function TabBar({navigation, route}) {
  const {
    params: {movie},
  } = route;

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.pop()}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </BackButton>
      </Header>
      <ImageMovie
        source={{uri: _ + movie.poster_path || movie.backdrop_path}}
      />
      <Title>
        {movie.name ||
          movie.original_name ||
          movie.title ||
          movie.original_title}
      </Title>

      <StarRating
        containerStyle={{paddingHorizontal: 80, paddingVertical: 10}}
        fullStarColor={'red'}
        disabled={true}
        maxStars={5}
        starSize={25}
        rating={parseInt(movie.vote_average) / 2}
      />

      <Text>
        Data de lançamento: {moment(movie.release_date).format('DD/MM/YYYY')}
      </Text>
      <Text>{movie.overview || 'Esse filme não possui sinopse'}</Text>
    </Container>
  );
}
