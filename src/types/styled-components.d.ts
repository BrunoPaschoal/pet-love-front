import theme from "../themes";

type Theme = typeof theme.defaultAppTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
