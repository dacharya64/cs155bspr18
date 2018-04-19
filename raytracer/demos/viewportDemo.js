document.getElementById('title').innerHTML="Viewport Demo - Front, Top, Side, and Normal Views"


function runTest(){
screenSize=900;
renderSize=900;
screenW=screenSize;
screenH=screenSize;
canvas1.width=screenW;
canvas1.height=screenH;
canvas2.width=screenW;
canvas2.height=screenH;
canvas3.width=screenW;
canvas3.height=screenH;
canvas4.width=screenW;
canvas4.height=screenH;
imageW=renderSize;
imageH=renderSize;
const rendererFront = new Renderer(imageW,imageH,'canvas1');
const rendererTop = new Renderer(imageW,imageH, 'canvas2');
const rendererSide = new Renderer(imageW,imageH,'canvas3');
const renderer = new Renderer(imageW,imageH, 'canvas4');
const scene = new Scene('viewportDemo');
const camera = new Camera();
rendererFront.depth=1600;
rendererTop.depth=1600;
rendererSide.depth=1600;
renderer.depth=1600;

const sphere = new Sphere();
sphere.scale(new Vector3(5,5,5)).translate(new Vector3(0,0,0));

scene.addObject(sphere);


const light1 = new Light(new Vector3(0,0,25));
const light2 = new Light(new Vector3(0,25,0));
const light3 = new Light(new Vector3(25,0,0));
light1.intensity = 0.9;
light2.intensity = 0.9;
light3.intensity = 0.9;
light1.diffuseColor = Color.GREEN;
light1.specularColor = Color.WHITE;
light2.diffuseColor = Color.BLUE;
light2.specularColor = Color.WHITE;
light3.diffuseColor = Color.RED;
light3.specularColor = Color.WHITE;

scene.addLight(light1);
scene.addLight(light2);
scene.addLight(light3);

camera.translate(new Vector3(15,15,15));
camera.lookAt(new Vector3(0,0,0));

rendererFront.renderViewport('FRONT', scene, sphere, 5);
rendererTop.renderViewport('TOP', scene, sphere, 5);
rendererSide.renderViewport('SIDE', scene, sphere, 5);
renderer.render(scene,camera);

document.getElementById("loading").innerHTML = "";

}

setTimeout(runTest, 1000);
