/// <reference path="../node_modules/@types/p5/global.d.ts" />
import "p5";
import P5 from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";

// Creating the sketch itself
const sketch = (p5: P5) => {
  p5.randomGaussian();
  let p = p5.PI;
  let r = 300;
  const margin = 40;
  function randomChord() {
    r = 300;
    if (p > p5.PI / 4) p -= 0.0009;
    else p = p5.PI;
    // find a random point on a circle

    let angle1 = p5.random(p5.HALF_PI + p, 2 * p5.PI);
    let xpos1 = r + r * p5.cos(angle1) + margin;
    let ypos1 = r + r * p5.sin(angle1) + margin;

    // find another random point on the circle
    let angle2 = p5.random(p5.HALF_PI + p, p5.PI * 2.16);
    let xpos2 = r + r * p5.cos(angle2) + margin;
    let ypos2 = r + r * p5.sin(angle2) + margin;

    p5.stroke(p5.random(0, 70), p5.random(150, 190), p5.random(220, 235), 25);

    // draw a line between them
    //p5.strokeWeight(0.2);

    p5.line(xpos1, ypos1, xpos2, ypos2);

    if (1 === 1) {
      r = 300;
      let angle1 = p5.random(0, 2 * p5.PI);
      let xpos1 = r + r * p5.cos(angle1) + margin / 0.99;
      let ypos1 = r + r * p5.sin(angle1) + margin / 0.99;

      // find another random point on the circle
      let angle2 = p5.random(0, p5.PI * 2.16);
      let xpos2 = r + r * p5.cos(angle2) + margin / 0.99;
      let ypos2 = r + r * p5.sin(angle2) + margin / 0.99;

      p5.stroke(255, 255, 255, 7);

      // draw a line between them
      p5.strokeWeight(0.1);

      p5.line(xpos1, ypos1, xpos2, ypos2);
    }

    if (p5.random() < 0.001) {
      let angle1 = p5.random(0, 2 * p5.PI);
      let rr = p5.random(r * 1.2, r * 1.7);
      let xpos1 = r + rr * p5.cos(angle1) + margin;
      let ypos1 = r + rr * p5.sin(angle1) + margin;
      let rrr = p5.randomGaussian(1, 20);
      p5.fill(0xff, 0xfb, 0xd4, 200);
      p5.circle(xpos1, ypos1, rrr);
      p5.fill(0xef, 0xd1, 0x7f, 6);

      p5.circle(xpos1, ypos1, rrr * 1.4);
      p5.fill(0xef, 0xd1, 0x7f, 4);
      p5.circle(xpos1, ypos1, rrr * 2);
      p5.fill(0xef, 0xd1, 0x7f, 2);
      p5.circle(xpos1, ypos1, rrr * 3);
      p5.fill(0xef, 0xd1, 0x7f, 2);
      p5.circle(xpos1, ypos1, rrr * 5);
      p5.fill(0xef, 0xd1, 0x7f, 4);
      p5.circle(xpos1, ypos1, rrr * 20);
      p5.dr;
    }
  }

  // The sketch setup method
  p5.setup = () => {
    p5.createCanvas(900, 800);
    p5.background(0);

    // translucent stroke using alpha value
    p5.strokeWeight(5);
    //p5.noSmooth();
    //p5.pixelDensity(1);
    // p5.frameRate(910);
  };

  // The sketch draw method
  p5.draw = () => {
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
  };
};

new P5(sketch);
