import React, { useState } from "react";

const Caixa = () => {
  return (
    <>
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
    </>
  );
};

export default Caixa;
