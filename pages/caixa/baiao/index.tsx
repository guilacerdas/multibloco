import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import ReactModal from "react-modal";
import Link from "next/link";

export default function CaixaBaiao() {
  return (
    <>
      <section className="h-screen text-gray-900 bg-white">
        <header>
          <button>
            {" "}
            <Link href={"/#"}> Voltar</Link>
          </button>
        </header>
        <iframe
          src="https://drive.google.com/file/d/1xVTkLuf3thEx307BA5RA9nc6HxjKzfS2/preview"
          width="320"
          allow="autoplay"
        ></iframe>
      </section>
    </>
  );
}
