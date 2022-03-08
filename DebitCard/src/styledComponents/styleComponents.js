import styled from 'styled-components/native';
import colors from '../constants/colors';

export const Header = styled.SafeAreaView`
  flex: 0.40;
  flex-direction: row;
  z-index : 0;
`;

export const Body = styled.View`
  flex: 0.60;
  background-color: ${colors.white};
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  z-index : 0;
`;

export const FirstCard = styled.View`
  flex: 0.35;
  background-color: ${colors.white};
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  z-index : 0;
`;

export const SecondCard = styled.View`
  flex: 0.75;
  background-color: ${colors.white};
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  z-index : 0;
  margin-top : 15px;
`;

export const HideView = styled.View`
  background-color: ${colors.white};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.blueMain};
`;

