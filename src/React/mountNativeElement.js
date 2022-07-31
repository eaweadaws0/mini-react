import createDomElement from "./createDomELement";

export default function mountNativeElement(element, container) {
  const newElement = createDomElement(element);
  container.appendChild(newElement)
}
