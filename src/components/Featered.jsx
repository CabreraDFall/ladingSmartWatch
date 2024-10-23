import { FEATURESRELEASE } from "../dB/FeaturesRelease";
import Feature from "../utilitys/feature";

function Featered() {
  return (
    <div id="Features" className="flex-row py-8">
      {FEATURESRELEASE.map(({ orientation, ...feature }, index) => {
        return <Feature key={index} data={feature} orientation={orientation} />;
      })}
    </div>
  );
}

export default Featered;
