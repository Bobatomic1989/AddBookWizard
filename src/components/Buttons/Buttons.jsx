import React from "react";
import { Col, Button, Row } from "react-bootstrap";

function Buttons({
  titleNext,
  titleBack,
  nextAction,
  backAction,
  backDisabled,
  nextDisabled,
}) {
  return (
    <div>
      <Row className='no-gutters justify-content-end'>
        <Col sm={2}>
          <Button
            disabled={backDisabled}
            variant='outline-secondary'
            className='w-100'
            onClick={(e) => {
              e.preventDefault();
              if (backAction) {
                backAction();
              }
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              className='bi bi-chevron-left'
              viewBox='0 0 16 16'
            >
              <path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' />
            </svg>
            {titleBack}
          </Button>
        </Col>
        <Col sm={2}>
          <Button
            disabled={nextDisabled}
            variant='secondary'
            className='w-100'
            onClick={(e) => {
              e.preventDefault();
              if (nextAction) {
                nextAction();
              }
            }}
          >
            {titleNext}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Buttons;
