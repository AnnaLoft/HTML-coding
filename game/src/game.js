 import { Screen } from "./screen";
 import { Loading } from "./scenes/loading";
import { Scene } from "./scene";
import { Menu } from "./scenes/menu";
import { GameLevel } from "./scenes/gameLevel";
import { ControlState } from "./controlState";

 export class Game {
     constructor({width = 640, height = 640} = {}) {
        this.screen = new Screen(width, height);
        this.screen.loadImages({
            orc: '/img/orc.png',
            player: '/img/player.png',
            tiles: '/img/textures.png',
            title: '/img/title.jpg'
        });
        this.control = new ControlState();
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            gameLevel: new GameLevel(this),
        };
        this.currentScene = this.scenes.loading;
        this.currentScene.init();

     }

     chageScene(status){
         switch(status) {
             case Scene.LOADED:
                 return this.scenes.menu;
                 break;
             case Scene.START_GAME:
                 return this.scenes.gameLevel;
             default:
                 return this.scenes.menu;
         }
     }
     
     frame(time){
         if (this.currentScene.status != Scene.WORKING) {
             this.currentScene = this.chageScene(this.currentScene.status);
             this.currentScene.init();
         }
         this.currentScene.render(time);
         requestAnimationFrame(time => this.frame(time));
     }
     run () {
         requestAnimationFrame (time => this.frame(time));
     }
 }