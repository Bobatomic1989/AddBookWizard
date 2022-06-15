import React, { useContext } from "react";
import SelectGroup from "../SelectGroup/SelectGroup";
import Buttons from "../Buttons/Buttons";
import { GlobalStoreContext } from "../../App";

function SubgenreSelect() {
  const [state, dispatch] = useContext(GlobalStoreContext);
  const onSelectSubgenre = (item) => {
    dispatch({
      type: "setIsNewSubGenre",
      value: false,
    });
    dispatch({
      type: "updateSubGenre",
      value: item,
    });
  };
  const onNewSelected = () => {
    dispatch({
      type: "setIsNewSubGenre",
      value: true,
    });
  };
  const nextStep = () => {
    if (state.isNewSubgenre) {
      dispatch({
        type: "setTabKey",
        value: "3",
      });
    } else {
      dispatch({
        type: "setTabKey",
        value: "4",
      });
    }
  };
  const backStep = () => {
    dispatch({
      type: "setTabKey",
      value: "1",
    });
  };

  return (
    <div>
      <SelectGroup
        shouldAdd={true}
        onNewSelected={onNewSelected}
        propgroups={state.subGenres}
        onSelectGroup={onSelectSubgenre}
      ></SelectGroup>
      <Buttons
        nextDisabled={
          state.selectedSubgenre || state.isNewSubgenre ? false : true
        }
        backDisabled={false}
        backAction={backStep}
        nextAction={nextStep}
        titleNext={"Next"}
        titleBack={"Back"}
      />
    </div>
  );
}

export default SubgenreSelect;
