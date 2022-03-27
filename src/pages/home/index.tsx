import { Fragment, useState } from "react";
import BasicHead from "../../components/Basics/Head";

export default function Landing() {

    const [showTitles, setShowTitles] = useState(false);

    function handleShowTitles() {
        setShowTitles(!showTitles);
    };

    return(
        <Fragment>
            <BasicHead />
            <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen bg-neutral-900">
                <div className="col-span-2 row-start-1 flex items-center p-10">
                    <h1 className="text-white text-8xl tracking-widest">
                        {showTitles ? 'ELEGANS' : ''}
                    </h1>
                </div>
                <div className="col-span-2 row-start-2 flex items-start p-10">
                    <h2 className="text-white text-6xl tracking-widest">
                        {showTitles ? 'FASTIGIUM TEMPUS' : ''}
                    </h2>
                </div>
                <div className="grid grid-cols-4 col-span-2 row-start-3">
                    <div className="col-span-3 flex items-center justify-center">
                        <p className="text-yellow-200 text-justify p-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsa et, modi expedita enim quibusdam nemo velit exercitationem, eaque voluptate obcaecati? Exercitationem, dolores? Animi modi laboriosam exercitationem distinctio, nobis est quam, pariatur debitis quis eveniet, perferendis rem tempora qui! Eligendi.
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <ul className="text-yellow-200">
                            <li>lorem</li>
                            <li>ipsum</li>
                            <li>dolor</li>
                        </ul>
                    </div>
                </div>
                <div className="col-start-3 row-span-3 flex items-center justify-center">
                    <div className="bg-[url('/neon_sign.jpg')] bg-cover bg-center bg-no-repeat w-9/12 h-5/6 cursor-pointer rounded-md transition duration-300 hover:shadow hover:shadow-pink-500"  onClick={handleShowTitles}/>
                </div>
            </div>
        </Fragment>
    )
}