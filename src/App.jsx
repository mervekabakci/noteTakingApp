
import { useRef, useState } from 'react';
import './App.css';
import DialogApp from './DialogApp';

export default function App() {
  const [count, setCount] = useState(0);
  const otherCount = useRef(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleOtherClick() {
    if (otherCount.current >= 10) {
      alert('Çok tıkladın yeter');
      return;
    }
  

    otherCount.current++;
    console.log(otherCount.current);
  
  }
  return(
    <>
  
      <DialogApp />
    </>
  )
}

