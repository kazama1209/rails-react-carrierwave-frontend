import axios, { AxiosInstance, AxiosResponse }  from "axios"

let client: AxiosInstance

export default client =  axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "multipart/form-data" // 画像ファイルを取り扱うのでform-dataで送信
  }
})

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
      const data = response.data
      return { ...response.data, data }
  }
)
