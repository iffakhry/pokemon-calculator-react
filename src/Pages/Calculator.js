import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InputNumber = ({id, num, onChange}) => {
    return(
        <input type="number" id={id} onChange={onChange} value={num} />
    );
};

export const operatorSign = [
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "*", value: "*" },
    { label: "/", value: "/" },
  ];

const Operator = ({ selectionID, options, emotion, onSelectionChange }) => {

    return (
      <select
        className="m-2"
        id={selectionID}
        value={emotion}
        onChange={onSelectionChange}
      >
        {options?.map((e, i) => (
          <option key={i} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>
    );
  };

const Calculator = () => {
    const [operation, setOperator] = useState(operatorSign[0].value);
    const [dataNum1, setDataNum1] = useState(0);
    const [dataNum2, setDataNum2] = useState(0);
    const [hasil, setHasil] = useState(0);
    
    useEffect(() =>{
        let hasilOp = 0;
        if (operation === "+") {
            hasilOp = Number(dataNum1) + Number(dataNum2);
            setHasil(hasilOp);
        }else if (operation === "-") {
            hasilOp = Number(dataNum1) - Number(dataNum2);
            setHasil(hasilOp);
        }
        else if (operation === "*") {
            hasilOp = Number(dataNum1) * Number(dataNum2);
            setHasil(hasilOp);
        }else if(operation === "/"){
            hasilOp = Number(dataNum1) / Number(dataNum2);
            setHasil(hasilOp);
        }

        console.log("hasil ",hasilOp);
        
      
    }, [dataNum1, dataNum2, operation])

    const handleInputChange1=(e)=>{
        if (e.target) {
            setDataNum1(e.target.value);
            // setHasil(hasilOp) 
            console.log(e.target.value);
        }
    };

    const handleInputChange2=(e)=>{
        if (e.target) {
            setDataNum2(e.target.value);
            console.log(e.target.value);
        }
    };

    const handleSelectChange=(e)=>{
        if (e.target) {
            setOperator(e.target.value);
            console.log(e.target.value);
        }
    };

    const handleHasil=(e)=>{
        // if (e.target) {
        //     setOperator(e.target.value);
        //     console.log(e.target.value);
        // }
    };

    return (
        <div className="container">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
        </ul>
        <InputNumber id="number1" num={dataNum1} onChange={handleInputChange1} />
        <Operator
            selectionID="emotion"
            options={operatorSign}
            value={operation}
            onSelectionChange={handleSelectChange}
        />
        <InputNumber id="number2" num={dataNum2} onChange={handleInputChange2} />
        <label htmlFor="samadengan" className="m-1">=</label>
        <InputNumber id="hasil" num={hasil} onChange={handleHasil} />
        </div>

    );
};

export default Calculator;