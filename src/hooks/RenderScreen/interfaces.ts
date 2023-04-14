export type ITypeOfScreen = "splash" | "signin" | "home" | undefined;

export interface IRenderScreenContextProps {
  currentSceren: ITypeOfScreen;
  setCurrentScreen(value: ITypeOfScreen): void;
}
