import { ADD_USER, LOGOUT, LOGIN } from "./actionTypes";

export const addUser = (name) => {
	return {
		type: ADD_USER,
		payload: name,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};
