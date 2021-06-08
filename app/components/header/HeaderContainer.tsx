import styled from 'styled-components/native'
import { spacing } from "../../theme"

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding-left: ${spacing[4]}px;
  padding-right: ${spacing[4]}px;
  align-items: center;
  padding-top: ${spacing[5]}px;
  padding-bottom: ${spacing[5]}px;
  justify-content: flex-start;
`;