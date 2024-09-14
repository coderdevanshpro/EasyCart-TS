
import { ChangeEvent } from 'react';
import { MouseEvent } from 'react';
import ProductDetail from './ProductDetail.tsx'
import Button from './Button.tsx';


function App() {
  function handleClick(event:MouseEvent<HTMLButtonElement>)
  {
    console.log(event.target);
  }
  function handleChange(event:ChangeEvent<HTMLInputElement>)
  {
    console.log(event.target.value);
  }

  return (
    <>
    <Button>SignUp</Button>
    <button onClick={handleClick}></button>
    <input onChange={handleChange}></input>
      <ProductDetail title="iPhone" description="hello world" price={99}></ProductDetail>
    </>
  )
}

export default App
