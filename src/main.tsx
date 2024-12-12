import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-PFP5754J",
};

TagManager.initialize(tagManagerArgs);

render(<App />, document.getElementById("app")!);
