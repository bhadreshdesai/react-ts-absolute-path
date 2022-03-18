import CompA from "@libA/CompA";
import CompB from "@libA/CompB";
const CompC = (): JSX.Element => (
  <>
    <div>
      <div>Component C from LibB</div>
      <div>Using CompA and CompB from LibA</div>
      <CompA />
      <CompB />
    </div>
  </>
);
export default CompC;
