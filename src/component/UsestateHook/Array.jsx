import { useState } from 'react';

function Array() {
  const [laptopname, setlaptopname] = useState(['acer', 'mac', 'notebook', 'aspria']);

  const addperson = () => {
    setlaptopname([...laptopname, 'hp']);
  };

  const remove = () => {
    setlaptopname((prev) => prev.slice(0, -1));
  };

  const removespecific = () => {
    setlaptopname(laptopname.filter((currEle) => currEle !== 'acer'));
  };

  const update = () => {
    setlaptopname(laptopname.map((currEle) => (currEle === 'acer' ? 'acer nitro' : currEle)));
  };

  return (
    <>
      {laptopname.map((curEle) => (
        <li key={Math.random()}>{curEle}</li>
      ))}

      <button onClick={addperson}>Add items </button>
      <button onClick={remove}>Remove items </button>
      <button onClick={removespecific}>remove specific</button>
      <button onClick={update}>Update specific</button>
    </>
  );
}

export default Array;
