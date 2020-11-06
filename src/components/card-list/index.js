import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {Container, Title, Cards, Card, CardImage} from './styles';

const imagePrefix = 'https://image.tmdb.org/t/p/w440_and_h660_face';

const movies = [
  {
    backdrop_path: '/5BMwFwNzSidVYArn561acqtktxv.jpg',
  },
  {
    backdrop_path: '/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg',
  },
  {
    backdrop_path: '/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
  },
  {
    backdrop_path: '/6ZqXMR9aLLdGjbxkIMo77EhZexy.jpg',
  },
];

export default function CardList(props) {
  return (
    <Container>
      <Title>Favoritos</Title>
      <Cards>
        {(movies || []).map((movie, key) => {
          return (
            <Card onPress={() => {}}>
              <CardImage source={{uri: imagePrefix + movie.backdrop_path}} />
            </Card>
          );
        })}
      </Cards>
    </Container>
  );
}
