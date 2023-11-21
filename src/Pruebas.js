
import React, { Fragment, useState } from "react";
import Select from "react-select";

const bodegas = [
  {
    "id": 1,
    "nombre": "Almacén Central"
  },
  {
    "id": 2,
    "nombre": "Depósito Principal"
  },
  // ... (otros datos)
];

const Pruebas = () => {
  const [selectedBodegas, setSelectedBodegas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleBodegasChange = (selectedOptions) => {
    setSelectedBodegas(selectedOptions);
  };

  const bodegasOptions = bodegas.map((bodega) => ({
    value: bodega.id,
    label: bodega.nombre
  }));

  return (
    <Fragment>
      {/* ... (resto de tu código) */}
      <div className="mt-3">
        <h1 className="text-start font-bold">Seleccionar Bodegas</h1>
        <Select
          className="border-radius-sm"
          options={bodegasOptions}
          isMulti
          onChange={handleBodegasChange}
          value={selectedBodegas}
        />
      </div>
      <div className="mt-3">
        <h1 className="text-start font-bold">Input</h1>
        <input
          className="border border-gray-200 py-2 px-2 rounded-sm w-full shadow-sm hover:"
          placeholder="Ingrese datos"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </div>
      {/* ... (resto de tu código) */}
    </Fragment>
  );
};

export default Pruebas;
