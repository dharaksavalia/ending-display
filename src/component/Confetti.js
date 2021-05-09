import { TweenLite, TweenMax, Linear, Sine } from 'gsap/all';
import React, { useEffect } from 'react';
import './Confetti.css';
function Confetti() {
    const animm = (elm, h, w) => {
        TweenMax.to(elm, R(6, 15), {y: h + 100, ease: Linear.easeOut, repeat: -1, delay: -10});
        TweenMax.to(elm, R(4, 8), {x: '+=200', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut});
        TweenMax.to(elm, R(2, 8), {rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -2});
      };
    
    const R =(min, max) => { return min + Math.random() * (max - min); };
    useEffect(()=>{
        TweenLite.set('#container', {perspective: 600});
    TweenLite.set('img', {xPercent: '-50%', yPercent: '-50%'});

    const total = 50;
    const warp = document.getElementById('confetti-id');
    const w = window.innerWidth;
    const h = window.innerHeight;

    for (let i = 0; i < total; i++) {
      const Div = document.createElement('div');
      TweenLite.set(Div, {attr: {class: 'confetti-dot'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
      warp.appendChild(Div);
      animm(Div, h, w);
    }
    const url = "http://streaming.tdiradio.com:8000/house.mp3";
    const audio = new Audio(url);
    audio.play();
    });
    return (
      <div id="confetti-id">
      </div>
    );
  }
  
  export default Confetti;
  