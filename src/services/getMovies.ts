import axios, {AxiosResponse,AxiosRequestConfig} from "axios";

const getMovies = (): Promise<AxiosResponse> => {
    const options :AxiosRequestConfig  = {
        method: 'GET',
        url: 'https://api.tvmaze.com/search/shows?q=triller',
      }
      return axios.request(options)
      
}

export default getMovies;



