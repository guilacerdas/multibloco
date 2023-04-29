import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tamborim = () => {
  const [runningVideo, setRunningVideo] = useState("");

  return (
    <>
      <section className="w-full">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-center ">
          <div className="flex">
            <AiOutlineCloseCircle
              className="text-2xl"
              onClick={() => location.reload()}
            />
          </div>
          <div className="flex ">
            <label htmlFor="pet-select">Escolha um ritmo:</label>

            <select
              name="pets"
              id="pet-select"
              onChange={(evt) => setRunningVideo(evt.target.value)}
              className="py-3 bg-white border rounded-md"
            >
              <option value="">--Escolha uma opção--</option>
              <option value="baiao">Baião</option>
              <option value="carimbo">Carimbó</option>
              <option value="quadrilha">Quadrilha</option>
              <option value="xote">Xote</option>
            </select>
          </div>
        </div>
        <section className="flex justify-center w-full">
          {runningVideo === "baiao" && (
            <iframe
              src="https://drive.google.com/file/d/1TAeVRu3l9OMe9-nayR99nAtWOVG8lBmU/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          )}
          {runningVideo === "carimbo" && <h2>Vídeo em Breve</h2>}
          {runningVideo === "quadrilha" && <h2>Vídeo em Breve</h2>}
          {runningVideo === "xote" && (
            <iframe
              src="https://drive.google.com/file/d/1CFZUpHUKABzggWgTz-ycYoxIw-oZ08xj/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          )}
        </section>
      </section>
    </>
  );
};

export default Tamborim;
