import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { GlobalStoreContext } from "../../App";
import style from "./Completed.module.css";

function Completed() {
  const [state, dispatch] = useContext(GlobalStoreContext);
  return (
    <div className={style.wrapper}>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='130'
          height='150'
          color='gray'
          className='bi bi-check-circle'
          viewBox='0 0 16 16'
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
        </svg>
      </div>
      <div className={style.text}>Book added successfully</div>
      <Button
        onClick={() => dispatch({ type: "clearStore" })}
        variant='secondary'
        className={style.buttonCompleted}
      >
        Add another book
      </Button>
    </div>
  );
}

export default Completed;
