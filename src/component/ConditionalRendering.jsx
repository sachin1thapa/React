// if (condition) operation ||  && operator --> (condition && operation);
// ternary operator

function ConditionalRendering() {
  const laptop = ['acer', 'nitro', 'hp ', 'del', 'swift'];
  return (
    <>
      {laptop.length >= 3 && <h1> you have the {laptop.length} items in the cart </h1>}
      <ul>
        items:
        {laptop.map((CurEle, index) => (
          <li key={index}>{CurEle}</li>
        ))}
      </ul>
    </>
  );
}

export default ConditionalRendering;
