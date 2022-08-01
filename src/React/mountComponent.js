import mountElement from "./mountElement";
import isFunctionComponent from "./isFunctionComponent";

export default function mountComponent(virtualDom, container) {
  let nextVirtualDom = null;
  // 判断是函数组件还是类组件
  if (isFunctionComponent(virtualDom)) {
    // 函数组件
    nextVirtualDom = buildFunctionComponent(virtualDom);
    mountElement(nextVirtualDom, container);
  } else {
    // 类组件
  }
}

function buildFunctionComponent(virtualDom) {
  return virtualDom.type()
}
