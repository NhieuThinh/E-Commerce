import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWI4NWFkMGY1NGRlZGJiYzc2ZGY1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTQ2Mzg3OCwiZXhwIjoxNzA1NzIzMDc4fQ.55vrUrWynlMNIQ4xup0vXF4DuYA9x_IUUp-JbBPdZl0";

export const publicRequest = axios.create({
    baseURL:BASE_URL
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})