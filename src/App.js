import React, { useState } from 'react';

import Question from './componets/Question';
import Form from './componets/Form';
import List from './componets/List';
import BudgetControl from './componets/BudgetControl'

function App() {
  // state

  const [budgetMain, setBudgetMain] = useState(0);
  const [budgetRemain, setBudgetRemain] = useState(0);
  const [showquestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
// agregar gasto nuevo

  const addNewExpense = expense => {
    console.log(expense);
    setExpenses([
      ...expenses,
      expense
    ]);

  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            showquestion ?
            (
              <Question 
                setBudgetMain={setBudgetMain}
                setBudgetRemain={setBudgetRemain}
                setShowQuestion={setShowQuestion}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Form 
                    addNewExpense={addNewExpense}
                  />;
                </div>
                <div className="one-half column">
                  <List 
                    expenses={expenses}
                  />
                  <BudgetControl 
                    budgetMain={budgetMain}
                    budgetRemain={budgetRemain}

                  />
                </div>
              </div>
            )
          }
          
          
        </div>
      </header>
      
    </div>
  );
}

export default App;
