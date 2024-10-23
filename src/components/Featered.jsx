import { FEATURESRELEASE } from "../dB/FeaturesRelease";

function Featered() {
  return (
    <div className="flex-row py-8">
      {FEATURESRELEASE.map((feature, index) => {
        return <div key={index}> holas 3</div>;
      })}
    </div>
  );
}

export default Featered;
