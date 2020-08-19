import axios from "axios";

export async function getEmployeesWithParams(params) {
  const employees = await axios.get(
    "https://randomuser.me/api/?results=200&nat=us"
  );
  return employees.data;
}
