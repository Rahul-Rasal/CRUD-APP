import axios from "axios";
// const URL = "http://localhost:8000";
const URL = "";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling add user API", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while calling get users API", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling get user API", error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error while calling edit user API", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling delete user API", error);
  }
};
