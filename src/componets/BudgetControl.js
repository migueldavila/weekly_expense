import React, { Fragment } from 'react';

const BudgetControl = ({budgetMain, budgetRemain}) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ {budgetMain}
      </div>
      <div className="alert">
        Restante: $ {budgetRemain}
      </div>
    </Fragment>
  );
};

export default BudgetControl;