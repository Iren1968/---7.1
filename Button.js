class Button {
  constructor(width, length, type, color) {
    this.width = width;
    this.length = length;
    this.type = type;
    this.color = color;
    this.props = { width, length, type, color };
  }
  onClick() {
    console.log(this.props);
  }
}

let myNewOneClick = new Button(5, 4, 'button', 'green');
console.log(myNewOneClick);

function testButton() {
  !myNewOneClick.hasOwnProperty(width, length, type, color);
}
console.log(
  myNewOneClick.width,
  myNewOneClick.length,
  myNewOneClick.type,
  myNewOneClick.color
);
