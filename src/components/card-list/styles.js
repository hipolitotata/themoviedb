import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin: 5px 10px;
`;

export const Cards = styled.ScrollView.attrs({
  horizontal: true,
  alwaysBounceHorizontal: true,
  bouncesZoom: true,
  contentContainerStyle: {flexGrow: 1, justifyContent: 'center'},
})``;

export const Card = styled.TouchableOpacity`
  width: 100px;
  height: 150px;
  margin: 10px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;
