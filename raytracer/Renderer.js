

class Renderer {
  constructor(w,h,id){
    this.width = w
    this.height = h
    this.id = id || 'canvas'
    this.depth = 1
  }

  drawPixel(i,j,c){
    var canvas = document.getElementById(this.id);
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d')
      ctx.fillStyle = c;
      var w = canvas.width
      var h = canvas.height
      var wp = w/this.width
      var hp = h/this.height
      ctx.fillRect(i*wp,(this.height-j-1)*hp,wp,hp);
    }
  }

  render(scene,camera){
    for(let i=0;i<this.width;i++){
      //document.getElementById('status').innerHTML= ""+i+"/"+this.width
      if (i%100==0) console.log('rendered '+i+' of '+this.width)
      for(let j=0; j<this.height; j++){
        const x = 2*i/this.width-1 // x goes from -1 to 1 in this.width steps
        const y = 2*j/this.height-1 // y goes from -1 to 1 in this.height steps
        const r = camera.createRay(x,y) // this creates the ray for pixel (i,j)
        const pixelColor = scene.getColorForRay(r,this.depth)
        this.drawPixel(i,j,pixelColor.to255())
      }
    }
  }
  renderOrthographic(view, scene, object, zoom){
    const camera = new Camera();
    const origin = new Vector3(0,0,0);
    switch(view){
      case 'SIDE':
        camera.translate(new Vector3(object.position.x + (object.scaleX * zoom), object.position.y, object.position.z));
        break;
      case 'TOP':
        camera.translate(new Vector3(object.position.x, object.position.y + (object.scaleY * zoom), object.position.z));
        break;
      case 'FRONT':
        camera.translate(new Vector3(object.position.x, object.position.y, object.position.z + (object.scaleZ * zoom)));
        break;
    }
    camera.lookAt(origin);
    console.log(camera);
    console.log(object);
    this.render(scene, camera);
  }
  renderOrthographicWithCamera(view, scene, object, zoom, camera){
    const origin = new Vector3(0,0,0);
    switch(view){
      case 'SIDE':
        camera.translate(new Vector3(object.position.x + (object.scaleX * zoom), object.position.y, object.position.z));
        break;
      case 'TOP':
        camera.translate(new Vector3(object.position.x, object.position.y + (object.scaleY * zoom), object.position.z));
        break;
      case 'FRONT':
        camera.translate(new Vector3(object.position.x, object.position.y, object.position.z + (object.scaleZ * zoom)));
        break;
    }
    camera.lookAt(origin);
    console.log(camera);
    console.log(object);
    this.render(scene, camera);
  }
}
