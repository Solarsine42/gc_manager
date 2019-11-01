import {
  LOAD_CUSTOMERS_FAILURE,
  LOAD_CUSTOMERS_SUCCESS,
  LOAD_CUSTOMERS_PENDING,
  LOAD_CUSTOMER_FAILURE,
  LOAD_CUSTOMER_SUCCESS,
  LOAD_CUSTOMER_PENDING,
  ADD_CUSTOMER_FAILURE,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_PENDING,
  DELETE_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_PENDING,
  EDIT_CUSTOMER_FAILURE,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_PENDING
} from "../constants";

const initialState = {
  all: [],
  err: {},
  customer: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CUSTOMERS_PENDING:
      return state;

    case LOAD_CUSTOMERS_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_CUSTOMERS_SUCCESS:
      return { ...state, all: action.payload };

    case LOAD_CUSTOMER_PENDING:
      return state;

    case LOAD_CUSTOMER_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_CUSTOMER_SUCCESS:
      return { ...state, customer: action.payload };

    case ADD_CUSTOMER_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case ADD_CUSTOMER_FAILURE:
      return { ...state, err: action.payload };

    case ADD_CUSTOMER_PENDING:
      return state;

    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(customer => customer.id === action.payload.id)
      };

    case DELETE_CUSTOMER_FAILURE:
      return { ...state, err: action.payload };

    case DELETE_CUSTOMER_PENDING:
      return state;

    case EDIT_CUSTOMER_SUCCESS:
      return { all: [...state.all, action.payload] };

    case EDIT_CUSTOMER_FAILURE:
      return { ...state, err: action.payload };

    case EDIT_CUSTOMER_PENDING:
      return state;

    default:
      return state;
  }
};
