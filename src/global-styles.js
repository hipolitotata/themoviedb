import styled from 'styled-components';

export const Container = styled.ScrollView`
  background: #242424;
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  height: 70px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsUser = styled.TouchableOpacity`

`;

export const Logo = styled.Image`
  width: 40%;
  height: 35px;
  margin: 0 0 0 -20px;
`;

export const Body = styled.View`
  margin: 15px 0 60px 0;
`;

export const Field = styled.View`
  width: 80%;
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  padding-left: 15px;
`;

export const Cancel = styled.TouchableOpacity``;

export const CancelText = styled.Text`
  color: #fff;
`;
