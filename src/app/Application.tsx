import { default as LibACompA } from "@libA/CompA";
import { default as LibACompB } from "@libA/CompB";

import { default as LibBCompA } from "@libB/CompA";
import { default as LibBCompB } from "@libB/CompB";
import { default as LibBCompC } from "@libB/CompC";

const Application = (): JSX.Element => (
  <>
    <p>Application</p>
    <p>Render components from Lib A</p>
    <LibACompA />
    <LibACompB />
    <p>Render components from Lib B</p>
    <LibBCompA />
    <LibBCompB />
    <LibBCompC />
  </>
);
export default Application;
