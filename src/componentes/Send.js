import React, { Fragment, useState } from "react";
import Select from "react-select";

const previOption = [
  { label: "Si", value: true },
  { label: "No", value: false },
];

const dataBase= {
    "bodegas": [
      {
        "id": 1,
        "nombre": "Bodega A"
      },
      {
        "id": 2,
        "nombre": "Bodega B"
      },
      {
        "id": 3,
        "nombre": "Bodega C"
      }
    ]
  }
const Send = () => {

  const InputField = ({ label, placeholder, type = "text", onChange }) => (
    <div className="mt-3">
      <h1 className="text-start font-bold">{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover:"
        onChange={onChange}
      />
    </div>
  );

  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAsuntoChange = (e) => {
    setAsunto(e.target.value);
  };

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
                  onChange={(e) => console.log(e.target.value)}
                />
                <InputField
                  label="Correo"
                  placeholder="Ingrese correo"
                  onChange={handleEmailChange}
                />
                <InputField
                 label="Asunto" 
                 placeholder="Ingrese asunto"
                 onChange={handleAsuntoChange}
                
                />
                <div className="mt-3">
                  <h1 className="text-start font-bold">Previsualizar</h1>
                  <Select
                    className="border-radius-sm"
                    options={previOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <InputField label="Mensaje" type="textarea" />
                <div className="mt-5">
                  <button className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-full bg-[#60B478] rounded-lg h-10 border border-solid border-gray-400 text-center text-white font-bold shadow-lg">
                    <span className="shadow-sm">Enviar</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <h1 className="text-white text-3xl">Welcome</h1>
              <div className="">
                <p className="mt-5 mb-20 pb-40 text-dark">
                  {email}
                  {asunto}
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
