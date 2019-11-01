import axios from "axios";
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
} from "../Constants";

export const getTeetimes = () => {
  return dispatch => {
    dispatch({
      type: LOAD_TEETIMES_PENDING
    });
    axios
      .get("http://localhost:8000/api/tee_times")
      .then(res => {
        dispatch({
          type: LOAD_TEETIMES_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_TEETIMES_FAILURE,
          payload: err
        })
      );
  };
};

export const getOneTeetime = id => {
  return dispatch => {
    dispatch({
      type: LOAD_TEETIME_PENDING
    });
    axios
      .get(`http://localhost:8000/api/tee_times/${id}`)
      .then(res => {
        dispatch({
          type: LOAD_TEETIME_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_TEETIME_FAILURE,
          payload: err
        })
      );
  };
};

export const addCustomer = teetime => {
  return dispatch => {
    dispatch({
      type: ADD_TEETIME_PENDING
    });
    axios
      .post("http://localhost:8000/api/tee_times", teetime)
      .then(res => {
        dispatch({
          type: ADD_TEETIME_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_TEETIME_FAILURE,
          payload: err
        })
      );
  };
};

export const rmvTeetime = id => {
  return dispatch => {
    dispatch({
      type: DELETE_TEETIME_PENDING
    });
    axios
      .delete(`http://localhost:8000/api/tee_times/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_TEETIME_SUCCESS,
          payload: res.data
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_TEETIME_FAILURE,
          payload: err
        })
      );
  };
};

export const editCustomer = (teetime, id) => dispatch => {
  dispatch({
    type: EDIT_TEETIME_PENDING
  });
  axios
    .patch(`http://localhost:8000/api/tee_times/${id}`, teetime)
    .then(res => {
      dispatch({
        type: EDIT_TEETIME_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_TEETIME_FAILURE,
        payload: err
      })
    );
};
