import React, {useEffect, useState} from 'react';

import {Container, Logo, Header, Body, OptionsUser} from '../../global-styles';

import CardList from '../../components/card-list';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {getTreending, getDiscover} from '../../store/actions/movies.actions';

const type_movie = 'movie';

export default function TabBar(props) {
  const dispatch = useDispatch();
  const {treendingMovies, genresMovies, movies} = useSelector(
    (state) => state.moviesReducer,
  );

  useEffect(() => {
    dispatch(getTreending({type_movie}));
    dispatch(getDiscover({type_movie}));
  }, []);

  function getDiscoveryByGenre(discovery, genreId) {
    return discovery.filter((item) => item.genre_ids.includes(genreId));
  }

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
        <OptionsUser>
          <Icon name="user" color="#fff" size={25} />
        </OptionsUser>
      </Header>

      <Body>
        {<CardList title="Em alta" list={treendingMovies} />}
        {genresMovies.map((genre, key) => {
          const discovery = getDiscoveryByGenre(movies, genre.id);
          if (discovery.length === 0) return;
          return <CardList key={key} title={genre.name} list={discovery} />;
        })}
      </Body>
    </Container>
  );
}
