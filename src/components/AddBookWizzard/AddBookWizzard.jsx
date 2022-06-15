import React, { useContext } from "react";
import NavigationStep from "../NavigationStep/NavigationStep";
import GenreSelect from "../GenreSelect/GenreSelect";
import SubgenreSelect from "../SubgenreSelect/SubgenreSelect";
import AddSubGenre from "../AddSubGenre/AddSubGenre";
import Information from "../Information/Information";
import Completed from "../Completed/Completed";
import { Col, Row, Tab } from "react-bootstrap";
import { GlobalStoreContext } from "../../App";

function AddBookWizzard() {
  const [state, dispatch] = useContext(GlobalStoreContext);
  function renderAdditionalSteps() {
    if (state.tabKey === "1" || state.tabKey === "2") {
      return (
        <Col>
          <NavigationStep index={"..."}></NavigationStep>
        </Col>
      );
    } else {
      if (state.isNewSubgenre) {
        return (
          <>
            <Col>
              <NavigationStep
                active={state.tabKey === "3" ? true : false}
                index={3}
                title={"Add new subgenre"}
              ></NavigationStep>
            </Col>
            <Col>
              <NavigationStep
                active={state.tabKey === "4" ? true : false}
                index={4}
                title={"Information"}
              ></NavigationStep>
            </Col>
          </>
        );
      } else {
        return (
          <Col>
            <NavigationStep
              active={state.tabKey === "4" ? true : false}
              index={3}
              title={"Information"}
            ></NavigationStep>
          </Col>
        );
      }
    }
  }
  return (
    <div>
      <div className='border rounded border-secondary p-2 m-2'>
        {!state.isCompleted ? (
          <>
            <p>Add book - New Book</p>
            <Tab.Container
              id='left-tabs-example'
              activeKey={state.tabKey}
              defaultActiveKey='1'
            >
              <Row>
                <Col>
                  <NavigationStep
                    active={state.tabKey === "1" ? true : false}
                    index={1}
                    title={"Genre"}
                  ></NavigationStep>
                </Col>
                <Col>
                  <NavigationStep
                    active={state.tabKey === "2" ? true : false}
                    index={2}
                    title={"Subgenre"}
                  ></NavigationStep>
                </Col>
                {renderAdditionalSteps()}
              </Row>
              <Row>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey='1'>
                      <GenreSelect></GenreSelect>
                    </Tab.Pane>
                    <Tab.Pane eventKey='2'>
                      <SubgenreSelect></SubgenreSelect>
                    </Tab.Pane>
                    <Tab.Pane eventKey='3'>
                      <AddSubGenre />
                    </Tab.Pane>
                    <Tab.Pane eventKey='4'>
                      <Information />
                    </Tab.Pane>
                    <Tab.Pane eventKey='5'>
                      <Completed />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <Row className='no-gutters justify-content-end'></Row>
          </>
        ) : (
          <>
            <Completed />
          </>
        )}
      </div>
    </div>
  );
}

export default AddBookWizzard;
