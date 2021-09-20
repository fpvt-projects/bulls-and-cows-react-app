import "./style.css";
import { useState, useEffect } from "react";

//GENERATE HIDDEN NUMBER
const hiddenNumber = () => {
  const generateHiddenNumber = Math.floor(Math.random() * 9000 + 1000);
  if (checkHiddenUnique(generateHiddenNumber)) {
    return generateHiddenNumber;
  } else {
    return hiddenNumber;
  }
};

//CHECK IF HIDDEN NUMBER IS UNIQUE
const checkHiddenUnique = (givenNumber) => {
  return !/(.).*?\1/.test(givenNumber);
};

//COMMENT
const testInput = (hiddenNumber, inputData) => {
  let bull = 0;
  let cow = 0;
  for (let i = 0; i < hiddenNumber.length; i++) {
    if (
      inputData.includes(hiddenNumber[i]) &&
      hiddenNumber[i] === inputData[i]
    ) {
      bull++;

      if (bull === 4) {
        return alert("We Got a Winner!");
      }
    } else if (inputData.includes(hiddenNumber[i])) {
      cow++;
    }
  }
  return {
    inputData: inputData,
    bull: bull,
    cow: cow,
  };
};

function App() {
  useEffect(() => {
    setgenerated(hiddenNumber());
  }, []);

  const [generatedNumber, setgenerated] = useState(0);
  const [checkBull, setcheckBull] = useState(0);
  const [checkCow, setcheckCow] = useState(0);
  const [inputData, setData] = useState("");
  const [historyInput, sethistoryInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData === "") {
      return alert("Number Hoy!");
    } else if (inputData.length < 4) {
      return alert("Kulang Number Hoy!");
    }

    const testresult = testInput(generatedNumber.toString(), inputData);
    setcheckBull(testresult.bull);
    setcheckCow(testresult.cow);
    // const string = generatedNumber.toString()
    // for(let i = 0; i < string.length; i++) {
    //   if (inputData.includes(string[i]) && string[i] === inputData[i]) {
    //     setcheckBull((bull) => bull += 1)
    //   } else if (inputData.includes(string[i])) {
    //     setcheckCow(cow => cow += 1)
    //   }
    // }
    if (historyInput.length === 0) {
      sethistoryInput([
        testresult,
        //   {
        //   inputData:inputData, bull: checkBull, cow: checkCow
        // }
      ]);
    } else {
      sethistoryInput((history) => [
        ...history,
        testresult,
        // {inputData:inputData, bull: checkBull, cow: checkCow}
      ]);
    }
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };

  //JSX
  return (
    <div className='page-wrapper'>
      <div className='game-wrapper'>
        <div className='header-wrapper'>
          <h1>Bulls & Cows Game!</h1>
          <p></p>
        </div>
        <div className='input-wrapper'>
          <form action=''>
            <input type='text' required maxLength='4' onChange={handleInput} />
            <button onClick={handleSubmit}>Guess!</button>
          </form>
        </div>
        <div className='display-wrapper'>
          <div className='display-result'>
            <h3>
              Bulls:{checkBull} Cows:{checkCow}
            </h3>
          </div>
          <div className='display-input'>
            <ul>
              {historyInput.map((history, index) => {
                return (
                  <li key={index}>
                    {history.inputData}
                    {/* {history.bull} {history.cow} */}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
export { hiddenNumber, checkHiddenUnique, testInput };
