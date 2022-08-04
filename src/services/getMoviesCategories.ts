import axios, {AxiosResponse,AxiosRequestConfig} from "axios";


const getMoviesCategories = (): Promise<AxiosResponse> => {
    const options :AxiosRequestConfig  = {
        method: 'GET',
        url: 'https://api.tvmaze.com/shows?q=sports',
      }
      return axios.request(options)
}



export default getMoviesCategories;
