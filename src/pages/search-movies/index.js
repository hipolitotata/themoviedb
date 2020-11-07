import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import _ from 'lodash';

import {Container} from '../../global-styles';
import {
  Header,
  SearchField,
  SearchInput,
  IconButton,
  Icons,
  Body,
  Cards,
  Card,
} from './styles';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {findDiscovery} from '../../store/actions/movies.actions';

export default function TabBar(props) {
  const [search, setSearch] = useState('');
  const {loadingSearch, discoverySearch} = useSelector(
    (state) => state.moviesReducer,
  );

  const dispatch = useDispatch();

  function searchDiscovery() {
    console.log("debounce")
    // dispatch(findDiscovery({search}));
  }

  return (
    <Container>
      <Header>
        <SearchField>
          <SearchInput
            placeholder="Pesquise aqui..."
            placeholderTextColor="#fff"
            onChangeText={(text) => {
              setSearch(text);
              _.debounce(searchDiscovery, 1200);
            }}
            value={search}
          />
          <Icons>
            {loadingSearch && <ActivityIndicator size={15} color="#fff" />}
            {search !== '' && (
              <IconButton onPress={() => setSearch('')}>
                <Icon name="closecircle" size={20} color="#fff" />
              </IconButton>
            )}
          </Icons>
        </SearchField>
      </Header>

      <Body>
        <Cards>
          {discoverySearch.map((item) => (
            <Card />
          ))}
        </Cards>
      </Body>
    </Container>
  );
}
