export function getApiURL() {
    return process.env.NODE_ENV == "production" ? "https://api.magmafoundation.org/api": 'http://localhost:3001/api'
}
