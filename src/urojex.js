function colorChanger(col, amt) {
  var usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  var g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
const root = document.getElementById("root");
export function color(i) {
  // prettier-ignore
  switch (i) {
    // BASE COLOR===============================================
    case "black": return "#000000";
    case "white": return "#FFFFFF";
    // GREY=====================================================
    case "grey25": return "#FCFCFD";
    case "grey50": return "#F9FAFB";
    case "grey100": return "#F2F4F7";
    case "grey300": return "#EAECF0";
    case "grey400": return "#98A2B3";
    case "grey500": return "#667085";
    case "grey600": return "#475467";
    case "grey700": return "#344054";
    case "grey800": return "#1D2939";
    case "grey900": return "#101828";
    // GREEN====================================================
    case "green25": return "#F6FEF9";
    case "green50": return "#ECFDF3";
    case "green100": return "#D1FADF";
    case "green200": return "#A6F4C5";
    case "green300": return "#6CE9A6";
    case "green400": return "#32D583";
    case "green500": return "#12B76A";
    case "green600": return "#039855";
    case "green700": return "#027A48";
    case "green800": return "#05603A";
    case "green900": return "#054F31";
  }
}
export class Text {
  constructor(content = "", { className = "", id = "", color = "#000" }) {
    // prettier-ignore
    root.insertAdjacentHTML(`beforeend`, `<span class="${className}" id="${id}" style="color: ${color};">${content}</span>`);
  }
}
export class Box {
  constructor({ content }) {
    console.log(content);
  }
}
