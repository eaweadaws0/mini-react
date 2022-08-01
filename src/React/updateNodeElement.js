/**
 * 给元素添加属性
 * @param newElement 真实dom
 * @param virtualDom 虚拟dom
 */
export default function updateNodeElement(newElement, virtualDom) {
  // 获取节点对应的属性对象
  const newProps = virtualDom.props;
  Object.keys(newProps).forEach(key => {
    if (key === 'children') return  // 如果是子节点，则不需要添加属性
    // 判断属性是否是事件属性
    if (key.substring(0, 2) === "on") {
      newElement.addEventListener(key.substring(2).toLowerCase(), newProps[key]);
    } else if (key === "style") {
      // 如果是style，则设置样式
      Object.keys(newProps.style).forEach(styleKey => {
        newElement.style[styleKey] = newProps.style[styleKey];
      })
    } else if (['value', 'checked'].includes(key)) {
      newElement[key] = newProps[key];
    } else if (key === 'className') {
      newElement.setAttribute('class', newProps[key]);
    } else {
      newElement.setAttribute(key, newProps[key]);
    }
  })
}
