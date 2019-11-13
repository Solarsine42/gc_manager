import {
  ADD_TEETIME_SUCCESS,
  ADD_TEETIME_PENDING,
  ADD_TEETIME_FAILURE,
  LOAD_TEETIMES_SUCCESS,
  LOAD_TEETIMES_PENDING,
  LOAD_TEETIMES_FAILURE,
  LOAD_TEETIME_PENDING,
  LOAD_TEETIME_SUCCESS,
  LOAD_TEETIME_FAILURE,
  EDIT_TEETIME_PENDING,
  EDIT_TEETIME_SUCCESS,
  EDIT_TEETIME_FAILURE,
  DELETE_TEETIME_PENDING,
  DELETE_TEETIME_SUCCESS,
  DELETE_TEETIME_FAILURE
} from "../constants";

// Tee Time Model
export interface Teetime {
  time: string;
  id?: number;
}

export interface TeetimeState {
  teetimes: Teetime[];
}

// Add Tee Times actions
interface AddTeetimePendingAction {
  type: typeof ADD_TEETIME_PENDING;
}
interface AddTeetimeSuccessAction {
  type: typeof ADD_TEETIME_SUCCESS;
  payload: Teetime;
}
interface AddTeetimeFailureAction {
  type: typeof ADD_TEETIME_FAILURE;
  payload: any;
}

// Fetch All Tee Times actions
interface LoadTeetimesPendingAction {
  type: typeof LOAD_TEETIMES_PENDING;
}
interface LoadTeetimesSuccessAction {
  type: typeof LOAD_TEETIMES_SUCCESS;
  payload: Teetime;
}
interface LoadTeetimesFailureAction {
  type: typeof LOAD_TEETIMES_FAILURE;
  payload: any;
}

// Fetch One Tee Time actions
interface LoadTeetimePendingAction {
  type: typeof LOAD_TEETIME_PENDING;
}
interface LoadTeetimeSuccessAction {
  type: typeof LOAD_TEETIME_SUCCESS;
  payload: Teetime;
}
interface LoadTeetimeFailureAction {
  type: typeof LOAD_TEETIME_FAILURE;
  payload: any;
}

// Update Tee Time actions
interface EditTeetimePendingAction {
  type: typeof EDIT_TEETIME_PENDING;
}
interface EditTeetimeSuccessAction {
  type: typeof EDIT_TEETIME_SUCCESS;
  payload: Teetime;
}
interface EditTeetimeFailureAction {
  type: typeof EDIT_TEETIME_FAILURE;
  payload: any;
}

// Remove Tee Time actions
interface DeleteTeetimePendingAction {
  type: typeof DELETE_TEETIME_PENDING;
}
interface DeleteTeetimeSuccessAction {
  type: typeof DELETE_TEETIME_SUCCESS;
  payload: Teetime;
}
interface DeleteTeetimeFailureAction {
  type: typeof DELETE_TEETIME_FAILURE;
  payload: any;
}

// Group the different types of actions
type AddTeetimeType =
  | AddTeetimePendingAction
  | AddTeetimeSuccessAction
  | AddTeetimeFailureAction;
type LoadTeetimesType =
  | LoadTeetimesPendingAction
  | LoadTeetimesSuccessAction
  | LoadTeetimesFailureAction;
type LoadTeetimeType =
  | LoadTeetimePendingAction
  | LoadTeetimeSuccessAction
  | LoadTeetimeFailureAction;
type EditTeetimeType =
  | EditTeetimePendingAction
  | EditTeetimeSuccessAction
  | EditTeetimeFailureAction;
type DeleteTeetimeType =
  | DeleteTeetimePendingAction
  | DeleteTeetimeSuccessAction
  | DeleteTeetimeFailureAction;

// Import all-inlcusive type
export type TeetimeActionType =
  | AddTeetimeType
  | LoadTeetimesType
  | LoadTeetimeType
  | EditTeetimeType
  | DeleteTeetimeType;
