import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";
import mountComponent from "./mountComponent";

/**
 * 处理不同的element，比如原生的element，或者是一个组件，调用不同的处理函数
 * @param element
 * @param container
 */
export default function mountElement(element, container) {
  // 需要判断是组件还是 dom 节点
  if (isFunction(element)) {
    mountComponent(element, container);
  } else {
    mountNativeElement(element, container);
  }
}
