import { Router } from "./router.js";
import { Backgrounds } from "./events.js";
import { bgHome, bgUniverse, bgExplore } from "./background.js";

const background = Backgrounds({
  bgHome,
  bgExplore,
  bgUniverse
})

if(bgHome){
  bgHome.addEventListener('onclick', function(){
    background.backgroundHome();
  });
}

if(bgExplore){
  bgExplore.addEventListener('onclick', function(){
    background.backgroundExplore();
  });
}

if(bgUniverse){
  bgUniverse.addEventListener('onclick', function(){
    background.backgroundUniverse();
  });
}

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explore', '/pages/explore.html')

router.handle()


window.onpopstate = () => router.handle()
window.route = () => router.route()