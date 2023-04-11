import Link from "next/link";
import Design from "../../../components/design";
import Calcdesign from "../../../components/app";

function Calculator() {
  return (
    <div>
      <Calcdesign>
        <h1>Calculator</h1>
        <h2>
          Go back to <Link href="/posts/reactapp">Meine React App</Link>.
        </h2>
      </Calcdesign>
    </div>
  );
}

export default Calculator;
