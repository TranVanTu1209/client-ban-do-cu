import {
  CATEGORY_LIST_GET_START,
  CATEGORY_LIST_GET_SUCCESS,
  CATEGORY_LIST_GET_FAILED,
  CATEGORY_GET_DETAIL_START,
  CATEGORY_GET_DETAIL_SUCCESS,
  CATEGORY_GET_DETAIL_FAILED,
} from "../../types/public";
import {
  CATEGORY_CREATE_START,
  CATEGORY_CREATE_FAILED,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE_START,
  CATEGORY_DELETE_FAILED,
  CATEGORY_DELETE_SUCCESS,
} from "../../types/admin";

const categoryListInitialState = {
  loading: false,
  error: null,
  categoryList: [],
};

const categoryListReducer = (state = categoryListInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_LIST_GET_START:
    case CATEGORY_CREATE_START:
    case CATEGORY_DELETE_START:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_LIST_GET_SUCCESS:
      return {
        loading: false,
        categoryList: payload,
        error: null,
      };
    case CATEGORY_CREATE_SUCCESS:
      return {
        loading: false,
        categoryList: [payload, ...state.categoryList],
        error: null,
      };
    case CATEGORY_DELETE_SUCCESS:
      return {
        loading: false,
        categoryList: state.categoryList.filter(c => c.id !== payload),
        error: null,
      };
    case CATEGORY_LIST_GET_FAILED:
    case CATEGORY_CREATE_FAILED:
    case CATEGORY_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const categoryDetailInitialState = {
  loading: false,
  error: null,
  category: {},
};

const categoryDetailReducer = (state = categoryDetailInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_GET_DETAIL_START:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_GET_DETAIL_SUCCESS:
      return {
        loading: false,
        category: payload,
        error: null,
      };
    case CATEGORY_GET_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export { categoryListReducer, categoryDetailReducer };
