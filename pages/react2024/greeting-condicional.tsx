import React from "react";

type Props = {};

const GreetingCondicional = ({}: Props) => {
  const date = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format();

  const hour = new Date().getHours();
  let greeting = "";
  let background = "";
  if (hour >= 0 && hour < 6) {
    greeting = "Boa Madrugada";
    background = "from-blue-950 to-gray-800";
  } else if (hour >= 6 && hour < 12) {
    greeting = "Bom Dia";
    background = "from-yellow-400 to-orange-700";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Boa Tarde";
    background = " from-blue-400 to-indigo-800";
  } else if (hour >= 18 && hour <= 23) {
    greeting = "Boa Noite";
    background = "from-blue-950 to-gray-800";
  }
  return (
    <>
      <section
        className={`flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-bl ${background}`}
      >
        <p className="text-9xl">{date}</p>
        <p className="text-5xl">{greeting}</p>
      </section>
    </>
  );
};

GreetingCondicional.displayName = "GreetingCondicional";

export default GreetingCondicional;
