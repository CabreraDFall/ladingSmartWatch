import { FEATURESRELEASE } from "../dB/FeaturesRelease";

import Release from "../utilities/Release";

function Featered() {
  return (
    <div className="flex-row py-8">
      {FEATURESRELEASE.map((feature, index) => {
        return <Release key={index} data={feature} />;
      })}
    </div>
  );
}

export default Featered;
