import { useState, useRef } from 'react';

function Form() {
  const [userinput, setuserinput] = useState('');
  let inputBox = useRef();
  const handelonsubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${userinput}`);
    setuserinput('');

    inputBox.current.focus();
  };
  return (
    <>
      <div>
        <form action="#" method="post" onSubmit={handelonsubmit}>
          <label htmlFor="#">User Name : </label>
          <input
            ref={inputBox}
            type="text"
            value={userinput}
            onChange={(e) => {
              setuserinput(e.target.value);
            }}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
