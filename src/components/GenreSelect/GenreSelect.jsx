import React, { useContext } from "react";
import SelectGroup from "../SelectGroup/SelectGroup";
import { jsonGenres } from "../../index";
import Buttons from "../Buttons/Buttons";
import { GlobalStoreContext } from "../../App";

function GenreSelect() {
  const [state, dispatch] = useContext(GlobalStoreContext);
  const onGenreSelect = (item) => {
    dispatch({
      type: "updateGenre",
      value: item,
    });
    dispatch({
      type: "subGenres",
      value: item.subgenres,
    });
  };
  const nextStep = () => {
    if (state.selectedGenre) {
      dispatch({
        type: "setTabKey",
        value: "2",
      });
    }
  };

  return (
    <div>
      <SelectGroup
        propgroups={jsonGenres}
        onSelectGroup={onGenreSelect}
      ></SelectGroup>
      <Buttons
        nextDisabled={state.selectedGenre ? false : true}
        backDisabled={true}
        nextAction={nextStep}
        titleNext={"Next"}
        titleBack={"Back"}
      />
    </div>
  );
}

export default GenreSelect;
