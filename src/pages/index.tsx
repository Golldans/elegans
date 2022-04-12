import { Fragment, useState } from "react";
import BasicHead from "../components/Basics/Head";

export default function LandingPage() {

  const [showLandingPageHero, setShowLandingPageHero] = useState(false);

  const handleLandingPageHero = () => {
    setShowLandingPageHero(!showLandingPageHero);
  }

  return (
    <Fragment>
      <div className="max-w-full">
        <BasicHead />
        <div className="flex items-center justify-center flex-col w-screen max-w-full h-screen bg-neutral-900">
          {
            showLandingPageHero
              ?
            <div className="flex items-center justify-center h-3/6 w-3/6 bg-center bg-no-repeat bg-cover">
              <h1 className="text-white text-9xl">
                ELEGANS
              </h1>
            </div>
              :
            ''
          }
            <button className="bg-white px-2" onClick={handleLandingPageHero}>
              X
            </button>
        </div>
        <div className="w-screen max-w-full h-screen bg-neutral-800">

        </div>
      </div>
    </Fragment>
  )
}
