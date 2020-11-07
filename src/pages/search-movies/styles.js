import styled from 'styled-components';

export const Header = styled.View`
  height: 80px;
  margin: 10px 0 0;
  width: 100%;
  justify-content: center;
  padding: 0 10px;
`;

export const SearchField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3px 8px;
  font-size: 18px;
  border-radius: 5px;
  background-color: #2e2e2e;
`;

export const SearchInput = styled.TextInput`
  width: 88%;
  color: #fff;
`;

export const Icons = styled.View`
  width: 12%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 0 0 0 15px;
`;

export const Body = styled.ScrollView`
  margin: 10px 0 80px;
`;

export const Cards = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.View`
  width: 28.6%;
  height: 200px;
  margin: 10px;
  background-color: blue;
`;
