var fontLink =
  "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')";
var fontName = "Open Sans, sans-serif";
document.head.insertAdjacentHTML(
  "afterbegin",
  `
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
const easing = "ease";
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
  function height() {
    var componentHeight = box.getAttribute("height");
    if (componentHeight == null) {
      return "fit-content";
    } else {
      return componentHeight;
    }
  }
  box.style.width = width();
  box.style.height = height();
  box.style.display = "block";
  box.style.padding = padding() + "px";
  box.style.margin = margin() + "px";
  box.style.border = border();
  box.style.borderRadius = rounded() + "px";
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
  function size() {
    var componentSize = accordion.getAttribute("size");
    if (componentSize == null) {
      return 16;
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
  accordion.querySelectorAll("accordionItem").forEach((item) => {
    item.style.display = "block";
    item.style.borderTop = `1px solid ${colorChanger(0.75, colorScheme())}`;
  });
  accordion.querySelectorAll("accordionItem:last-child").forEach((item) => {
    item.style.display = "block";
    item.style.borderBottom = `1px solid ${colorChanger(0.75, colorScheme())}`;
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
    btn.style.transition = `0.08s ${easing}`;
    btn.style.backgroundColor = "#fff";
    btn.style.fontWeight = "400";
    btn.addEventListener("mouseover", function () {
      this.style.backgroundColor = colorChanger(0.89, colorScheme());
    });
    btn.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#fff";
    });
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.height == panel.scrollHeight + "px") {
        panel.style.height = 0;
        panel.style.opacity = 0;
        this.querySelector("accordionIcon").style.transform = "rotate(45deg)";
      } else {
        panel.style.height = panel.scrollHeight + "px";
        panel.style.opacity = 1;
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
    <div style="height: 100%; width: 100%; background-color: transparent; border: 2px solid ${colorScheme()}; border-top: none; border-left: none;"></div>
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
      return 14;
    } else {
      return componentSize;
    }
  }
  switch (variant()) {
    case "subtle": {
      badge.style.backgroundColor = colorChanger(0.7, colorScheme());
      badge.style.color = colorChanger(-0.4, colorScheme());
      break;
    }
    case "outline": {
      badge.style.backgroundColor = "transparent";
      badge.style.color = colorScheme();
      badge.style.outline = `1px solid ${colorScheme()}`;
      badge.style.outlineOffset = "-1px";
      break;
    }
    case "solid": {
      badge.style.backgroundColor = colorScheme();
      badge.style.color = "#fff";
    }
  }
  badge.style.display = "inline-block";
  badge.style.padding = `${size() / 8}px ${size() / 4}px`;
  badge.style.borderRadius = size() / 4 + "px";
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
          return "#718096";
        }
      }
    } else {
      return componentColor;
    }
  }
  function variant() {
    var componentVariant = btn.getAttribute("variant");
    if (componentVariant == null) {
      return "solid";
    } else {
      return componentVariant;
    }
  }
  function size() {
    var componentSize = btn.getAttribute("size");
    if (componentSize == null) {
      return 16;
    } else {
      return componentSize;
    }
  }
  switch (variant()) {
    case "solid": {
      btn.style.backgroundColor = colorScheme();
      btn.style.border = "0 solid transparent";
      btn.style.color = "#fff";
      btn.addEventListener("mouseover", function () {
        this.style.backgroundColor = colorChanger(-0.3, colorScheme());
      });
      btn.addEventListener("mouseleave", function () {
        this.style.backgroundColor = colorScheme();
      });
      btn.addEventListener("mousedown", function () {
        this.style.backgroundColor = colorChanger(-0.6, colorScheme());
      });
      btn.addEventListener("mouseup", function () {
        this.style.backgroundColor = colorChanger(-0.3, colorScheme());
      });
      break;
    }
    case "outline": {
      btn.style.backgroundColor = "transparent";
      btn.style.border = "0 solid transparent";
      btn.style.outline = `1px solid ${colorScheme()}`;
      btn.style.outlineOffset = -1;
      btn.style.color = colorScheme();
      btn.addEventListener("mouseover", function () {
        this.style.backgroundColor = colorChanger(0.75, colorScheme());
      });
      btn.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "transparent";
      });
      btn.addEventListener("mousedown", function () {
        this.style.backgroundColor = colorChanger(0.65, colorScheme());
      });
      btn.addEventListener("mouseup", function () {
        this.style.backgroundColor = colorChanger(0.75, colorScheme());
      });
      break;
    }
    case "ghost": {
      btn.style.backgroundColor = "transparent";
      btn.style.border = "0 solid transparent";
      btn.style.outline = `0 solid transparent`;
      btn.style.color = colorScheme();
      btn.addEventListener("mouseover", function () {
        this.style.backgroundColor = colorChanger(0.8, colorScheme());
      });
      btn.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "transparent";
      });
      btn.addEventListener("mousedown", function () {
        this.style.backgroundColor = colorChanger(0.7, colorScheme());
      });
      btn.addEventListener("mouseup", function () {
        this.style.backgroundColor = colorChanger(0.8, colorScheme());
      });
      break;
    }
  }
  btn.style.fontSize = size() + "px";
  btn.style.fontWeight = 600;
  btn.style.transition = `0.15s ${easing}`;
  btn.style.cursor = "pointer";
  btn.style.padding = `${size() / 2}px ${size() / 1.5}px`;
  btn.style.borderRadius = size() / 2.5 + "px";
  btn.style.userSelect = "none";
  btn.addEventListener("click", function () {
    this.style.boxShadow = `0 0 0 3px ${colorChanger(0.5, colorScheme())}`;
  });
  btn.addEventListener("blur", function () {
    this.style.boxShadow = `0 0 0 0 transparent`;
  });
});
