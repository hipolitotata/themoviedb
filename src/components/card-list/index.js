import React from 'react';
import {ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {Container, Loading, Title, Cards, Card, CardImage} from './styles';

import {IMAGE_PREFIX as _} from '../../constants';

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
            if (!movie.backdrop_path) return;
            return (
              <Card
                key={key}
                onPress={() => props.navigation.navigate('Details', {movie})}>
                <CardImage source={{uri: _ + movie.backdrop_path}} />
              </Card>
            );
          })}
        </Cards>
      )}
    </Container>
  );
}
