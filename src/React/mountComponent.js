import mountElement from "./mountElement";
import isFunctionComponent from "./isFunctionComponent";
import isFunction from "./isFunction";

export default function mountComponent(virtualDom, container) {
  let nextVirtualDom = null;
  // 判断是函数组件还是类组件
  if (isFunctionComponent(virtualDom)) {
    // 函数组件
    nextVirtualDom = buildFunctionComponent(virtualDom);
    mountElement(nextVirtualDom, container);
  } else {
    // 类组件
    nextVirtualDom = buildClassComponent(virtualDom);
    mountElement(nextVirtualDom, container);
  }
}

function buildFunctionComponent(virtualDom) {
  const { type, props } = virtualDom;
  return isFunction(virtualDom) ? type(props || {}) : null;
}

function buildClassComponent(virtualDom) {
  const { type, props } = virtualDom;
  return new type(props || {}).render();
}
