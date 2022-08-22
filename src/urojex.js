var fontName = "'SFProDisplay', monospace";
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
document.head.insertAdjacentHTML(
  "afterbegin",
  `
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${fontName};
  }
  *::before, *::after {
    box-sizing: border-box;
  }
  ::selection {
    background-color: rgba(0, 103, 244, 0.25);
  }
  *::-webkit-scrollbar {
    width: 20px;
  }
  *::-webkit-scrollbar-track {
    background-color: #FAFAFA;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 0 3px #fafafa;
  }
  *::-webkit-scrollbar-thumb {
    appearance: none;
    background-color: #C1C1C1;
    border: 5px solid transparent;
    background-clip: content-box;
    border-radius: 20px;
  }
  *::-webkit-scrollbar-thumb:hover {
    appearance: none;
    background-color: ${colorChanger(-0.3, "#C1C1C1")};
  }
  </style>
`
);
const easing = "cubic-bezier(0, 0.55, 0.45, 1)";
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
  function shadow() {
    var componentShadow = box.getAttribute("shadow");
    if (componentShadow == null) {
      return "0 0 0 0 transparent";
    } else {
      return componentShadow;
    }
  }
  box.style.boxShadow = shadow();
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
  function display() {
    var componentDisplay = btn.getAttribute("block");
    if (componentDisplay == "true") {
      btn.style.width = "100%";
      return "block";
    } else if (componentDisplay == true) {
      return "inline-block";
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
  btn.style.display = display();
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
  check.style.display = "block";
  check.style.position = "relative";
  input.style.position = "absolute";
  input.style.opacity = 0;
  input.style.cursor = "pointer";
  input.style.height = input.style.width = 0;
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
  radio.style.display = "block";
  radio.style.position = "relative";
  input.style.position = "absolute";
  input.style.cursor = "pointer";
  input.style.opacity = 0;
  input.style.height = input.style.width = 0;
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
document.querySelectorAll("toggle").forEach((toggle) => {
  function className() {
    var componentClassName = toggle.getAttribute("class");
    if (componentClassName == null) {
      return "";
    } else {
      return componentClassName;
    }
  }
  function id() {
    var componentid = toggle.getAttribute("id");
    if (componentid == null) {
      return "";
    } else {
      return componentid;
    }
  }
  function size() {
    var componentSize = toggle.getAttribute("size");
    if (componentSize == null) {
      return "22";
    } else {
      return componentSize;
    }
  }
  function color() {
    var componentColor = toggle.getAttribute("color");
    if (componentColor == null) {
      return "#007AFF";
    } else {
      return componentColor;
    }
  }
  toggle.innerHTML = `
  <label>
    <input type="checkbox" class="${className()}" id="${id()}" />
    <div class="outer">
      <div class="inner"></div>
    </div>
  </label>`;
  toggle.setAttribute("class", "");
  toggle.setAttribute("id", "");
  var label = toggle.querySelector("label");
  var outer = toggle.querySelector(".outer");
  var inner = toggle.querySelector(".inner");
  var input = toggle.querySelector("input");
  toggle.style.display = "block";
  toggle.style.position = "relative";
  input.style.position = "absolute";
  label.style.cursor = "pointer";
  input.style.opacity = 0;
  outer.style.height = size() + "px";
  outer.style.width = size() * 1.6 + "px";
  outer.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
  outer.style.borderRadius = outer.scrollHeight / 2 + "px";
  outer.style.position = "relative";
  inner.style.height = inner.style.width = size() - 2 + "px";
  inner.style.backgroundColor = "#fff";
  inner.style.borderRadius = "50%";
  inner.style.position = "absolute";
  inner.style.left = "1px";
  inner.style.top = "1px";
  outer.style.transition = inner.style.transition = `.2s ${easing}`;
  label.addEventListener("click", function () {
    if (input.checked) {
      outer.style.backgroundColor = color();
      inner.style.left = outer.scrollWidth - (size() - 2) - 1 + "px";
    } else {
      outer.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
      inner.style.left = "1px";
    }
  });
  if (toggle.hasAttribute("checked") == true) {
    input.checked = true;
    outer.style.backgroundColor = color();
    inner.style.left = outer.scrollWidth - (size() - 2) - 1 + "px";
  }
  if (toggle.hasAttribute("disabled") == true) {
    toggle.style.pointerEvents = "none";
    toggle.style.opacity = 0.5;
  }
});
document.querySelectorAll("slider").forEach((range) => {
  function className() {
    var componentClassName = range.getAttribute("class");
    if (componentClassName == null) {
      return "";
    } else {
      return componentClassName;
    }
  }
  function id() {
    var componentid = range.getAttribute("id");
    if (componentid == null) {
      return "";
    } else {
      return componentid;
    }
  }
  function value() {
    var componentValue = range.getAttribute("value");
    if (componentValue == null) {
      return 50;
    } else {
      return componentValue;
    }
  }
  function min() {
    var componentMin = range.getAttribute("min");
    if (componentMin == null) {
      return 0;
    } else {
      return componentMin;
    }
  }
  function max() {
    var componentMax = range.getAttribute("max");
    if (componentMax == null) {
      return 300;
    } else {
      return componentMax;
    }
  }
  function size() {
    var componentSize = range.getAttribute("size");
    if (componentSize == null) {
      return "300";
    } else {
      return componentSize;
    }
  }
  function color() {
    var componentColor = range.getAttribute("color");
    if (componentColor == null) {
      return "#007AFF";
    } else {
      return componentColor;
    }
  }
  range.innerHTML = `
  <input type="range" class="${className()}" id="${id()}" value="${value()}" min="${min()}" max="${max()}">
  `;
  range.setAttribute("class", "");
  range.setAttribute("id", "");
  var input = range.querySelector("input");
  input.style.display = "block";
  input.style.appearance = "none";
  input.style.borderRadius = input.scrollHeight / 2 + "px";
  input.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  input.style.width = size() + "px";
  input.style.height = "4px";
  input.addEventListener("input", slider);
  function slider() {
    var percent = (input.value / input.max) * 100;
    input.style.background = `linear-gradient(to right, ${color()} ${percent}%, rgba(0, 0, 0, 0.1) ${percent}%)`;
  }
  slider();
  if (range.hasAttribute("disabled") == true) {
    input.style.pointerEvents = "none";
    input.style.opacity = "0.5";
  }
});
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
}
input[type="range"]::-moz-track {
  -moz-appearance: none;
}
input[type="range"]::-ms-track {
  appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  -webkit-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background-color: ${colorChanger(0.9, "#000")};
}
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  -webkit-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background-color: ${colorChanger(0.9, "#000")};
}
input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  -webkit-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background-color: ${colorChanger(0.9, "#000")};
}
</style>
`
);
// text field
document.querySelectorAll("textField").forEach((field) => {
  function color() {
    var componentColor = field.getAttribute("color");
    if (componentColor == null) {
      return "#007AFF";
    } else {
      return componentColor;
    }
  }
  function className() {
    var componentClass = field.getAttribute("class");
    if (componentClass == null) {
      return "";
    } else {
      return componentClass;
    }
  }
  function id() {
    var componentId = field.getAttribute("id");
    if (componentId == null) {
      return "";
    } else {
      return componentId;
    }
  }
  function placeholder() {
    var componentplaceholder = field.getAttribute("placeholder");
    if (componentplaceholder == null) {
      return "";
    } else {
      return componentplaceholder;
    }
  }
  function value() {
    var componentVal = field.getAttribute("value");
    if (componentVal == null) {
      return "";
    } else {
      return componentVal;
    }
  }
  function type() {
    var componentType = field.getAttribute("type");
    if (componentType == null) {
      return "text";
    } else {
      return componentType;
    }
  }
  function size() {
    var componentSize = field.getAttribute("size");
    if (componentSize == null) {
      return 15;
    } else {
      return componentSize;
    }
  }
  function width() {
    var componentWidth = field.getAttribute("width");
    if (componentWidth == null) {
      return "200px";
    } else {
      return componentWidth;
    }
  }
  field.innerHTML = `<input type="${type()}" class="${className()}" id="${id()}" value="${value()}" placeholder="${placeholder()}">`;
  field.style.display = "block";
  field.style.width = "fit-content";
  field.style.position = "relative";
  var input = field.querySelector("input");
  input.style.outline = 0;
  input.style.padding = `${size() / 4}px ${size() / 2}px`;
  input.style.width = width();
  input.style.borderRadius = size() / 2 + "px";
  input.style.fontSize = size() + "px";
  // prettier-ignore
  field.insertAdjacentHTML(
    "beforeend",
    `
    <div class="clear" style="position: absolute; top: 50%; right: ${size() / 2}px; transform: translateY(-50%); background-color: red; width: ${size() / 1.2}px; height: ${size() / 1.2}px; border-radius: 50%; background-color: rgba(0, 0, 0, 0.4); display: flex; align-items: center; justify-content: center;">
      <svg width="${size() / 1.7}" height="${size() / 1.7}" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.691406 4.91504C0.527344 5.08203 0.518555 5.38965 0.697266 5.56543C0.875977 5.74414 1.18066 5.73828 1.34766 5.57129L3 3.91895L4.64941 5.56836C4.82227 5.74414 5.12109 5.74121 5.29688 5.5625C5.47559 5.38672 5.47559 5.08789 5.30273 4.91504L3.65332 3.26562L5.30273 1.61328C5.47559 1.44043 5.47559 1.1416 5.29688 0.96582C5.12109 0.787109 4.82227 0.787109 4.64941 0.959961L3 2.60938L1.34766 0.957031C1.18066 0.792969 0.873047 0.78418 0.697266 0.962891C0.521484 1.1416 0.527344 1.44629 0.691406 1.61328L2.34375 3.26562L0.691406 4.91504Z" fill="white"/>
      </svg>
    </div>
  `
  );
  var clear = field.querySelector(".clear");
  clear.style.display = "none";
  input.addEventListener("input", showClear);
  function showClear() {
    if (input.value != "") {
      clear.style.display = "flex";
    } else {
      clear.style.display = "none";
    }
  }
  showClear();
  clear.addEventListener("mouseover", function () {
    this.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    this.style.cursor = "pointer";
  });
  clear.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  });
  clear.addEventListener("click", function () {
    input.value = "";
    input.focus();
    this.style.display = "none";
  });
  var autocompleteQuery = field.getAttribute("autoCompleteQuery");
  if (autocompleteQuery != null) {
    var suggestionsList = field.getAttribute("autoCompleteQuery").split(/,\s+/);
    input.setAttribute("autocomplete", "off");
    field.insertAdjacentHTML("beforeend", `<ul id="suggestions"></ul>`);
    (function () {
      "use strict";
      let inputField = input;
      let ulField = field.querySelector("#suggestions");
      inputField.addEventListener("input", changeAutoComplete);
      ulField.addEventListener("click", selectItem);
      function changeAutoComplete({ target }) {
        let data = target.value;
        ulField.innerHTML = ``;
        if (data.length) {
          let autoCompleteValues = autoComplete(data);
          autoCompleteValues.forEach((value) => addItem(value));
        }
        var suggestions = field.querySelector("ul");
        var suggestionsItems = field.querySelectorAll("ul li");
        suggestions.style.position = "absolute";
        suggestions.style.bottom = 0;
        suggestions.style.left = 0;
        suggestions.style.transform = "translateY(calc(100% + 10px))";
        suggestions.style.display = "block";
        suggestions.style.minWidth = "150px";
        suggestions.style.backgroundColor = "#F4F5F5";
        suggestions.style.borderRadius = "5px";
        suggestions.style.boxShadow =
          "inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.16)";
        suggestions.style.overflow = "hidden";
        suggestionsItems.forEach((item) => {
          item.style.listStyle = "none";
          item.style.padding = "4px 12px";
          item.style.cursor = "pointer";
          item.addEventListener("mouseover", function () {
            this.style.backgroundColor = color();
            this.style.color = "#fff";
          });
          item.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "transparent";
            this.style.color = "#000";
          });
        });
      }
      function autoComplete(inputValue) {
        let destination = suggestionsList;
        return destination.filter((value) =>
          value.toLowerCase().includes(inputValue.toLowerCase())
        );
      }
      function addItem(value) {
        ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
      }
      function selectItem({ target }) {
        if (target.tagName === "LI") {
          inputField.value = target.textContent;
          ulField.innerHTML = ``;
          ulField.style.border = 0;
        }
      }
    })();
    var suggestions = field.querySelector("ul");
    var suggestionsItems = field.querySelectorAll("ul li");
    suggestions.style.position = "absolute";
    suggestions.style.bottom = 0;
    suggestions.style.left = 0;
    suggestions.style.transform = "translateY(calc(100% + 10px))";
    suggestions.style.display = "block";
    suggestions.style.backgroundColor = "#000";
    suggestions.style.zIndex = 1;
    suggestionsItems.forEach((item) => {
      item.style.listStyle = "none";
    });
  }
});
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
  input[type="text"],
  input[type="password"] {
    border: 1px solid ${colorChanger(0.75, "#000")};
    color: ${colorChanger(0.1, "#000")};
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
  }
  input[type="text"]:hover,
  input[type="password"]:hover {
    border-color: ${colorChanger(0.6, "#000")};
    color: ${colorChanger(0, "#000")};
  }
  input[type="text"]:focus,
  input[type="password"]:focus {
    border-color: rgba(0, 103, 244, 0.25);
    box-shadow: 0 0 0 2px rgba(0, 103, 244, 0.25);
    color: ${colorChanger(0, "#000")};
  }
</style>
`
);
// modal
document.querySelectorAll("modal").forEach((modal) => {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.zIndex = "1";
  overlay.style.height = "100vh";
  overlay.style.width = "100vw";
  overlay.style.backgroundColor = "transparent";
  overlay.style.pointerEvents = "none";
  overlay.style.transition = `.3s ${easing}`;
  document.body.appendChild(overlay);
  var btn = modal.querySelector("modalButton");
  var sheet = modal.querySelector("modalSheet");
  sheet.style.position = "fixed";
  sheet.style.top = "50%";
  sheet.style.left = "50%";
  sheet.style.transform = "translate(-50%, -30%) scale(1)";
  sheet.style.zIndex = 2;
  sheet.style.pointerEvents = "none";
  sheet.style.transition = `.4s cubic-bezier(0.22, 1, 0.36, 1)`;
  sheet.style.opacity = 0;
  sheet.style.width = sheet.style.height = "fit-content";
  // prettier-ignore
  sheet.insertAdjacentHTML(
    "beforeend",
    `
    <div class="clear" style="position: absolute; top: 6px; right: 6px; background-color: red; width: ${15 / 1.2}px; height: ${15 / 1.2}px; border-radius: 50%; background-color: rgba(0, 0, 0, 0.4); display: flex; align-items: center; justify-content: center;">
      <svg width="${15 / 1.7}" height="${15 / 1.7}" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.691406 4.91504C0.527344 5.08203 0.518555 5.38965 0.697266 5.56543C0.875977 5.74414 1.18066 5.73828 1.34766 5.57129L3 3.91895L4.64941 5.56836C4.82227 5.74414 5.12109 5.74121 5.29688 5.5625C5.47559 5.38672 5.47559 5.08789 5.30273 4.91504L3.65332 3.26562L5.30273 1.61328C5.47559 1.44043 5.47559 1.1416 5.29688 0.96582C5.12109 0.787109 4.82227 0.787109 4.64941 0.959961L3 2.60938L1.34766 0.957031C1.18066 0.792969 0.873047 0.78418 0.697266 0.962891C0.521484 1.1416 0.527344 1.44629 0.691406 1.61328L2.34375 3.26562L0.691406 4.91504Z" fill="white"/>
      </svg>
    </div>
  `
  );
  var clear = sheet.querySelector(".clear");
  clear.style.cursor = "pointer";
  clear.addEventListener("mouseover", function () {
    this.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  });
  clear.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  });
  btn.addEventListener("click", function () {
    overlay.style.pointerEvents = "all";
    overlay.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
    sheet.style.transform = "translate(-50%, -50%) scale(1)";
    sheet.style.pointerEvents = "all";
    sheet.style.opacity = 1;
    overlay.addEventListener("click", close);
    clear.addEventListener("click", close);
    function close() {
      overlay.style.pointerEvents = "none";
      overlay.style.backgroundColor = "transparent";
      sheet.style.transform = "translate(-50%, -30%) scale(1)";
      sheet.style.pointerEvents = "none";
      sheet.style.opacity = 0;
    }
  });
});
