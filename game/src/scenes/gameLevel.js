import { Scene } from "../scene";
import { SpriteList  } from "../spriteList";

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.tiles = new SpriteList ({
            imageName: 'tiles',
            imageWidth: 640,
            imageHeight: 640
        });
        this.flower = this.tiles.getSprite(3);
        this.flower.setXY (10, 10);
        this.orcTiles = new SpriteList ({
            imageName: 'orc',
            imageWidth: 832,
            imageHeight: 1344,
        });
        this.orc = this.orcTiles.getAnimation([1,2,3,4,5,6,7], 160);
    }

    init(){
        super.init();
    }
    update(time) {
        this.orc.update(time);
        }

    render(time) {
        this.update(time);
        this.game.screen.fill('#000000');
        this.game.screen.drawSprite(this.flower);
        this.game.screen.drawSprite(this.orc);
        super.render(time);
    }
}