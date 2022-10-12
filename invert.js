//https://thewebdev.info/2021/08/14/how-to-invert-color-on-all-elements-of-a-page-with-javascript/

const css = `
img, .btn, .dropbtn, .dropbtn2, .nav-item, .dropdown-content {
  -webkit-filter: invert(100%);
  -moz-filter: invert(100%);
  -o-filter: invert(100%);
  -ms-filter: invert(100%);
  z-index: 999;
}
html {
    -webkit-filter: invert(100%);
    -moz-filter: invert(100%);
    -o-filter: invert(100%);
    -ms-filter: invert(100%);
}`

const head = document.head
const style = document.createElement('style')

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);