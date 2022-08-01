import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

/**
 * 将虚拟dom变为真实dom
 * @param element
 * @returns {HTMLElement}
 */
export default function createDomElement(element) {
  let newElement = null
  if (element.type === "text") {
    newElement = document.createTextNode(element.props.textContent)
  } else {
    newElement = document.createElement(element.type)
    // 为新创建的dom设置属性
    updateNodeElement(newElement, element)
  }
  element.props.children && element.props.children.forEach(child => {
    // 不确定child是原生的还是组件，所以需要递归调用 mountElement
    mountElement(child, newElement)
  })
  return newElement
}
