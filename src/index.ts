import { App } from "./App";
import { init } from "./helpers";
import { store } from "./store";

import "./assets/styles/index.sass";

const renderEntireTree = (state: any) => {
  init.render(
    init.createComponent(() => App({ state })),
    document.getElementById("root")
  );
};
store.subscribe(renderEntireTree);