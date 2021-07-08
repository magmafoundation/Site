export function getApiURL() {

    const env = process.env.NODE_ENV
    if(env == "development"){
        return "http://localhost:3001/api"
    }
    else if (env == "production"){
       return "https://api.magmafoundation.org/api"
    }

}
