import axios, {AxiosResponse,AxiosRequestConfig} from "axios";

const searchMovies = (jenre : String): Promise<AxiosResponse> => {
    const options :AxiosRequestConfig  = {
        method: 'GET',
        url: `https://api.tvmaze.com/search/shows?q=${jenre}`,
      }
      return axios.request(options)
}


export default searchMovies;
