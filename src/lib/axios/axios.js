import axios from "axios";

export const addStaff = async (formData) => {
  const { data } = await axios.post("api/add-staff", formData);
  return data;
};

export const getStaff = async () => {
  const {data} = await axios.get("api/get-staff");
  return data;
}