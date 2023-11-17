import { Fragment } from "react";
import Dropdown from "./Dropdown";

const Send = () => {
  return (
    <Fragment>
      <div className="bg-gray-800  justify-center min-h-screen py-10">
        <div className="mx-auto  flex container-center ">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            
            <div className="w-full lg:w-1/2 py-8 px-12">
              <h2 className="text-3xl mb-2">Enviar correo</h2>
              
              <form action="#">
                <div className=" mt-3">
                    <h1 className="text-start font-bold">Para</h1>
                  <input
                    type="text"
                    placeholder="Seleccione base de datos"
                    className="border border-gray-200 py-1 px-2 rounded-lg w-full shadow-sm hover:"
                  />
                </div>
                <div className=" mt-3">
                <h1 className="text-start font-bold">Correo</h1>
                  <input
                    type="text"
                    placeholder="Ingrese correo"
                    className="border border-gray-200 py-1 px-2 rounded-lg w-full shadow-sm hover:"
                  />
                </div>
                <div className=" mt-3">
                <h1 className="text-start font-bold">Asunto</h1>
                  <input
                    type="text"
                    placeholder="Ingrese asunto"
                    className="border border-gray-200 py-1 px-2 rounded-lg w-full shadow-sm hover:"
                  />
                </div>
                <div className=" mt-3">
                    <h1 className="text-start font-bold">Previsualizar</h1>
                <Dropdown/>
                </div>
                <div className=" mt-3">
                <h1 className="text-start font-bold">Mensaje</h1>
                  <input
                    type="text"
                    className="border border-gray-200 py-1 px-2 rounded-lg w-full h-20 shadow-sm hover:"
                  />
                </div>
               

                <div className="mt-5">
                  <button className="active:scale-[.98] actiove:duration-75 transition-all hover:scale-[1.02] ease-in-out w-full  bg-[#60B478] rounded-xl h-8 border border-solid border-gray-400 text-center text-white font-bold shadow-lg">
                    <span className="shadow-sm">Enviar</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <h1 className="text-white text-3xl">Welcome</h1>
              <div>
                <p className="mt-5 mb-20 pb-40 text-dark">
                 Acá va el previsuaizador
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
