import React, {useState, createRef} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

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
  CardImage,
} from './styles';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {findDiscovery} from '../../store/actions/movies.actions';

import {IMAGE_PREFIX as _} from '../../constants';

export default function TabBar(props) {
  const [search, setSearch] = useState(null);

  const {loadingSearch, discoverySearch} = useSelector(
    (state) => state.moviesReducer,
  );

  const inputRef = createRef();
  const dispatch = useDispatch();

  function searchDiscovery(text) {
    setSearch(text);
    dispatch(findDiscovery({search: text}));
  }

  return (
    <Container>
      <Header>
        <SearchField>
          <SearchInput
            inputRef={inputRef}
            onChangeText={searchDiscovery}
            delayTimeout={500}
            placeholder="Pesquise aqui..."
            placeholderTextColor="#fff"
            value={search}
          />
          <Icons>
            {loadingSearch && <ActivityIndicator size={15} color="#fff" />}

            <IconButton onPress={() => setSearch(null)}>
              <Icon name="closecircle" size={20} color="#fff" />
            </IconButton>
          </Icons>
        </SearchField>
      </Header>

      <Body>
        <Cards>
          {discoverySearch.map((item, key) => {
            if (!item.backdrop_path) return;
            return (
              <Card key={key}>
                <CardImage source={{uri: _ + item.backdrop_path}} />
              </Card>
            );
          })}
        </Cards>
      </Body>
    </Container>
  );
}
