import { FEATURESRELEASE } from "../dB/FeaturesRelease";
import Feature from "../utilitys/feature";

function Featered() {
  return (
    <div className="flex-row py-8">
      {FEATURESRELEASE.map((feature, index) => {
        return <Feature key={index} />;
      })}
    </div>
  );
}

export default Featered;
