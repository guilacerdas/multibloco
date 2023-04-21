import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Image from "next/image";
import InitialPage from "@components/public/components/InitialPage";

const dynamicMenu = [
  {
    naipe: "Agogo",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "agogo-tamborim/baiao" },
      { ritmo: "Xote", url: "agogo-tamborim/xote" },
      { ritmo: "Quadrilha", url: "agogo-tamborim/quadrilha" },
    ],
  },
  {
    naipe: "Caixa",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "caixa/baiao" },
      { ritmo: "Xote", url: "caixa/xote" },
      { ritmo: "Quadrilha", url: "caixa/quadrilha" },
    ],
  },
  {
    naipe: "Repique",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "repique/baiao" },
      { ritmo: "Xote", url: "repique/xote" },
      { ritmo: "Quadrilha", url: "repique/quadrilha" },
    ],
  },
  {
    naipe: "Surdo",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "surdo/baiao" },
      { ritmo: "Xote", url: "surdo/xote" },
      { ritmo: "Quadrilha", url: "surdo/quadrilha" },
    ],
  },
  {
    naipe: "Tamborim",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "tamborim/baiao" },
      { ritmo: "Xote", url: "tamborim/xote" },
      { ritmo: "Quadrilha", url: "tamborim/quadrilha" },
    ],
  },
  {
    naipe: "Timbal",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "timbal/baiao" },
      { ritmo: "Xote", url: "timbal/xote" },
      { ritmo: "Quadrilha", url: "timbal/quadrilha" },
    ],
  },
  {
    naipe: "Xequerê",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "xequere/baiao" },
      { ritmo: "Xote", url: "xequere/xote" },
      { ritmo: "Quadrilha", url: "xequere/quadrilha" },
    ],
  },
  {
    naipe: "Zabumba",
    isOpen: false,
    submenu: [
      { ritmo: "Baião", url: "zabumba/baiao" },
      { ritmo: "Xote", url: "zabumba/xote" },
      { ritmo: "Quadrilha", url: "zabumba/quadrilha" },
    ],
  },
];
export default function HomePage() {
  const [activePage, setActivePage] = useState("main");
  const [password, setPassword] = useState("");

  const [eyes, setEyes] = useState(false);
  const [type, setType] = useState("password");
  const alternateEye = () => {
    setEyes(!eyes);
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const suitsPassword = (evt: any) => {
    evt.preventDefault();

    window.alert(`a senha digitada foi ${password}`);
  };

  return (
    <>
      <section className="flex justify-center w-full h-screen py-2 bg-white text-stone-800">
        <div className="container flex flex-col items-center gap-5 mx-4 ">
          <header className="flex flex-col items-center w-full gap-3">
            <p className="text-3xl">Repositório Virtual</p>
            <Image
              src="/images/MultiblocoJunino.png"
              width="320"
              height="420"
              alt={"Logo Multibloco Junino"}
            ></Image>
          </header>
          <form
            onSubmit={suitsPassword}
            className="flex flex-col items-center justify-center w-full gap-1"
          >
            <p className="text-lg">Digite a senha do seu naipe:</p>
            <div className="flex w-[90%] sm:w-6/12 lg:w-4/12 xl:w-3/12 border gap-2 border-red-600 rounded-md">
              <input
                type={type}
                onChange={(evt) => setPassword(evt.target.value)}
                className="w-full p-1 bg-white"
              />
              <div className="flex">
                <div
                  className="flex items-center w-full"
                  onClick={alternateEye}
                >
                  {eyes ? (
                    <BsFillEyeSlashFill className="text-2xl text-red-600" />
                  ) : (
                    <BsFillEyeFill className="text-2xl text-red-600" />
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={suitsPassword}>
                  <AiOutlineSend className="text-2xl text-red-600" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
