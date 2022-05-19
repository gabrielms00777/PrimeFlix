import axios from 'axios'

//KEY: 12ae37a6d91f1b47d5357bc6def472ab
//BSA DA URL: https://api.themoviedb.org/3
//URL DA API: /movie/now_playing?api_key=12ae37a6d91f1b47d5357bc6def472ab&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


export default api