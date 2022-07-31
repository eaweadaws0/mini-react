import diff from "./diff";

/**
 * 把虚拟DOM转化为真实DOM
 * @param element 虚拟DOM
 * @param container 容器
 * @param oldDom 页面中已经存在的旧的DOM，用于更新
 */
export default function render(element, container, oldDom) {
  diff(element, container, oldDom);
}
