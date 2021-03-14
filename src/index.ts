import OpenAPI from "@tinkoff/invest-openapi-js-sdk"

const apiURL = process.env.REST_SERVER as string
const socketURL = process.env.STREAMING_SERVER as string
const secretToken = process.env.OPEN_API_TOKEN as string

if (!secretToken) throw EvalError('Token is empty!')

const api = new OpenAPI({apiURL, secretToken, socketURL});

!(async function () {
    try {
        const accounts = await api.accounts()
        console.log(accounts)
        const info =  await api.search({ticker: 'AAPL'})
        console.log(info)
    } catch (e) {
        console.error(e)
    }
}())
    .catch((reason:string) => console.error(reason))




