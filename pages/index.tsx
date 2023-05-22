import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import TrianguloMaraca from "@components/public/components/triangulomaraca";
import Caixa from "@components/public/components/caixa";
import Repique from "@components/public/components/repique";
import Surdo from "@components/public/components/surdo";
import Tamborim from "@components/public/components/tamborim";
import Timbal from "@components/public/components/timbal";
import Xequere from "@components/public/components/xequere";
import Zabumba from "@components/public/components/zabumba";

export default function HomePage() {
  const [activePage, setActivePage] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [triangulo, setTriangulo] = useState(false);
  const [caixa, setCaixa] = useState(false);
  const [repique, setRepique] = useState(false);
  const [surdo, setSurdo] = useState(false);
  const [tamborim, setTamborim] = useState(false);
  const [timbal, setTimbal] = useState(false);
  const [xequere, setXequere] = useState(false);
  const [zabumba, setZabumba] = useState(false);
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
    switch (password) {
      case "triangulojunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setTriangulo(!triangulo);
        break;
      case "caixajunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setCaixa(!caixa);
        break;
      case "repiquejunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setRepique(!repique);
        break;
      case "surdojunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setSurdo(!surdo);
        break;
      case "tamborimjunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setTamborim(!tamborim);
        break;
      case "timbaljunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setTimbal(!timbal);
        break;
      case "xequerejunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setXequere(!xequere);
        break;
      case "zabumbajunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setZabumba(!zabumba);
        break;
      case "triangulojunino2023":
        setShowForm(!showForm);
        setActivePage(password);
        setTriangulo(!triangulo);
        break;
      default:
        window.alert("Senha incorreta, tente novamente");
        break;
    }
  };

  return (
    <>
      <section className="flex justify-center w-full h-screen py-2 bg-white text-stone-800">
        <div className="container flex flex-col items-center gap-5 mx-4 ">
          <header className="flex flex-col items-center w-full gap-3 lg:flex-row lg:justify-center">
            <p className="text-3xl ">Repositório Virtual</p>
            <Image
              src="/images/MultiblocoJunino.png"
              width="320"
              height="420"
              alt={"Logo Multibloco Junino"}
            ></Image>
          </header>
          {showForm && (
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
          )}
          {triangulo && <TrianguloMaraca />}
          {caixa && <Caixa />}
          {repique && <Repique />}
          {surdo && <Surdo />}
          {tamborim && <Tamborim />}
          {timbal && <Timbal />}
          {xequere && <Xequere />}
          {zabumba && <Zabumba />}
        </div>
      </section>
    </>
  );
}
