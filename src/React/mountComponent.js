import mountElement from "./mountElement";
import isFunctionComponent from "./isFunctionComponent";

export default function mountComponent(virtualDom, container) {
  const {type, props} = virtualDom;
  // 判断是函数组件还是类组件
  if (isFunctionComponent(virtualDom)) {
    // 函数组件
    const componentRender = type(props);
    mountElement(componentRender, container);
  } else {
    // 类组件
    const componentInstance = new type(props);
    const componentRender = componentInstance.render();
    mountElement(componentRender, container);
  }
}
