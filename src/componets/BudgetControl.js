import React, { Fragment } from "react";
import { checkBudget } from "../helpers";
import PropTypes from "prop-types";

const BudgetControl = ({ budgetMain, budgetRemain }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {budgetMain}</div>
      <div className={checkBudget(budgetMain, budgetRemain)}>
        Restante: $ {budgetRemain}
      </div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  budgetMain: PropTypes.number.isRequired,
  budgetRemain: PropTypes.number.isRequired
};

export default BudgetControl;
