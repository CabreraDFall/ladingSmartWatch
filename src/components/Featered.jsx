import Feature from "../utilitys/feature";
import { FEATURESRELEASE } from "../dB/FeaturesRelease";

function Featered() {
  return (
    <div className="flex-row py-8">
      {FEATURESRELEASE.map((feature, index) => {
        return <Feature key={index} data={feature} />;
      })}
    </div>
  );
}

export default Featered;
