import { useFetch } from './useFetch'

export const useFiles = () => {
  const getFontFiles = async (fontFiles: string[]) => {
    const fonts = await Promise.all(
      fontFiles.map((font: string) =>
        useFetch(`//unpkg.com/element-plus/dist/fonts/${font}`, true)
      )
    )
    return fonts
  }

  const getIndexStyle = async () => {
    let { data } = await useFetch('//unpkg.com/element-plus/dist/index.css')
    return data
  }

  const getSeparatedStyles = async () => {
    const { data } = await useFetch('//unpkg.com/element-plus/theme-chalk/')
    const styles = data
      .match(/href="[\w-]+\.css"/g)
      .map((str) => str.split('"')[1])
    const files = await Promise.all(
      styles.map((file) => {
        return useFetch(`//unpkg.com/element-plus/theme-chalk/${file}`)
      })
    )
    return files
  }

  return {
    getFontFiles,
    getIndexStyle,
    getSeparatedStyles,
  }
}
