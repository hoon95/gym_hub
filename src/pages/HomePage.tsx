import ReactFullpage from "@fullpage/react-fullpage";
import { Home } from "../components/Home/Main/Main";
import { Step } from "../components/Home/Step/Step";
import { Share } from "components/Home/Share/Share";

export const HomePage = () => {
  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3"
      anchors={["home", "step", "share"]}
      scrollingSpeed={1000}
      credits={{ enabled: false }}
      render={() => {
        return (
          <>
            <div className="section">
              <Home />
            </div>
            <div className="section">
              <Step />
            </div>
            <div className="section">
              <Share />
            </div>
          </>
        );
      }}
    />
  );
}