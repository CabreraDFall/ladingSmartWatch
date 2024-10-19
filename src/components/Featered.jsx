import { FEATURESRELEASE } from "../dB/FeaturesRelease";
import Feature from "../utils/feature";

FEATURESRELEASE;

function Featered() {
  console.log(FEATURESRELEASE[2].orientation);

  return (
    <div id="Features" className="flex-row py-8">
      {FEATURESRELEASE.map(({ orientation, ...feature }, index) => {
        return <Feature key={index} data={feature} orientation={orientation} />;
      })}
    </div>
  );
}

export default Featered;
