import { default as LibACompA } from "@libA/CompA";
import { default as LibACompB } from "@libA/CompB";

import { default as LibBCompA } from "@libB/CompA";
import { default as LibBCompB } from "@libB/CompB";
import { default as LibBCompC } from "@libB/CompC";

const Application = (): JSX.Element => (
  <>
    <div>Application</div>
    <br />
    <div>Render components from Lib A</div>
    <LibACompA />
    <LibACompB />
    <br />
    <div>Render components from Lib B</div>
    <LibBCompA />
    <LibBCompB />
    <LibBCompC />
  </>
);
export default Application;
