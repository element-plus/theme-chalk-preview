// 写入新的css样式
export const writeNewStyle = (stylesheetCount, originalStyle, colors) => {
  Object.keys(colors).forEach(key => {
    originalStyle = originalStyle.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + colors[key])
  })
  if (stylesheetCount === document.styleSheets.length) {
    const style = document.createElement('style')
    style.innerText = originalStyle
    document.head.appendChild(style)
  } else {
    document.head.lastChild.innerText = originalStyle
  }
}
