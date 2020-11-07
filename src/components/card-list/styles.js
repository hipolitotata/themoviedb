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

export const Loading = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.ScrollView.attrs({
  horizontal: true,
  alwaysBounceHorizontal: true,
  bouncesZoom: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  min-height: 150px;
`;

export const Card = styled.TouchableOpacity`
  width: 100px;
  height: 150px;
  margin: 10px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;
