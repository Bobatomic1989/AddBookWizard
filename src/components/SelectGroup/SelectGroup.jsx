import { Button, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

function SelectGroup({ propgroups, onSelectGroup, shouldAdd, onNewSelected }) {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <div>
      <Row className='no-gutters'>
        {propgroups.map((group, index) => {
          return (
            <Col xs={4} key={index}>
              <Button
                id={index}
                variant='outline-secondary'
                className='w-100 my-2'
                active={index === activeIndex ? true : false}
                onClick={(event) => {
                  const index = event.target.id;
                  setActiveIndex(Number(index));
                  onSelectGroup(propgroups[index]);
                }}
              >
                {group.name}
              </Button>
            </Col>
          );
        })}
        {shouldAdd ? (
          <Col xs={4}>
            <Button
              variant='outline-secondary'
              className='w-100 my-2'
              active={-1 === activeIndex ? true : false}
              onClick={() => {
                setActiveIndex(-1);
                onNewSelected();
              }}
            >
              Add new
            </Button>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </div>
  );
}

export default SelectGroup;
