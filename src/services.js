import axios from "axios"

const api = axios.create({
    baseURL : 'https://restcountries.eu/rest/v2/',
    headers :{
        Accept: 'application/json',
        'Content-Type' : 'application/json'
    },
    timeout: 10000
})

export default{
    getAll(){
        return api.get('/all')
    },
    getDetails(id){
        return api.get('/alpha/'+id)
    }
}