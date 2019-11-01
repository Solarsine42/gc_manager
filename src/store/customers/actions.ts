import axios from "axios";
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
} from "../Constants";

export const getCustomers = () => {
  return dispatch => {
    dispatch({
      type: LOAD_CUSTOMERS_PENDING
    });
    axios
      .get("http://localhost:8000/api/customers")
      .then(res => {
        dispatch({
          type: LOAD_CUSTOMERS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_CUSTOMERS_FAILURE,
          payload: err
        })
      );
  };
};

export const getOneCustomer = id => {
  return dispatch => {
    dispatch({
      type: LOAD_CUSTOMER_PENDING
    });
    axios
      .get(`http://localhost:8000/api/customers/${id}`)
      .then(res => {
        dispatch({
          type: LOAD_CUSTOMER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_CUSTOMER_FAILURE,
          payload: err
        })
      );
  };
};

export const addCustomer = customer => {
  return dispatch => {
    dispatch({
      type: ADD_CUSTOMER_PENDING
    });
    axios
      .post("http://localhost:8000/api/customers", customer)
      .then(res => {
        dispatch({
          type: ADD_CUSTOMER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_CUSTOMER_FAILURE,
          payload: err
        })
      );
  };
};

export const rmvCustomer = id => {
  return dispatch => {
    dispatch({
      type: DELETE_CUSTOMER_PENDING
    });
    axios
      .delete(`http://localhost:8000/api/customers/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_CUSTOMER_SUCCESS,
          payload: res.data
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_CUSTOMER_FAILURE,
          payload: err
        })
      );
  };
};

export const editCustomer = (customer, id) => dispatch => {
  dispatch({
    type: EDIT_CUSTOMER_PENDING
  });
  axios
    .patch(`http://localhost:8000/api/customers/${id}`, customer)
    .then(res => {
      dispatch({
        type: EDIT_CUSTOMER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_CUSTOMER_FAILURE,
        payload: err
      })
    );
};