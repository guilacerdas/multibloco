import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Xequere = () => {
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
              <option value="galope">Galope</option>
              <option value="xote">Xote</option>
            </select>
          </div>
        </div>
        <section className="flex justify-center w-full">
          {runningVideo === "baiao" && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dqGhMFp-wtQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          {runningVideo === "carimbo" && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bqyAmw7Ii0M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          {runningVideo === "galope" && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tuSC3jgHvN4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          {runningVideo === "xote" && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6ExsMPv35oo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </section>
      </section>
    </>
  );
};

export default Xequere;
