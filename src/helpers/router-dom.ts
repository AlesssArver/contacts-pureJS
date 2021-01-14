import { init } from "./index";

export const Route = (path: string, render: any) => {
  if (window.location.pathname === path) {
    return init.createComponent(render);
  } else {
    return "";
  }
};
