export const initialState = {
  selectedGenre: null,
  selectedSubgenre: null,
  subGenres: [],
  isNewSubgenre: false,
  tabKey: "1",
  newSubgenre: null,
  info: null,
  isCompleted: false,
};

export default function reducer(state, action) {
  switch (action.type) {
    case "updateGenre":
      return {
        ...state,
        selectedGenre: action.value,
      };
    case "updateSubGenre":
      return {
        ...state,
        selectedSubgenre: action.value,
      };
    case "subGenres":
      return {
        ...state,
        subGenres: action.value,
      };
    case "setIsNewSubGenre":
      return {
        ...state,
        isNewSubgenre: action.value,
      };

    case "setTabKey":
      return {
        ...state,
        tabKey: action.value,
      };
    case "setIsCompleted":
      return {
        ...state,
        isCompleted: action.value,
      };
    case "clearStore":
      return initialState;
    default:
      return state;
  }
}
