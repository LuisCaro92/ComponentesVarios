import React, { Fragment, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";


//Mensaje de previsualizado transformado en una constante.
const Previsualizacion = ({ asunto, mensaje, enviarCorreo }) => (
  <div className="divide-y-5 divide-gray-500 dark:divide-gray-700 w-80 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ms:ml-60">
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
    //Estados.
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarPrevisual, setMostrarPrevisual] = useState(false);
  const [selectedBodegas, setSelectedBodegas] = useState([]);
  const [error, setError] = useState("");

  //Base de datos JSON de prueba.
  const bodegas = [
    { id: 1, nombre: "Almacén Central" },
    { id: 2, nombre: "Depósito Principal" },
    { id: 3, nombre: "Almacén de Distribución" },
    { id: 4, nombre: "Depósito de Inventarios" },
    { id: 5, nombre: "Almacén de Electrónicos" },
    { id: 6, nombre: "Almacén de Herramientas" },
    { id: 7, nombre: "Deposito de ropas" },
  ];
 
  //Funcion para leer base de datos.
  const bodegasOptions = bodegas.map((bodega) => ({
    value: bodega.id,
    label: bodega.nombre,
  }));

 
  //Seleccionar opcion de previsualizar mensaje.
  const handleSelectChange = (selectedOption) => {
    setMostrarPrevisual(selectedOption && selectedOption.value === true);
  };

  //Seleccionar más de un destinatario en base de datos
  const handleBodegasChange = (selectedOptions) => {
    setSelectedBodegas(selectedOptions);
  };
  
  const validateEmail = (email) => {
    // Validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const enviarCorreo = () => {
    // Validar campos antes de enviar
    if (!email) {
      setError("Por favor, ingrese su correo electrónico.");
    } else if (!validateEmail(email)) {
      setError("Por favor, ingrese un correo electrónico válido.");
    } else if (!asunto) {
      setError("Por favor, complete el campo 'Asunto'.");
    } else if (!mensaje) {
      setError("Por favor, complete el campo 'Mensaje'.");
    } else if (selectedBodegas.length === 0) {
      setError("Por favor, seleccione al menos una opción en 'Para'.");
    } else {
      // Alerta integrada con sweetalert cuando el mensaje es exitoso.
      Swal.fire({
        title: "Mensaje enviado con exito!",
        text: "Haz clic en el botón!",
        icon: "success"
      });

      //Reiniciar formulario
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    };
  };

  return (
    <Fragment>
      <div className="bg-gray-800 justify-center min-h-screen py-10">
        <div className="mx-auto flex container-center">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 py-8 px-12">
              <h2 className="text-3xl mb-2">Enviar correo</h2>
              <form action="#">
                <div className={`mt-3 ${!selectedBodegas.length && error ? "border-red-500":""}`}>
                  <h1 className="text-start font-bold">Para</h1>
                  <Select
                    className={`border-radius-sm ${!selectedBodegas.length && error ? "border-red-500":""}`}
                    options={bodegasOptions}
                    isMulti
                    onChange={handleBodegasChange}
                    value={selectedBodegas}
                  />
                </div>
                <div className={`mt-3 ${!asunto && error ? 'border-red-500' : ''}`}>
                  <h1 className="text-start font-bold">Asunto</h1>
                  <input
                    className={`border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover: ${!asunto && error ? 'border-red-500' : ''}`}
                    placeholder="Ingrese asunto"
                    onChange={(e) => setAsunto(e.target.value)}
                    value={asunto}
                  />
                </div>
                <div className={`mt-3 ${(!email || !validateEmail(email)) && error ? 'border-red-500' : ''}`}>
                  <h1 className="text-start font-bold">Correo</h1>
                  <input
                    className={`border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover: ${(!email || !validateEmail(email)) && error ? 'border-red-500' : ''}`}
                    placeholder="Example@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className={`mt-3 ${!mostrarPrevisual && error ? 'border-red-500' : ''}`}>
                  <h1 className="text-start font-bold">Previsualizar</h1>
                  <Select
                    className={`border-radius-sm ${!mostrarPrevisual && error ? 'border-red-500' : ''}`}
                    options={[
                      { label: "Si", value: true },
                      { label: "No", value: false },
                    ]}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className={`mt-3 ${!mensaje && error ? 'border-red-500' : ''}`}>
                  <h1 className="text-start font-bold">Mensaje</h1>
                  <textarea
                    className={`h-20 border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm ${!mensaje && error ? 'border-red-500' : ''}`}
                    onChange={(e) => setMensaje(e.target.value)}
                  />
                </div>
                
              {error && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-800 dark:text-red-400" role="alert">
                  <span className="font-medium">{error}</span>
                </div>
              )}
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
