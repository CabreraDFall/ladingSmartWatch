import { FEATURESRELEASE } from "../dB/FeaturesRelease";

import Test from "../utilities/Test";

function Featered() {
  return (
    <div className="flex-row py-8">
      {FEATURESRELEASE.map((feature, index) => {
        return <Test key={index} />;
      })}
    </div>
  );
}

export default Featered;
