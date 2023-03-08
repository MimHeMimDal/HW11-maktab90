function ElementGenerator({ element, variant, child, ...rest }) {
  const elem = document.createElement(element);
  const variants = {
    High: "bg-red-600 text-white py-1 px-2 rounded-2xl",
    ToDo: "bg-red-600 text-white py-1 px-2 rounded-2xl",
    Medium: "bg-yellow-400 py-1 px-2 rounded-2xl",
    Doing: "bg-yellow-400 py-1 px-2 rounded-2xl",
    Done: "bg-green-600 text-white py-1 px-2 rounded-2xl",
    Low: "bg-slate-200 py-1 px-2 rounded-2xl",
  };
  for (const key in rest) {
    elem[key] = rest[key];
  }
  if (variant) {
    elem.className += variants[variant];
  }
  if (child) {
    Array.isArray(child) ? elem.append(...child) : child && elem.append(child);
  }
  return elem;
}

export default ElementGenerator;
