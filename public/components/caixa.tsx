import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Caixa = () => {
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
              src="https://www.youtube.com/embed/IQhmUzoqA-c"
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
              src="https://www.youtube.com/embed/dnBjth9tVVo"
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
              src="https://www.youtube.com/embed/-XVEtOMU2ow"
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
              src="https://www.youtube.com/embed/5e5X3qohbtA"
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

export default Caixa;
