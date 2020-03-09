import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ addNewExpense }) => {
  // state
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  // functions

  const addExpense = e => {
    e.preventDefault();

    console.log(quantity);
    if (quantity < 1 || isNaN(quantity) || name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    const expense = {
      name,
      quantity,
      id: shortid.generate()
    };

    addNewExpense(expense);
    setQuantity(0);
    setName("");
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error msg="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Form.propTypes = {
  addNewExpense: PropTypes.func.isRequired
};

export default Form;
