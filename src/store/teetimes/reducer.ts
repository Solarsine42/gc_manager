import {
  LOAD_TEETIMES_FAILURE,
  LOAD_TEETIMES_SUCCESS,
  LOAD_TEETIMES_PENDING,
  LOAD_TEETIME_FAILURE,
  LOAD_TEETIME_SUCCESS,
  LOAD_TEETIME_PENDING,
  ADD_TEETIME_FAILURE,
  ADD_TEETIME_SUCCESS,
  ADD_TEETIME_PENDING,
  DELETE_TEETIME_FAILURE,
  DELETE_TEETIME_SUCCESS,
  DELETE_TEETIME_PENDING,
  EDIT_TEETIME_FAILURE,
  EDIT_TEETIME_SUCCESS,
  EDIT_TEETIME_PENDING
} from "../constants";

const initialState = {
  all: [],
  err: {},
  teetime: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TEETIMES_PENDING:
      return state;

    case LOAD_TEETIMES_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_TEETIMES_SUCCESS:
      return { ...state, all: action.payload };

    case LOAD_TEETIME_PENDING:
      return state;

    case LOAD_TEETIME_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_TEETIME_SUCCESS:
      return { ...state, teetime: action.payload };

    case ADD_TEETIME_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case ADD_TEETIME_FAILURE:
      return { ...state, err: action.payload };

    case ADD_TEETIME_PENDING:
      return state;

    case DELETE_TEETIME_SUCCESS:
      return {
        ...state,
        all: state.all.filter(teeTime => teeTime.id === action.payload.id)
      };

    case DELETE_TEETIME_FAILURE:
      return { ...state, err: action.payload };

    case DELETE_TEETIME_PENDING:
      return state;

    case EDIT_TEETIME_SUCCESS:
      return { all: [...state.all, action.payload] };

    case EDIT_TEETIME_FAILURE:
      return { ...state, err: action.payload };

    case EDIT_TEETIME_PENDING:
      return state;

    default:
      return state;
  }
};
