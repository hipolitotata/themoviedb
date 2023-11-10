import styled from 'styled-components';

export const Tabs = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 40px;
  flex-direction: row;
  justify-content: space-around;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #141414;
`;

export const Tab = styled.TouchableOpacity`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
`;

export const TextTab = styled.Text`
  color: ${(props) => props.color || '#777'};
  font-size: 12px;
`;
