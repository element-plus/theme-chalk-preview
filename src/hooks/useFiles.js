import { useFetch } from './useFetch'

export const useFiles = () => {
  const getFontFiles = async (fontFiles) => {
    const fonts = await Promise.all(fontFiles.map(font => {
      return useFetch(`//unpkg.com/element-plus/lib/theme-chalk/fonts/${font}`, true)
    }))
    return fonts
  }

  const getIndexStyle = async () => {
    let { data } = await useFetch('//unpkg.com/element-plus/lib/theme-chalk/index.css')
    return data
  }

  const getSeparatedStyles = async () => {
    const {data} = await useFetch('//unpkg.com/element-plus/lib/theme-chalk/')
    const styles = data.match(/href="[\w-]+\.css"/g).map(str => str.split('"')[1])
    const files = await Promise.all(styles.map(file => {
      return useFetch(`//unpkg.com/element-plus/lib/theme-chalk/${file}`)
    }))
    return files
  }

  return {
    getFontFiles,
    getIndexStyle,
    getSeparatedStyles
  }
}