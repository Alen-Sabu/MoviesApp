import axios from 'axios';


const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjMzNzA5Y2E1NzY2NjU5YTZkMWE5NDZlMWQ2NWExOSIsInN1YiI6IjY0YjY1NTI4YWM0MTYxMDBlMjQwNzg4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8rQMQvGOVvm-4N2QQQZZBpLRn1yRP4P9IF4slLayfI";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export  const fetchDataFromApi = async (url, params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch (err) {
        return err
    }
}