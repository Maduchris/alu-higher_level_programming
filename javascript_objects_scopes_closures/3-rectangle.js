#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w = parseInt(W)) > 0 && (h = parseInt(h)) > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    console.log(('X'.repeat(this.width) + '\n').repeat(this.height - 1) + 'X'.repeat(this.widht));
  }
}
module.exports = Rectangle;