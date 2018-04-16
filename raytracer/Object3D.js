class Object3D {

  constructor(){
    //this.position = new Vector3(0,0,0)
    this.material = Material.WHITEMAT
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;

    //this.transform = new Transform()
  }

  get position(){
    const pos = this.transform.transformVec3(new Vector3(0,0,0))
    //console.log("pos = "+pos)
    return pos
  }

  intersectRay(ray){
    const tinv = this.transform.inverse();
    const intersectionInfo = this.intersect(ray.applyTransform(tinv))
    if (intersectionInfo.empty())
      return intersectionInfo
    else
      return intersectionInfo.applyTransform(this.transform)
  }

  translate(pos){
    this.transform = this.transform.translate(pos)
    return this
  }

  rotateX(angle){
    this.transform = this.transform.rotateX(angle)
    return this
  }

  rotateY(angle){
    this.transform = this.transform.rotateY(angle)
    return this
  }

  rotateZ(angle){
    this.transform = this.transform.rotateZ(angle)
    return this
  }

  scale(s){
    this.transform = this.transform.scale(s)
    this.scaleX = s.x;
    this.scaleY = s.y;
    this.scaleZ = s.z;
    return this
  }

}

class Group extends Object3D {
  constructor(){
    super()
    this.objects = []
    this.transform = new Transform()
  }

  addObject(obj){
    this.objects.push(obj)
  }

  intersect(ray){
    return Scene.intersectObjects(ray,this.objects)
  }

}
