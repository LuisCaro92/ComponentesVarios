import React, { Fragment, useState } from "react";
import Select from "react-select";

const previOption = [
  { label: "Si", value: true },
  { label: "No", value: false },
];

const Send = () => {
  const InputField = ({
    label,
    placeholder,
    type = "text",
    onChange,
    value,
  }) => (
    <div className="mt-3">
      <h1 className="text-start font-bold">{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover:"
        onChange={onChange}
        value={value}
      />
    </div>
  );

  const [email, setEmail] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSelectChange = (selectedOption) => {
    console.log(selectedOption);
  };

  return (
    <Fragment>
      <div className="bg-gray-800 justify-center min-h-screen py-10">
        <div className="mx-auto flex container-center">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 py-8 px-12">
              <h2 className="text-3xl mb-2">Enviar correo</h2>
              <form action="#">
                <InputField
                  label="Para"
                  placeholder="Seleccione base de datos"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <InputField
                  label="Correo"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <InputField
                  label="Asunto"
                  placeholder="Ingrese asunto"
                  onChange={(e) => setAsunto(e.target.value)}
                  value={asunto}
                />
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
            <div className="w-full lg:w-1/2 flex flex-col mt-40">
              <div className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {asunto}
                </h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {mensaje}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Send;
