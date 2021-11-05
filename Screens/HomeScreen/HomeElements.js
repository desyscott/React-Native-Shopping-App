import styled from "styled-components";

export const HomeContent = styled.SafeAreaView`
  height: 100%;
  background-color: #fff;
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
  background-color: #f52a2a;
  width: 50px;
  height: 50px;
  margin-right: 500px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
