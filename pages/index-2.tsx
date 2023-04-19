import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";
import Menu from "@components/public/components/InitialPage";

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

export default function Home() {
  const [agogo, setAgogo] = useState(false);
  const toggleAgogo = () => setAgogo(!agogo);

  const [caixa, setCaixa] = useState(false);
  const toggleCaixa = () => setCaixa(!caixa);

  const [repique, setRepique] = useState(false);
  const toggleRepique = () => setRepique(!repique);

  const [surdo, setSurdo] = useState(false);
  const toggleSurdo = () => setSurdo(!surdo);

  const [tamborim, setTamborim] = useState(false);
  const toggleTamborim = () => setTamborim(!tamborim);

  const [timbal, setTimbal] = useState(false);
  const toggleTimbal = () => setTimbal(!timbal);

  const [xequere, setXequere] = useState(false);
  const toggleXequere = () => setXequere(!xequere);

  const [zabumba, setZabumba] = useState(false);
  const toggleZabumba = () => setZabumba(!zabumba);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const backgroundUrl = "";
  return (
    <div className="h-screen px-4 pt-5 text-gray-900 bg-white flexpx-4">
      <header className="flex justify-between w-full bg-white/05">
        <div>
          <button onClick={toggleMenu} className="text-4xl font-bold">
            Menu
          </button>
          <ul className={isOpen ? "" : "hidden"}>
            <li className="flex flex-col ">
              <button onClick={toggleAgogo} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Agogô/Triângulo
                  <div>{agogo ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${agogo ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/agogo-tamborim/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/agogo-tamborim/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/agogo-tamborim/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col ">
              <button onClick={toggleCaixa} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Caixa
                  <div>{caixa ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${caixa ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/caixa/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/caixa/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/caixa/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col ">
              <button onClick={toggleRepique} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Repique
                  <div>{repique ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${repique ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/repique/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/repique/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/repique/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col ">
              <button onClick={toggleSurdo} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Surdo
                  <div>{surdo ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${surdo ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/surdo/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/surdo/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/surdo/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col ">
              <button onClick={toggleTamborim} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Tamborim
                  <div>{tamborim ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${tamborim ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/tamborim/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/tamborim/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/tamborim/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col ">
              <button onClick={toggleTimbal} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Timbal
                  <div>{timbal ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${timbal ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/timbal/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/timbal/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/timbal/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col ">
              <button onClick={toggleXequere} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Xequerê
                  <div>{xequere ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${xequere ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/xequere/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/xequere/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/xequere/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col ">
              <button onClick={toggleZabumba} className="flex">
                <div className="flex items-center gap-3 text-lg border-b border-gray-800">
                  Zabumba
                  <div>{zabumba ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                </div>
              </button>
              <ul className={`${zabumba ? "" : "hidden"} ml-8`}>
                <li>
                  <Link href={"/zabumba/baiao"}>Baião</Link>
                </li>
                <li>
                  <Link href={"/zabumba/xote"}>Xote</Link>
                </li>
                <li>
                  <Link href={"/zabumba/quadrilha"}>Quadrilha</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <image
          src="https://static.wixstatic.com/media/4ac115_3b5733d0022c4106a1856fd81ea10cae.jpg/v1/fill/w_265,h_76,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ac115_3b5733d0022c4106a1856fd81ea10cae.jpg"
          alt="Ambiente Virtual de Ensino - Multibloco"
          className="flex justify-end w-4/12 h-7"
        /> */}
      </header>
      <Menu data={dynamicMenu} />
    </div>
  );
}
