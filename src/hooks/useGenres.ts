import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>("https://api.rawg.io/api/genres");

export default useGenres;
