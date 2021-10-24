import styled from "styled-components";

export const CateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const CateWrapper = styled.TouchableOpacity`
  margin: 10px;
  width: 90px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  ${
    "" /* &::before {
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
  } */
  }
`;

// export const CateText = styled.Text`
//   color: grey;
//   font-size: 16px;
//   font-weight: bold;
//   text-transform: capitalize;
// `;
