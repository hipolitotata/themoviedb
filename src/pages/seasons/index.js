import React, {useEffect, useState} from 'react';

import {
  Container,
  Logo,
  Field,
  TextInput,
  Header,
  Body,
  Search,
  SearchButton,
} from './styles';

import CardList from '../../components/card-list';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {getTreending} from '../../store/actions/movies.actions';

export default function TabBar(props) {
  const dispatch = useDispatch();

  const {treendingSeasons} = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    dispatch(
      getTreending({
        type_movie: 'tv',
      }),
    );
  }, []);

  return (
    <Container>
      <Header>
        <Logo
          resizeMode="cover"
          source={{
            uri:
              'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png',
          }}
        />
        <SearchButton>
          <Icon name="user" color="#fff" size={25} />
        </SearchButton>
      </Header>

      <Search>
        <Field>
          <TextInput
            placeholder="Pesquise por seriados"
            placeholderTextColor="#fff"
          />
        </Field>
      </Search>

      <Body>{<CardList title="Em alta" list={treendingSeasons} />}</Body>
    </Container>
  );
}
