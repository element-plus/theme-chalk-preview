import { ref } from 'vue'

const useFetch = async <T = any>(url: string, isBlob = false) => {
  const data = ref<T | null>(null)
  const address = ref('')
  await new Promise<void>((resolve, reject) => {
    const client = new XMLHttpRequest()
    client.responseType = isBlob ? 'blob' : ''
    client.onreadystatechange = () => {
      if (client.readyState !== 4) return
      if (client.status === 200) {
        const urlArr = client.responseURL.split('/')
        data.value = client.response
        address.value = urlArr[urlArr.length - 1]
        resolve()
      } else {
        reject(new Error(client.statusText))
      }
    }
    client.open('GET', url)
    client.send()
  })
  return {
    data: data.value,
    url: address.value,
  }
}
export { useFetch }
