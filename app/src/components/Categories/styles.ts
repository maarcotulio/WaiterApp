import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View<{ elevation?: number }>`
  background: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  ${Platform.select({
    android: `elevation: 2;`,
    ios: ``,
  })}
`;
