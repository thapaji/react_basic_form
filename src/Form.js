import React,{useState} from "react";

const Form = () => {
    const [str,setStr] = useState("");
    const handleOnChange=(e)=>{
        setStr(e.target.value)
    }
  return (
    <div>
        {str}
      <form action="">
        <input type="text" onChange={handleOnChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
