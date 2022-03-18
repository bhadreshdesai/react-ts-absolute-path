import CompA from "@libA/CompA";
import CompB from "@libA/CompB";
const CompC = (): JSX.Element => (
  <>
    <p>
      <div>Component C from LibB</div>
      <div>Using CompA and CompB from LibA</div>
      <CompA />
      <CompB />
    </p>
  </>
);
export default CompC;
