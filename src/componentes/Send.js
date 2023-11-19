import React, { Fragment, useState } from "react";
import Select from "react-select";

const previOption = [
  { label: "Si", value: true },
  { label: "No", value: false },
];

const Send = () => {
  const [email, setEmail] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarPrevisual, setMostrarPrevisual] = useState(false);

  const previsual = (
    <div className=" divide-y-1 divide-gray-500 dark:divide-gray-700 w-80 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="  first-letter:mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Asunto:{asunto}
      </h5>
      <p className="  first-letter:mt-3 mb-10 font-normal text-gray-500 dark:text-gray-400">
       Mensaje: {mensaje}
      </p>
      <div className="mt-5">
        <button className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-40 bg-[#60B478] rounded-lg h-10 border border-solid border-gray-400 text-center text-white font-bold shadow-lg">
          <span className="shadow-sm">Enviar</span>
        </button>
      </div>
    </div>
  );

  const handleSelectChange = (selectedOption) => {
    if (selectedOption && selectedOption.value === true) {
      setMostrarPrevisual(true);
    } else {
      setMostrarPrevisual(false);
    }
  };

  return (
    <Fragment>
      <div className="bg-gray-800 justify-center min-h-screen py-10">
        <div className="mx-auto flex container-center">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 py-8 px-12">
              <h2 className="text-3xl mb-2">Enviar correo</h2>
              <form action="#">
                <div className="mt-3">
                  <h1 className="text-start font-bold">Para</h1>

                  <input
                    className="border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover:"
                    placeholder="Seleccione base de datos"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                  />
                </div>

                <div className="mt-3">
                  <h1 className="text-start font-bold">Asunto</h1>
                  <input
                    className="border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover:"
                    placeholder="Ingrese asunto"
                    onChange={(e) => setAsunto(e.target.value)}
                    value={asunto}
                  />
                </div>
                <div className="mt-3">
                  <h1 className="text-start font-bold">Correo</h1>
                  <input
                    className="border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover:"
                    placeholder="Example@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mt-3">
                  <h1 className="text-start font-bold">Previsualizar</h1>
                  <Select
                    className="border-radius-sm"
                    options={previOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="mt-3 ">
                  <h1 className="text-start font-bold">Mensaje</h1>
                  <textarea
                    className="h-20 border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm"
                    onChange={(e) => setMensaje(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <button className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-full bg-[#60B478] rounded-lg h-10 border border-solid border-gray-400 text-center text-white font-bold shadow-lg">
                    <span className="shadow-sm">Enviar</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2  mt-40">
              {mostrarPrevisual && previsual}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Send;
