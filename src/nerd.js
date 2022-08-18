var fontLink =
  "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')";
var fontName = "'SFProDisplay', monospace";
document.head.insertAdjacentHTML(
  "afterbegin",
  `
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../font/stylesheet.css">
  <style>
  ${fontLink};
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${fontName};
  }
  *::before, *::after {
    box-sizing: border-box;
  }
  </style>
`
);
const easing = "cubic-bezier(0, 0.55, 0.45, 1)";
// prettier-ignore
const colorChanger=(p,c0,c1,l)=>{
  let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
  if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
  if(!this.pSBCr)this.pSBCr=(d)=>{
      let n=d.length,x={};
      if(n>9){
          [r,g,b,a]=d=d.split(","),n=d.length;
          if(n<3||n>4)return null;
          x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
      }else{
          if(n==8||n==6||n<4)return null;
          if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
          d=i(d.slice(1),16);
          if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
          else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
      }return x};
  h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
  if(!f||!t)return null;
  if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
  else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
  a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
  if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
  else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}
// Box
document.querySelectorAll("box").forEach((box) => {
  function padding() {
    var componentPadding = box.getAttribute("padding");
    if (componentPadding == null) {
      return 0;
    } else {
      return componentPadding;
    }
  }
  function margin() {
    var componentMargin = box.getAttribute("margin");
    if (componentMargin == null) {
      return 0;
    } else {
      return componentMargin;
    }
  }
  function border() {
    var componentBorder = box.getAttribute("border");
    if (componentBorder == null) {
      return "0 solid transparent";
    } else {
      return componentBorder;
    }
  }
  function rounded() {
    var componentRounded = box.getAttribute("rounded");
    if (componentRounded == null) {
      return 0;
    } else {
      return componentRounded;
    }
  }
  function width() {
    var componentWidth = box.getAttribute("width");
    if (componentWidth == null) {
      return "fit-content";
    } else {
      return componentWidth;
    }
  }
  function maxWidth() {
    var componentmxWidth = box.getAttribute("maxWidth");
    if (componentmxWidth == null) {
      return "100%";
    } else {
      return componentmxWidth;
    }
  }
  function height() {
    var componentHeight = box.getAttribute("height");
    if (componentHeight == null) {
      return "fit-content";
    } else {
      return componentHeight;
    }
  }
  function maxHeight() {
    var componentmxHeight = box.getAttribute("maxHheight");
    if (componentmxHeight == null) {
      return "fit-content";
    } else {
      return componentmxHeight;
    }
  }
  function background() {
    var componentBg = box.getAttribute("background");
    if (componentBg == null) {
      return "transparent";
    } else {
      return componentBg;
    }
  }
  box.style.background = background();
  box.style.width = width();
  box.style.height = height();
  box.style.maxWidth = maxWidth();
  box.style.maxHeight = maxHeight();
  box.style.display = "block";
  box.style.padding = padding();
  box.style.margin = margin();
  box.style.border = border();
  box.style.borderRadius = rounded();
});
// flexBox
document.querySelectorAll("flexBox").forEach((flexbox) => {
  function dir() {
    var componentDir = flexbox.getAttribute("direction");
    if (componentDir == null) {
      return "row";
    } else {
      return componentDir;
    }
  }
  function gap() {
    var componentGap = flexbox.getAttribute("gap");
    if (componentGap == null) {
      return 0;
    } else {
      return componentGap;
    }
  }
  function width() {
    var componentWidth = flexbox.getAttribute("width");
    if (componentWidth == null) {
      return "fit-content";
    } else {
      return componentWidth;
    }
  }
  function height() {
    var componentHeight = flexbox.getAttribute("height");
    if (componentHeight == null) {
      return "fit-content";
    } else {
      return componentHeight;
    }
  }
  function alignItems() {
    var componentItems = flexbox.getAttribute("alignItems");
    if (componentItems == null) {
      return "flex-start";
    } else {
      return componentItems;
    }
  }
  function justifyContent() {
    var componentJustify = flexbox.getAttribute("justifyContent");
    if (componentJustify == null) {
      return "flex-start";
    } else {
      return componentJustify;
    }
  }
  flexbox.style.display = "flex";
  flexbox.style.width = width();
  flexbox.style.height = height();
  flexbox.style.alignItems = alignItems();
  flexbox.style.justifyContent = justifyContent();
  flexbox.style.flexDirection = dir();
  flexbox.style.gap = gap() + "px";
});
// Accordion
document.querySelectorAll("accordion").forEach((accordion) => {
  accordion.style.backgroundColor = "#F2F2F7";
  function size() {
    var componentSize = accordion.getAttribute("size");
    if (componentSize == null) {
      return 14;
    } else {
      return componentSize;
    }
  }
  function colorScheme() {
    var componentColor = accordion.getAttribute("colorScheme");
    if (componentColor == null) {
      return "#000000";
    } else {
      return componentColor;
    }
  }
  accordion.style.display = "flex";
  accordion.style.flexDirection = "column";
  accordion.style.gap = "4px";
  accordion.style.padding = `${size()}px 0`;
  accordion.querySelectorAll("accordionItem").forEach((item) => {
    item.style.display = "block";
    item.style.backgroundColor = "#fff";
    item.style.borderTop = `1px solid ${colorChanger(0.8, colorScheme())}`;
    item.style.borderBottom = `1px solid ${colorChanger(0.8, colorScheme())}`;
  });
  accordion.querySelectorAll("accordionButton").forEach((btn) => {
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "space-between";
    btn.style.cursor = "pointer";
    btn.style.fontSize = size() + "px";
    btn.style.userSelect = "none";
    btn.style.padding = `${size() / 2}px ${size()}px`;
    btn.style.color = colorScheme();
    btn.style.fontWeight = "400";
    btn.addEventListener("mouseover", function () {
      this.style.backgroundColor = colorChanger(0.95, colorScheme());
    });
    btn.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
    });
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.height == panel.scrollHeight + "px") {
        panel.style.height = 0;
        this.querySelector("accordionIcon").style.transform = "rotate(45deg)";
      } else {
        panel.style.height = panel.scrollHeight + "px";
        this.querySelector("accordionIcon").style.transform = "rotate(225deg)";
      }
    });
  });
  accordion.querySelectorAll("accordionPanel").forEach((panel) => {
    panel.style.display = "block";
    panel.style.overflow = "hidden";
    panel.style.height = 0;
    panel.style.fontSize = size() + "px";
    panel.style.padding = `0 ${size()}px`;
    panel.style.transition = `0.25s ${easing}`;
    panel.innerHTML = `<div class="inner" style="margin: ${size() / 2}px 0">${
      panel.innerHTML
    }</div>`;
  });
  accordion.querySelectorAll("accordionIcon").forEach((icon) => {
    icon.style.transition = `0.25s ${easing}`;
    icon.style.height = size() / 2 + "px";
    icon.style.width = size() / 2 + "px";
    icon.style.transform = "rotate(45deg)";
    // prettier-ignore
    icon.innerHTML = `
    <div style="height: 100%; width: 100%; background-color: transparent; border: 2px solid ${colorChanger(0.3, colorScheme())}; border-top: none; border-left: none;"></div>
    `;
  });
});
// alert
document.querySelectorAll("alert").forEach((alert) => {
  var status = alert.getAttribute("status");
  function size() {
    var componentSize = alert.getAttribute("size");
    if (componentSize == null) {
      return 16;
    } else {
      return componentSize;
    }
  }
  function colorScheme() {
    var componentColor = alert.getAttribute("colorScheme");
    var status = alert.getAttribute("status");
    if (componentColor == null) {
      switch (status) {
        case "success": {
          return "#38a169";
          break;
        }
        case "error": {
          return "#e53e3e";
          break;
        }
        case "warning": {
          return "#dd6b20";
          break;
        }
        case "info": {
          return "#3182ce";
          break;
        }
      }
    } else {
      return componentColor;
    }
  }
  switch (status) {
    case "success": {
      alert.querySelectorAll("alertIcon").forEach((icon) => {
        // prettier-ignore
        icon.innerHTML = `
        <div style="background-color: ${colorScheme()}; width: ${size() * 1.5}px; height: ${size() * 1.5}px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <div style="height: ${size() / 2}px; width: ${size() / 1.2}px; background-color: transparent; transform: translateY(-15%) rotate(-45deg); border: 2px solid #fff; border-top: none; border-right: none;"></div>
        </div>`
      });
      break;
    }
    case "error": {
      alert.querySelectorAll("alertIcon").forEach((icon) => {
        // prettier-ignore
        icon.innerHTML = `
        <div style="background-color: ${colorScheme()}; width: ${size() * 1.5}px; height: ${size() * 1.5}px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${size()}px; color: #fff; user-select: none;">
          !
        </div>`
      });
      break;
    }
    case "warning": {
      alert.querySelectorAll("alertIcon").forEach((icon) => {
        // prettier-ignore
        icon.innerHTML = `
        <div style="background-color: ${colorScheme()}; width: ${size() * 1.5}px; height: ${size() * 1.5}px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${size()}px; color: #fff; user-select: none;">
          !
        </div>`
      });
      break;
    }
    case "info": {
      alert.querySelectorAll("alertIcon").forEach((icon) => {
        // prettier-ignore
        icon.innerHTML = `
        <div style="background-color: ${colorScheme()}; width: ${size() * 1.5}px; height: ${size() * 1.5}px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${size()}px; color: #fff; user-select: none;">
          i
        </div>`
      });
      break;
    }
  }
  alert.style.width = "100%";
  alert.style.backgroundColor = colorChanger(0.75, colorScheme());
  alert.style.padding = `${size() / 1.5}px ${size()}px`;
  alert.style.display = "flex";
  alert.style.alignItems = "stretch";
  alert.style.gap = size() + "px";
  alert.style.borderRadius = size() / 2.5 + "px";
  alert.querySelectorAll("alertContent").forEach((content) => {
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = size() / 2.5 + "px";
    content.querySelectorAll("alertTitle").forEach((title) => {
      title.style.fontSize = size() + "px";
      title.style.fontWeight = 600;
    });
    content.querySelectorAll("alertDiscription").forEach((disp) => {
      disp.style.fontSize = size() / 1.1 + "px";
    });
  });
});
// badge
document.querySelectorAll("badge").forEach((badge) => {
  function colorScheme() {
    var componentColor = badge.getAttribute("colorScheme");
    var type = badge.getAttribute("type");
    if (componentColor == null) {
      switch (type) {
        case "success": {
          return "#38a169";
          break;
        }
        case "error": {
          return "#e53e3e";
          break;
        }
        case "warning": {
          return "#dd6b20";
          break;
        }
        case "info": {
          return "#3182ce";
          break;
        }
        default: {
          return "#718096";
        }
      }
    } else {
      return componentColor;
    }
  }
  function variant() {
    var componentVariant = badge.getAttribute("variant");
    if (componentVariant == null) {
      return "subtle";
    } else {
      return componentVariant;
    }
  }
  function size() {
    var componentSize = badge.getAttribute("size");
    if (componentSize == null) {
      return 13;
    } else {
      return componentSize;
    }
  }
  switch (variant()) {
    case "subtle": {
      badge.style.backgroundColor = colorChanger(0.8, colorScheme());
      badge.style.color = colorChanger(-0.4, colorScheme());
      break;
    }
    case "outline": {
      badge.style.backgroundColor = "transparent";
      badge.style.color = colorScheme();
      badge.style.outline = `1px solid ${colorChanger(0.5, colorScheme())}`;
      badge.style.outlineOffset = "-1px";
      break;
    }
    case "solid": {
      badge.style.backgroundColor = colorScheme();
      badge.style.color = "#fff";
    }
  }
  badge.style.display = "inline-block";
  badge.style.padding = `${size() / 5}px ${size() / 1.5}px`;
  badge.style.borderRadius = badge.scrollHeight / 2 + "px";
  badge.style.fontSize = size() + "px";
  badge.style.fontWeight = 600;
});
// button
document.querySelectorAll("button").forEach((btn) => {
  function colorScheme() {
    var componentColor = btn.getAttribute("colorScheme");
    var type = btn.getAttribute("type");
    if (componentColor == null) {
      switch (type) {
        case "success": {
          return "#38a169";
          break;
        }
        case "error": {
          return "#e53e3e";
          break;
        }
        case "warning": {
          return "#dd6b20";
          break;
        }
        case "info": {
          return "#3182ce";
          break;
        }
        default: {
          return "#007AFF";
        }
      }
    } else {
      return componentColor;
    }
  }
  function variant() {
    var componentVariant = btn.getAttribute("variant");
    if (componentVariant == null) {
      return "primary";
    } else {
      return componentVariant;
    }
  }
  function size() {
    var componentSize = btn.getAttribute("size");
    if (componentSize == null) {
      return 15;
    } else {
      return componentSize;
    }
  }
  switch (variant()) {
    case "primary": {
      btn.style.backgroundColor = colorScheme();
      btn.style.border = "0 solid transparent";
      btn.style.color = "#fff";
      btn.addEventListener("mouseover", function () {
        this.style.backgroundColor = colorChanger(-0.2, colorScheme());
      });
      btn.addEventListener("mouseleave", function () {
        this.style.backgroundColor = colorScheme();
      });
      btn.addEventListener("mousedown", function () {
        this.style.backgroundColor = colorChanger(-0.4, colorScheme());
      });
      btn.addEventListener("mouseup", function () {
        this.style.backgroundColor = colorChanger(-0.2, colorScheme());
      });
      break;
    }
    case "secondary": {
      btn.style.backgroundColor = colorChanger(0.88, "#000");
      btn.style.border = "0 solid transparent";
      btn.style.outline = "0";
      btn.style.color = "#000";
      btn.addEventListener("mouseover", function () {
        this.style.backgroundColor = colorChanger(0.8, "#000");
      });
      btn.addEventListener("mouseleave", function () {
        this.style.backgroundColor = colorChanger(0.88, "#000");
      });
      btn.addEventListener("mousedown", function () {
        this.style.backgroundColor = colorChanger(0.75, "#000");
      });
      btn.addEventListener("mouseup", function () {
        this.style.backgroundColor = colorChanger(0.8, "#000");
      });
      break;
    }
  }
  btn.style.fontSize = size() + "px";
  btn.style.fontWeight = 400;
  btn.style.cursor = "pointer";
  btn.style.padding = `${size() / 6}px ${size() / 1.5}px`;
  btn.style.borderRadius = size() / 2.3 + "px";
  btn.style.userSelect = "none";
  if (btn.hasAttribute("disabled") == true) {
    btn.style.backgroundColor = "#F4F5F5";
    btn.style.color = "#B7B8B8";
    btn.style.pointerEvents = "none";
  }
});
// menu
document.querySelectorAll("menu").forEach((menu) => {
  menu.style.backgroundColor = "#F2F2F7";
  menu.style.padding = `${size()}px 0`;
  function size() {
    var componentSize = menu.getAttribute("size");
    if (componentSize == null) {
      return 14;
    } else {
      return componentSize;
    }
  }
  function color() {
    var componentColor = menu.getAttribute("color");
    if (componentColor == null) {
      return "#000";
    } else {
      return componentColor;
    }
  }
  menu.querySelectorAll("menuStack").forEach((stack) => {
    if (stack.getAttribute("title" == null)) {
      console.error("Please type the title name for the stack.");
    } else {
      // prettier-ignore
      stack.innerHTML = `
      <p style="text-transform: uppercase; color: rgba(0, 0, 0, 0.3); font-weight: 700; font-size: ${size() / 1.25}px; margin-bottom: ${size() / 4}px; margin-left: ${size() / 1.2}px;">${stack.getAttribute("title")}</p>
      <div style="border-bottom: 1px solid ${colorChanger(0.8, color())}; border-top: 1px solid ${colorChanger(0.8, color())}; background-color: #fff;">${stack.innerHTML}</div>
      `;
    }
    stack.style.display = "block";
    stack.querySelectorAll("menuButton").forEach((btn) => {
      // prettier-ignore
      btn.innerHTML = `
      <div style="border-bottom: 1px solid ${colorChanger(0.8, color())}; width: 100%; padding: ${size() / 2}px ${size() / 1.2}px ${size() / 2}px 0;">${btn.innerText}</div>
      `;
      btn.style.paddingLeft = size() / 1.2 + "px";
      btn.style.fontSize = size() + "px";
      btn.style.borderRadius = 0;
      btn.style.cursor = "pointer";
      btn.style.display = "flex";
      btn.style.alignItems = "center";
      btn.style.gap = size() / 2 + "px";
      btn.style.width = "100%";
      btn.style.userSelect = "none";
      btn.addEventListener("mouseover", function () {
        this.style.backgroundColor = colorChanger(0.95, color());
      });
      btn.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "#fff";
      });
      btn.addEventListener("mousedown", function () {
        this.style.backgroundColor = colorChanger(0.92, color());
      });
      btn.addEventListener("mouseup", function () {
        this.style.backgroundColor = colorChanger(0.95, color());
      });
    });
    stack.querySelectorAll("menuButton:last-child").forEach((btn) => {
      btn.querySelectorAll("div").forEach((div) => {
        div.style.borderBottom = 0;
      });
    });
  });
  menu.querySelectorAll("menuStack:not(:last-child)").forEach((stack) => {
    function size() {
      var componentSize = stack.parentElement.getAttribute("size");
      if (componentSize == null) {
        return 16;
      } else {
        return componentSize;
      }
    }
    stack.style.marginBottom = size() + "px";
  });
});
// text
document.querySelectorAll("text").forEach((text) => {
  function size() {
    var componentSize = text.getAttribute("size");
    if (componentSize == null) {
      return 16;
    } else {
      return componentSize;
    }
  }
  function weight() {
    var componentWeight = text.getAttribute("weight");
    if (componentWeight == null) {
      return 16;
    } else {
      return componentWeight;
    }
  }
  function color() {
    var componentColor = text.getAttribute("color");
    if (componentColor == null) {
      return "#000";
    } else {
      return componentColor;
    }
  }
  function align() {
    var componentAlign = text.getAttribute("align");
    if (componentAlign == null) {
      return "left";
    } else {
      return componentAlign;
    }
  }
  function display() {
    var componentDisplay = text.getAttribute("display");
    if (componentDisplay == null) {
      return "inline";
    } else {
      return componentDisplay;
    }
  }
  function padding() {
    var componentPadding = text.getAttribute("padding");
    if (componentPadding == null) {
      return 0;
    } else {
      return componentPadding;
    }
  }
  function margin() {
    var componentMargin = text.getAttribute("margin");
    if (componentMargin == null) {
      return 0;
    } else {
      return componentMargin;
    }
  }
  text.style.padding = padding();
  text.style.margin = margin();
  text.style.fontSize = size() + "px";
  text.style.fontWeight = weight();
  text.style.color = color();
  text.style.textAlign = align();
  text.style.display = display();
  var highlightQuery = text.getAttribute("highlightQuery");
  if (highlightQuery == null) {
    return;
  } else {
    // prettier-ignore
    text.innerHTML = text.innerText.replaceAll(
      highlightQuery,
      `<span style="background-color: ${text.getAttribute("highlightBg")}; color: ${text.getAttribute("highlightFg")}">${highlightQuery}</span>`
    );
  }
});
// divider
document.querySelectorAll("divider").forEach((divider) => {
  function background() {
    var componentBg = divider.getAttribute("color");
    if (componentBg == null) {
      return "#000";
    } else {
      return componentBg;
    }
  }
  divider.style.display = "block";
  divider.style.height = "1px";
  divider.style.width = "100%";
  divider.style.backgroundColor = background();
});
// image
document.querySelectorAll("photo").forEach((img) => {
  // prettier-ignore
  img.innerHTML = `<img src="${img.getAttribute("src")}" height="${img.getAttribute("height")}" width="${img.getAttribute("width")}" style="display: block; transition: .2s ${easing}">`;
  img.style.overflow = "hidden";
  img.style.display = "block";
  img.addEventListener("mouseover", function () {
    this.querySelector("img").style.transform = "scale(1.1)";
  });
  img.addEventListener("mouseleave", function () {
    this.querySelector("img").style.transform = "scale(1)";
  });
});
document.querySelectorAll("checkBox").forEach((check) => {
  function className() {
    var componentClassName = check.getAttribute("class");
    if (componentClassName == null) {
      return "";
    } else {
      return componentClassName;
    }
  }
  function id() {
    var componentid = check.getAttribute("id");
    if (componentid == null) {
      return "";
    } else {
      return componentid;
    }
  }
  function size() {
    var componentSize = check.getAttribute("size");
    if (componentSize == null) {
      return "16";
    } else {
      return componentSize;
    }
  }
  function color() {
    var componentColor = check.getAttribute("color");
    if (componentColor == null) {
      return "#007AFF";
    } else {
      return componentColor;
    }
  }
  check.innerHTML = `<label><input type="checkbox" class="${className()}" id="${id()}" /></label>`;
  check.setAttribute("class", "");
  check.setAttribute("id", "");
  var label = check.querySelector("label");
  label.insertAdjacentHTML(
    "beforeend",
    `
    <svg width="${size()}" height="${size()}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 50%; left: 50%; transition: .2s ${easing}">
      <path d="M6.96143 13.687C7.40576 13.687 7.75488 13.5156 7.99609 13.1602L13.9058 4.15283C14.0771 3.89258 14.147 3.64502 14.147 3.4165C14.147 2.80078 13.6772 2.34375 13.0425 2.34375C12.6108 2.34375 12.3379 2.50244 12.0713 2.91504L6.93604 11.0146L4.3335 7.82178C4.09229 7.52979 3.82568 7.40283 3.45752 7.40283C2.81641 7.40283 2.35303 7.85986 2.35303 8.48193C2.35303 8.76123 2.43555 9.00244 2.67676 9.27539L5.95215 13.2109C6.2251 13.5347 6.54248 13.687 6.96143 13.687Z" fill="#fff"/>
    </svg>
  `
  );
  var input = check.querySelector("input");
  input.style.opacity = 0;
  input.style.cursor = "pointer";
  label.style.position = "relative";
  label.style.display = "block";
  label.style.cursor = "pointer";
  label.style.height = size() + "px";
  label.style.width = size() + "px";
  label.style.border = "1px solid rgba(0, 0, 0, 0.26)";
  label.style.borderRadius = size() / 4 + "px";
  label.style.transition = `.2s ${easing}`;
  // prettier-ignore
  label.querySelector("svg").style.transform = "translate(-50%, -10%)";
  label.querySelector("svg").style.opacity = "0";
  label.addEventListener("click", function () {
    if (input.checked == true) {
      this.style.backgroundColor = color();
      this.style.border = "1px solid transparent";
      // prettier-ignore
      this.querySelector("svg").style.transform = "translate(-50%, -50%)";
      this.querySelector("svg").style.opacity = 1;
    } else {
      this.style.backgroundColor = "#fff";
      this.style.border = "1px solid rgba(0, 0, 0, 0.26)";
      // prettier-ignore
      this.querySelector("svg").style.transform = "translate(-50%, -10%)";
      this.querySelector("svg").style.opacity = 0;
    }
  });
  if (check.hasAttribute("checked") == true) {
    check.querySelector("input").checked = true;
    label.style.backgroundColor = color();
    label.style.border = "1px solid transparent";
    label.querySelector("svg").style.opacity = 1;
    label.querySelector("svg").style.transform = "translate(-50%, -50%)";
  }
  if (check.hasAttribute("disabled") == true) {
    check.style.pointerEvents = "none";
    check.style.opacity = 0.5;
  }
});
document.querySelectorAll("radio").forEach((radio) => {
  function className() {
    var componentClassName = radio.getAttribute("class");
    if (componentClassName == null) {
      return "";
    } else {
      return componentClassName;
    }
  }
  function id() {
    var componentid = radio.getAttribute("id");
    if (componentid == null) {
      return "";
    } else {
      return componentid;
    }
  }
  function size() {
    var componentSize = radio.getAttribute("size");
    if (componentSize == null) {
      return "16";
    } else {
      return componentSize;
    }
  }
  function color() {
    var componentColor = radio.getAttribute("color");
    if (componentColor == null) {
      return "#007AFF";
    } else {
      return componentColor;
    }
  }
  const newRadio = document.createElement("label");
  newRadio.innerHTML = `<div><input type="radio" name="radio" class="${className()}" id="${id()}"></div>`;
  radio.parentNode.replaceChild(newRadio, radio);
  const div = newRadio.querySelector("div");
  const input = newRadio.querySelector("input");
  input.style.cursor = "pointer";
  input.style.opacity = 0;
  div.style.height = div.style.width = size() + "px";
  div.style.border = `1px solid rgba(0, 0, 0, 0.26)`;
  div.style.backgroundColor = "#fff";
  div.style.borderRadius = "50%";
  div.style.cursor = "pointer";
  div.style.transition = `.2s ${easing}`;
  newRadio.addEventListener("click", function () {
    // prettier-ignore
    this.parentElement.parentElement.querySelectorAll("div:has(> input)").forEach((div) => {
      div.style.border = `1px solid rgba(0, 0, 0, 0.26)`;
    });
    this.querySelector("div").style.border = `${size() / 4}px solid ${color()}`;
  });
  if (radio.hasAttribute("checked") == true) {
    input.checked = true;
    // prettier-ignore
    newRadio.parentElement.parentElement.querySelectorAll("div:has(> input)").forEach((div) => {
      div.style.border = `1px solid rgba(0, 0, 0, 0.26)`;
    });
    div.style.border = `${size() / 4}px solid ${color()}`;
  }
  if (radio.hasAttribute("disabled") == true) {
    newRadio.style.pointerEvents = "none";
    newRadio.style.opacity = "0.5";
  }
});
