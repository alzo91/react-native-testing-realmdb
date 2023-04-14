import { RenderScreenProvider } from "./RenderScreen";

export function Hooks({ children }) {
  return <RenderScreenProvider>{children}</RenderScreenProvider>;
}
