import React from "react";
import { useRenderScreen } from "../hooks/RenderScreen";
import TodoScreen from "./Todo";
import LoginScreen from "./Login";
// import { SplashScreen } from "./splash";

export default function Screens() {
  const { currentSceren } = useRenderScreen();
  // if (!currentSceren || currentSceren === "splash") return <SplashScreen />;
  if (!currentSceren || currentSceren === "signin") return <LoginScreen />;
  return <TodoScreen />;
}
