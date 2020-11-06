import React, {useState} from 'react';

import {
  Container,
  Logo,
  Field,
  TextInput,
  Header,
  Body,
  Cancel,
  CancelText,
  Search,
  SearchButton,
} from './styles';

import CardList from '../../components/card-list';
import Icon from 'react-native-vector-icons/Feather';

export default function TabBar(props) {
  const [search, setSearch] = useState(false);

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
          <SearchButton onPress={() => setSearch(true)}>
            <Icon name="user" color="#fff" size={25} />
          </SearchButton>
      </Header>

      <Search>
          <Field>
            <Icon
              onPress={() => setSearch(false)}
              name="arrow-left"
              color="#fff"
              size={20}
            />
            <TextInput
              placeholder="Pesquise por filmes"
              placeholderTextColor="#fff"
            />
          </Field>
          <Cancel onPress={() => setSearch(false)}>
            <CancelText>Cancelar</CancelText>
          </Cancel>
      </Search>

      <Body>
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </Body>
    </Container>
  );
}
