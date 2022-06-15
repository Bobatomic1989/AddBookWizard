import React, { useContext, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { GlobalStoreContext } from "../../App";

function AddSubGenre() {
  const [state, dispatch] = useContext(GlobalStoreContext);
  const [name, setName] = useState("");
  const [isDescription, setIsDescription] = useState(false);

  const nextStep = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      dispatch({
        type: "updateSubGenre",
        value: { name: name, isDescriptionRequired: isDescription },
      });
      dispatch({
        type: "setTabKey",
        value: "4",
      });
    }
  };
  const backStep = () => {
    dispatch({
      type: "setTabKey",
      value: "2",
    });
  };

  return (
    <div>
      <Form onSubmit={nextStep}>
        <Form.Group className='mb-4'>
          <Form.Control
            required
            className='form-control'
            id='validationTooltip01'
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder='Subgenre name'
          />
        </Form.Group>
        <Form.Check>
          <Form.Check
            feedbackType='invalid'
            value={isDescription}
            onChange={(e) => {
              setIsDescription(e.target.checked);
            }}
          />
          <Form.Check.Label>
            Description is required for this subgenre
          </Form.Check.Label>
        </Form.Check>
        <Row className='no-gutters justify-content-end'>
          <Col sm={2}>
            <Button
              variant='outline-secondary'
              className='w-100'
              onClick={backStep}
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
              Back
            </Button>
          </Col>
          <Col sm={2}>
            <Button type='submit' variant='secondary' className='w-100'>
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddSubGenre;
