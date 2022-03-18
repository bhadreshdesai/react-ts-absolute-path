import { render } from "react-dom";

import { default as App } from "@app/Application";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
