export default function createElement(type, props, ...children) {
  children = children.reduce((arr, child) => {
    if (![null, undefined, true, false].includes(child)) {
      // 如果是object不做处理 否则认为是文本节点
      if (typeof child === 'object') {
        arr.push(child)
      } else {
        arr.push(createTextElement(child))
      }
    }
    return arr
  }, []);
  return {
    type,
    props: {
      ...props,
      children: children.length ? children : undefined
    }
  }
}

const createTextElement = (text) => {
  return createElement('text', {textContent: text})
}
