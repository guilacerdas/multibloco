import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Image from "next/image";

const Content = (activePage: any, setActivePage: any) => {
  switch (activePage) {
    case "triangulomatraca":
      return window.alert("Triangulo e Matraca");

    case "caixa":
      return window.alert("caixa");

    case "repique":
      return window.alert("repique");

    case "surdo":
      return window.alert("surdo");

    case "tamborim":
      return window.alert("tamborim");

    case "timbal":
      return window.alert("timbal");

    case "xequere":
      return window.alert("xequere");

    case "zabumba":
      return window.alert("zabumba");

    default:
      return null;
  }
};

export default Content;
