import React from 'react';
import {ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {Container, Loading, Title, Cards, Card, CardImage} from './styles';

const imagePrefix = 'https://image.tmdb.org/t/p/w440_and_h660_face';

export default function CardList(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.list && props.list.length === 0 && (
        <Loading>
          <ActivityIndicator color={'#fff'} />
        </Loading>
      )}

      {props.list && props.list.length !== 0 && (
        <Cards>
          {props.list.map((movie, key) => {
            return (
              <Card key={key} onPress={() => {}}>
                <CardImage source={{uri: imagePrefix + movie.backdrop_path}} />
              </Card>
            );
          })}
        </Cards>
      )}
    </Container>
  );
}
