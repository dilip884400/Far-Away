import {useState} from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "purple" }}
              onClick={() => step > 1 && setStep((step) => step - 1)}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "purple" }}
              onClick={() =>
                step < messages.length && setStep((step) => step + 1)
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}