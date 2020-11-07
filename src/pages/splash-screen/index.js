import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Container, Logo} from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {getGenres, setDeviceLanguage} from '../../store/actions/movies.actions';

import {NativeModules, Platform} from 'react-native';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

export default function TabBar({navigation}) {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    dispatch(setDeviceLanguage(deviceLanguage));
    dispatch(getGenres({type_movie: 'movie'}));
    dispatch(getGenres({type_movie: 'tv'}));
  }, []);

  useEffect(() => {
    if (
      moviesReducer.genresMovies.length > 0 &&
      moviesReducer.genresSeasons.length > 0
    ) {
      navigation.navigate('TabBar');
    }
  }, [moviesReducer]);

  return (
    <Container>
      <StatusBar background="#242424" />

      <Logo
        resizeMode="cover"
        source={{
          uri: 'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png',
        }}
      />
    </Container>
  );
}
