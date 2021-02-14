import OneGraphAuth from 'onegraph-auth'

export const APP_ID = '6c0d82a1-7412-477b-b616-5f16c84bdf91'
export const CLIENT_URL = `https://serve.onegraph.com/graphql?app_id=${APP_ID}`
export const auth = new OneGraphAuth({
    appId: APP_ID
})