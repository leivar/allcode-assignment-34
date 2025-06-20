import axios from "axios";

export const addStaff = async (formData: { name: string; email: string; role: string; about: string; }) => {
    try {
        const { data } = await axios.post("api/add-staff", formData);
        return data;
    } catch (error) {
        return error
    }
};

export const getStaff = async () => {
  const {data} = await axios.get("api/get-staff");
  return data;
}