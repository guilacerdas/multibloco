import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Caixa = () => {
  return (
    <>
      <section className="w-full border">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-center ">
          <div className="flex w-full ">
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
      </section>
    </>
  );
};

export default Caixa;
