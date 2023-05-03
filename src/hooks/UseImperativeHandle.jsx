import { useRef } from "react";
import Modals from "../utils/Modal";

/* 
  useImperativeHandle: is a 
  React Hook that allows a functional component 
  to expose functions to its parent component. 
  It is typically used when a child component 
  needs to expose a specific functionality to 
  its parent, such as triggering an animation 
  or providing a way to reset its state. 

  */

const UseImperativeHandle = () => {
  const modalRef = useRef();
  const handleModal = () => {
    modalRef.current.openModal();
  };
  console.log("parent rendered");
  return (
    <main className="App">
      <p>Parent Component</p>
      <Modals ref={modalRef} />
      <button onClick={handleModal}>Open</button>
    </main>
  );
};

export default UseImperativeHandle;
