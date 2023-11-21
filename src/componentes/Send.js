import React, { Fragment, useState } from "react";
import Select from "react-select";

const Previsualizacion = ({ asunto, mensaje, enviarCorreo }) => (
  <div className="divide-y-5 divide-gray-500 dark:divide-gray-700 w-80 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h5 className="first-letter:mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
      {asunto}
    </h5>
    <hr className="w-full h-1 mx-auto bg-gray-100 border-0 rounded mb-3 dark:bg-gray-700" />
    <p className="first-letter:mt-10 mb-5 font-normal text-gray-500 dark:text-gray-400">
      {mensaje}
    </p>
    <div className="mt-3">
      <button
        className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-40 bg-[#60B478] rounded-lg h-10 border border-solid border-gray-400 text-center text-white font-bold shadow-lg"
        onClick={enviarCorreo}
      >
        <span className="shadow-sm">Enviar</span>
      </button>
    </div>
  </div>
);

const Send = () => {
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarPrevisual, setMostrarPrevisual] = useState(false);
  const [selectedBodegas, setSelectedBodegas] = useState([]);
  const [error, setError] = useState("");

  const bodegas = [
    { id: 1, nombre: "Almacén Central" },
    { id: 2, nombre: "Depósito Principal" },
    { id: 3, nombre: "Almacén de Distribución" },
    { id: 4, nombre: "Depósito de Inventarios" },
    { id: 5, nombre: "Almacén de Electrónicos" },
    { id: 6, nombre: "Almacén de Herramientas" },
    { id: 7, nombre: "Deposito de ropas" },
  ];

  const bodegasOptions = bodegas.map((bodega) => ({
    value: bodega.id,
    label: bodega.nombre,
  }));

  const handleBodegasChange = (selectedOptions) => {
    setSelectedBodegas(selectedOptions);
  };

  const handleSelectChange = (selectedOption) => {
    setMostrarPrevisual(selectedOption && selectedOption.value === true);
  };

  const enviarCorreo = () => {
    // Validar campos antes de enviar
    if (!email || !asunto || !mensaje || selectedBodegas.length === 0) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Lógica para enviar el correo
    console.log("Correo enviado");

    // Reiniciar el formulario después de enviar
    window.alert("Correo enviado con éxito");
    window.location.reload();
  
  };

  return (
    <Fragment>
      <div className="bg-gray-800 justify-center min-h-screen py-10">
        <div className="mx-auto flex container-center">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 py-8 px-12">
              <h2 className="text-3xl mb-2">Enviar correo</h2>
              <form action="#">
                <div className={`mt-3 ${error && "border-red-500"}`}>
                  <h1 className="text-start font-bold">Para</h1>
                  <Select
                    className={`border-radius-sm ${error && "border-red-500"}`}
                    options={bodegasOptions}
                    isMulti
                    onChange={handleBodegasChange}
                    value={selectedBodegas}
                  />
                </div>
                <div className={`mt-3 ${error && "border-red-500"}`}>
                  <h1 className="text-start font-bold">Asunto</h1>
                  <input
                    className={`border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover: ${
                      error && "border-red-500"
                    }`}
                    placeholder="Ingrese asunto"
                    onChange={(e) => setAsunto(e.target.value)}
                    value={asunto}
                  />
                </div>
                <div className={`mt-3 ${error && "border-red-500"}`}>
                  <h1 className="text-start font-bold">Correo</h1>
                  <input
                    className={`border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover: ${
                      error && "border-red-500"
                    }`}
                    placeholder="Example@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className={`mt-3 ${error && "border-red-500"}`}>
                  <h1 className="text-start font-bold">Previsualizar</h1>
                  <Select
                    className={`border-radius-sm ${error && "border-red-500"}`}
                    options={[
                      { label: "Si", value: true },
                      { label: "No", value: false },
                    ]}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className={`mt-3 ${error && "border-red-500"}`}>
                  <h1 className="text-start font-bold">Mensaje</h1>
                  <textarea
                    className={`h-20 border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm ${
                      error && "border-red-500"
                    }`}
                    onChange={(e) => setMensaje(e.target.value)}
                  />
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="mt-5">
                  <button
                    className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-full bg-[#60B478] rounded-lg h-10 border border-solid border-gray-400 text-center text-white font-bold shadow-lg"
                    onClick={enviarCorreo}
                  >
                    <span className="shadow-sm">Enviar</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2  mt-40">
              {mostrarPrevisual && (
                <Previsualizacion
                  asunto={asunto}
                  mensaje={mensaje}
                  enviarCorreo={enviarCorreo}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Send;
