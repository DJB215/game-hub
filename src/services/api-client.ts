import axios, { CanceledError } from "axios";

export default axios.create({
  params: {
    baseURL: "https://api.rawg.io/api/",
    key: "8181c84b30ad4133bde142ef2072ea19",
  },
});

export { CanceledError };
