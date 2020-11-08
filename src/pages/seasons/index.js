import React, {useEffect, useState} from 'react';

import {Container, Logo, Header, Body, OptionsUser} from '../../global-styles';

import CardList from '../../components/card-list';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTreending,
  getDiscover,
  setCurrentDiscover,
} from '../../store/actions/movies.actions';

const type_movie = 'tv';

export default function TabBar({navigation}) {
  const dispatch = useDispatch();
  const {treendingSeasons, genresSeasons, seasons} = useSelector(
    (state) => state.moviesReducer,
  );

  useEffect(() => {
    dispatch(getTreending({type_movie}));
    dispatch(getDiscover({type_movie}));
  }, []);

  function getDiscoveryByGenre(discovery, genreId) {
    return discovery.filter((item) => item.genre_ids.includes(genreId));
  }

  function goToDetails(item) {
    dispatch(setCurrentDiscover(item));
    navigation.navigate('Details');
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
        {
          <CardList
            navigation={navigation}
            title="Em alta"
            list={treendingSeasons}
          />
        }
        {genresSeasons.map((genre, key) => {
          const discovery = getDiscoveryByGenre(seasons, genre.id);
          if (discovery.length === 0) return;
          return (
            <CardList
              navigation={navigation}
              key={key}
              title={genre.name}
              list={discovery}
            />
          );
        })}
      </Body>
    </Container>
  );
}
