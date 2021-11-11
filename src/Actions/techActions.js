import { apiDomain } from "../utils/apiDomain";
import {
  GET_TECHS,
  ADD_TECHS,
  DELETE_TECH,
  SET_LOADING,
  TECH_ERROR,
} from "./types";

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${apiDomain()}/techs`);
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText,
    });
  }
};
// Add technician to server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${apiDomain()}/techs`, {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`${apiDomain()}/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText,
    });
  }
};
// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
