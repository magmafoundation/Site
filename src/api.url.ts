export function getApiURL() {

    const prod = process.env.NODE_ENV === 'production'
    return prod ? "https://api.magmafoundation.org/api" : "http://localhost:3001/api"

}
