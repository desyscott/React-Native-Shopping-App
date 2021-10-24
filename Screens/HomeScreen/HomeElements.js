import styled from "styled-components";

export const HomeContent = styled.SafeAreaView`
  height: 100%;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 90px;
  margin-top: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderContent = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const HeaderText1 = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const HeaderText = styled.Text`
  color: #00b761;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const HeaderCart = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const SearchBar = styled.View`
  background-color: #d3d3d1;
  height: 50px;
  width: 310px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const SortIcon = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #00b769;
  width: 50px;
  height: 50px;
  margin-right: 500px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
