import React, { useState } from 'react';

import Question from './componets/Question';
import Form from './componets/Form';
function App() {
  // state

  const [budgetMain, setBudgetMain] = useState(0);
  const [budgetRemain, setBudgetRemain] = useState(0);
  const [showquestion, setShowQuestion] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Question 
            setBudgetMain={setBudgetMain}
            setBudgetRemain={setBudgetRemain}
            setShowQuestion={setShowQuestion}
          />
          <div className="row">
            <div className="one-half column">
              <Form />;
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
