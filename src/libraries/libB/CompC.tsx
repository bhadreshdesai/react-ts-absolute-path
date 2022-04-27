import CompA from "@libA/CompA";
import CompB from "@libA/CompB";
const CompC = (): JSX.Element => (
  <>
    <div>
      <p>Component C from LibB</p>
      <p>Using CompA and CompB from LibA</p>
      <CompA />
      <CompB />
    </div>
  </>
);
export default CompC;
