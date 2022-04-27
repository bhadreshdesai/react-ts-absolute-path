import * as ReactDOMClient from "react-dom/client";

import { default as App } from "@app/Application";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement as Element);

root.render(<App />);
