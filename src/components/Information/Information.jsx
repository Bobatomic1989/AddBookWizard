import React, { useContext } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import style from "./Information.module.css";

import { GlobalStoreContext } from "../../App";

function Information() {
  const [state, dispatch] = useContext(GlobalStoreContext);
  const backStep = () => {
    if (state.isNewSubgenre) {
      dispatch({
        type: "setTabKey",
        value: "3",
      });
    } else {
      dispatch({
        type: "setTabKey",
        value: "2",
      });
    }
  };
  const nextStep = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      dispatch({
        type: "setIsCompleted",
        value: true,
      });
    }
  };
  return (
    <div>
      <Form onSubmit={nextStep}>
        <Form.Label htmlFor='basic-url'>Book title</Form.Label>
        <Form.Group className='mb-4' controlId='exampleForm.ControlInput1'>
          <Form.Control required type='text' placeholder='Book title' />
        </Form.Group>
        <Form.Label htmlFor='basic-url'>Author</Form.Label>
        <Form.Select>
          <option>Default select</option>
          <option>Arthur Hiller</option>
          <option>Israel Horovitz</option>
          <option>Irwin Winkler</option>
        </Form.Select>
        <br></br>
        <Form.Label htmlFor='basic-url'>ISBN</Form.Label>
        <Form.Group className='mb-4' controlId='exampleForm.ControlInput1'>
          <Form.Control required type='text' placeholder='ISBN' />
        </Form.Group>
        <Form.Label htmlFor='basic-url'>Publisher</Form.Label>
        <Form.Select>
          <option>Publisher</option>
          <option>HarperCollins</option>
          <option>Merriam-Webster Inc</option>
          <option>Warner Bros Global </option>
        </Form.Select>
        <br></br>
        <Form.Label htmlFor='basic-url'>Date Publisher</Form.Label>
        <Form.Group
          className='mb-2'
          size='sm'
          controlId='exampleForm.ControlInput1'
        >
          <Form.Control
            required
            type='text'
            className={style.inputDate}
            placeholder='DD/MM/YYYY'
          />
        </Form.Group>
        <Form.Label htmlFor='basic-url'>Number of pages</Form.Label>
        <Form.Group
          required
          className='mb-4'
          controlId='exampleForm.ControlInput1'
        >
          <Form.Control
            required
            className={style.inputNumber}
            type='text'
            placeholder='Number of pages'
          />
        </Form.Group>
        <Form.Label htmlFor='basic-url'>Format</Form.Label>
        <Form.Select className={style.inputDate}>
          <option>Format</option>
          <option>PDF</option>
          <option>Word</option>
        </Form.Select>
        <br></br>

        <Row className='no-gutters justify-content-end'>
          <Col>
            <Form.Label htmlFor='basic-url'>Edition</Form.Label>
            <Form.Group
              required
              className='mb-2'
              controlId='exampleForm.ControlInput1'
            >
              <Form.Control
                required
                type='text'
                className={style.inputEdition}
                placeholder='Edition'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label htmlFor='basic-url'>Edition Language</Form.Label>
            <Form.Select className={style.inputEdition}>
              <option>Edition Language</option>
              <option>Italian</option>
              <option>Serbian</option>
            </Form.Select>
          </Col>
          {state.selectedSubgenre &&
          state.selectedSubgenre.isDescriptionRequired ? (
            <>
              <Form.Label htmlFor='basic-url'>Description</Form.Label>
              <FloatingLabel
                controlId='floatingInput'
                label='Type the description'
                className='mb-4'
              >
                <Form.Control required type='text' placeholder='type' />
              </FloatingLabel>
            </>
          ) : (
            <></>
          )}
          <br></br>
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
        </Row>
      </Form>
    </div>
  );
}

export default Information;
