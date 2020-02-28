import React, { Fragment, useState } from 'react';
import Error from './Error'
const Question = ({setBudgetMain, setBudgetRemain, setShowQuestion}) => {

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
      if(quantity < 1 || isNaN( quantity )){
        setError(true);
        return;
      }

      setError(false);
      setBudgetMain(quantity);
      setBudgetRemain(quantity);
      setShowQuestion(false);
    }

    return(
      <Fragment>
        <h2>Coloca tu presupuesto</h2>
        { error ? <Error msg="El presupuesto es Incorrecto" /> : '' }
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