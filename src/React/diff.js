import mountElement from "./mountElement";

/**
 * 判断是否存在旧的DOM，如果不存在则直接创建挂载，如果存在则更新
 * @param element  虚拟DOM
 * @param container 容器
 * @param oldDom 旧的DOM
 */
export default function diff(element, container, oldDom) {
  if (!oldDom) {
    mountElement(element, container);
  }
}
