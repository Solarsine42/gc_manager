import {
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_PENDING,
  ADD_CUSTOMER_FAILURE,
  LOAD_CUSTOMERS_SUCCESS,
  LOAD_CUSTOMERS_PENDING,
  LOAD_CUSTOMERS_FAILURE,
  LOAD_CUSTOMER_PENDING,
  LOAD_CUSTOMER_SUCCESS,
  LOAD_CUSTOMER_FAILURE,
  EDIT_CUSTOMER_PENDING,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_PENDING,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE
} from "../constants";

// Customer Model
export interface Customer {
  id?: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface CustomerState {
  customers: Customer[];
}

// POST Customer actions
interface AddCustomerPendingAction {
  type: typeof ADD_CUSTOMER_PENDING;
}
interface AddCustomerSuccessAction {
  type: typeof ADD_CUSTOMER_SUCCESS;
  payload: Customer;
}
interface AddCustomerFailureAction {
  type: typeof ADD_CUSTOMER_FAILURE;
  payload: any;
}

// GET All Customers actions
interface LoadCustomersPendingAction {
  type: typeof LOAD_CUSTOMERS_PENDING;
}
interface LoadCustomersSuccessAction {
  type: typeof LOAD_CUSTOMERS_SUCCESS;
  payload: Customer;
}
interface LoadCustomersFailureAction {
  type: typeof LOAD_CUSTOMERS_FAILURE;
  payload: any;
}

// GET One Customer actions
interface LoadCustomerPendingAction {
  type: typeof LOAD_CUSTOMER_PENDING;
}
interface LoadCustomerSuccessAction {
  type: typeof LOAD_CUSTOMER_SUCCESS;
  payload: Customer;
}
interface LoadCustomerFailureAction {
  type: typeof LOAD_CUSTOMER_FAILURE;
  payload: any;
}

// PATCH Customer actions
interface EditCustomerPendingAction {
  type: typeof EDIT_CUSTOMER_PENDING;
}
interface EditCustomerSuccessAction {
  type: typeof EDIT_CUSTOMER_SUCCESS;
  payload: Customer;
}
interface EditCustomerFailureAction {
  type: typeof EDIT_CUSTOMER_FAILURE;
  payload: any;
}

// DELETE Customer actions
interface DeleteCustomerPendingAction {
  type: typeof DELETE_CUSTOMER_PENDING;
}
interface DeleteCustomerSuccessAction {
  type: typeof DELETE_CUSTOMER_SUCCESS;
  payload: Customer;
}
interface DeleteCustomerFailureAction {
  type: typeof DELETE_CUSTOMER_FAILURE;
  payload: any;
}

// Group the different types of actions
type AddCustomerType =
  | AddCustomerPendingAction
  | AddCustomerSuccessAction
  | AddCustomerFailureAction;
type LoadCustomersType =
  | LoadCustomersPendingAction
  | LoadCustomersSuccessAction
  | LoadCustomersFailureAction;
type LoadCustomerType =
  | LoadCustomerPendingAction
  | LoadCustomerSuccessAction
  | LoadCustomerFailureAction;
type EditCustomerType =
  | EditCustomerPendingAction
  | EditCustomerSuccessAction
  | EditCustomerFailureAction;
type DeleteCustomerType =
  | DeleteCustomerPendingAction
  | DeleteCustomerSuccessAction
  | DeleteCustomerFailureAction;

// Export all-inlcusive type
export type CustomerActionType =
  | AddCustomerType
  | LoadCustomersType
  | LoadCustomerType
  | EditCustomerType
  | DeleteCustomerType;
