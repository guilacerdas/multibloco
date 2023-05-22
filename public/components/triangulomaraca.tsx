import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const TrianguloMaraca = () => {
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
              <option value="maracacarimbo">Maracá - Carimbó</option>
            </select>
          </div>
        </div>
        <section className="flex justify-center w-full">
          {runningVideo === "baiao" && <h2>Vídeo em Breve</h2>}
          {runningVideo === "carimbo" && <h2>Vídeo em Breve</h2>}
          {runningVideo === "quadrilha" && <h2>Vídeo em Breve</h2>}
          {runningVideo === "xote" && <h2>Vídeo em Breve</h2>}
          {runningVideo === "maracacarimbo" && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8HYh50pZIkM"
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

export default TrianguloMaraca;
