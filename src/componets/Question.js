import React, { Fragment, useState } from 'react';

const Question = () => {

    // state
    const [quantity, setQuantiy] = useState(0);
    const [error, setError] = useState(false);
   // function

    const setBudget = e => {
      setQuantiy(parseInt(e.target.value));
    }

    const addBudget = e => {
      e.preventDefault();
      console.log(quantity)
    }

    return(
      <Fragment>
        <h2>Coloca tu presupuesto</h2>
        <form
          onSubmit = {addBudget}
        >
          <input
            type="number"
            className="u-full-width" 
            placeholder="coloca tu presupuesto"
            onChange={setBudget}
          />

          <input 
            type="submit" 
            className="button-primary u-full-width"
            value="Definir tu presupuesto"
          />
        </form>
      </Fragment>
    );
}

export default Question;