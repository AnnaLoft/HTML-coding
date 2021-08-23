
const config = {
  curvesNum    : 40,
  waveSpeed    : .3,
  wavesToBlend : 4,  
}

class WaveNoise {
  constructor() {
    this.wavesSet = [];
  }
  addWaves(requiredWaves) {
    for(let i = 0 ; i < requiredWaves ; ++i) {
      let randomAngle = Math.random() * 360; 
      this.wavesSet.push(randomAngle);
    }
  }
  getWave() {
    let blendedWave = 0;
    for (let e of this.wavesSet) {
      blendedWave += Math.sin(e / 180 * Math.PI); 
    }
    return (blendedWave / this.wavesSet.length + 1) / 2; 
  }
  update() {
    this.wavesSet.forEach((e, i) => {
      let r = (i + 1) * config.waveSpeed;
      this.wavesSet[i] = (e + r) % 360;
    });
  }
}

class Animation {
  constructor() {
    this.cnv = null;
    this.ctx = null;
    this.size = {w: 0, h: 0, cx: 0, cy: 0};
    this.controls = [];
    this.controlsNum = 3;    
  }
  init() {                   
    this.createCanvas();
    this.createControls();
    this.updateAnimation();
  }
  createCanvas() {
    this.cnv = document.createElement("canvas");
    this.ctx = this.cnv.getContext('2d');
    this.setCanvasSize();
    document.body.appendChild(this.cnv);
    window.addEventListener(`resize`, () => this.setCanvasSize());
  }
  setCanvasSize() {
    this.size.w  = this.cnv.width  = window.innerWidth;
    this.size.h  = this.cnv.height = window.innerHeight;
    this.size.cx = this.size.w / 2; 
    this.size.cy = this.size.h / 2;
  }
  createControls() {
    for (let i = 0 ; i < (config.curvesNum * 4) ; ++i) {
      let control = new WaveNoise();                                 
      control.addWaves(config.wavesToBlend);
      this.controls.push(control);
    }
  }
  updateControls() {
    this.controls.forEach( e => e.update() );
  }
  updateCurves() {
    let motionRadius = 250
    let radius = 300;
    let c = this.controls;
    for (let i = 0 ; i < config.curvesNum ; ++i) {
      
      let angle = (360 / (config.curvesNum * 2) * i) / 180 * Math.PI;
      let cos = Math.cos(angle);
      let sin = Math.sin(angle);
      let _startX = cos * radius;
      let _startY = sin * radius;
      let _endX = -_startX;
      let _endY = -_startY;
      
      let _controlX1 = c[i].getWave()     * motionRadius + this.size.cx; 
      let _controlY1 = c[i * 2].getWave() * motionRadius + this.size.cy; 
      let _controlX2 = c[i * 3].getWave() * motionRadius + this.size.cx; 
      let _controlY2 = c[i * 4].getWave(); 
      let curveParam = {
        startX     : _startX + this.size.cx,
        startY     : _startY + this.size.cy,
        controlX1  : _controlX1, 
        controlY1  : _controlY1, 
        controlX2  : _controlX2, 
        controlY2  : _controlY2 * motionRadius + this.size.cy, 
        endX       : _endX + this.size.cx, 
        endY       : _endY + this.size.cy,
        alpha      : _controlY2
      }
    
    this.drawCurve(curveParam);
    }
  }
  drawCurve({startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, alpha}) {
    this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    this.ctx.stroke();
  }
  updateCanvas() {
    this.ctx.fillStyle = `rgb(22, 22, 25)`;
    this.ctx.fillRect(0, 0, this.size.w, this.size.h);
  }
  updateAnimation() {
    this.updateCanvas();  
    this.updateCurves();
    this.updateControls();

    window.requestAnimationFrame(() => this.updateAnimation());
  }
}

window.onload = () => {
  new Animation().init();
}
