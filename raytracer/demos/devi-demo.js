

function runTest(){
	canvas.width=900
	canvas.height=900
	const renderer = new Renderer(300,300)
	const scene = new Scene('devi-demo', true, .2) //CHANGE THIS TO ADD/REMOVE FOG
  //true/false = fog/no fog, 0-1

    var rectangleArray = [];
    for (var i=0; i<10; i++) {
      rectangleArray[i] = new Rectangle(5,10)
      rectangleArray[i].material =  new Material(Color.WHITE,Color.GREEN,Color.WHITE)
      rectangleArray[i].material.shininess =  100
      rectangleArray[i].material.reflectivity =  0.5
      rectangleArray[i].translate(new Vector3(-i*2,i,i))
      scene.addObject(rectangleArray[i])
    }


        var rectangleArray2 = [];
        for (var i=0; i<10; i++) {
          rectangleArray2[i] = new Rectangle(5,10)
          rectangleArray2[i].material =  new Material(Color.WHITE,Color.RED,Color.WHITE)
          rectangleArray2[i].material.shininess =  100
          rectangleArray2[i].material.reflectivity =  0.5
          rectangleArray2[i].translate(new Vector3(-i*2,i-6,i-8))
          scene.addObject(rectangleArray2[i])
        }



                var rectangleArray3 = [];
                for (var i=0; i<10; i++) {
                  rectangleArray3[i] = new Rectangle(5,10)
                  rectangleArray3[i].material =  new Material(Color.WHITE,Color.BLUE,Color.WHITE)
                  rectangleArray3[i].material.shininess =  100
                  rectangleArray3[i].material.reflectivity =  0.5
                  rectangleArray3[i].translate(new Vector3(-i*2,i-12,i))
                  scene.addObject(rectangleArray3[i])
                }



	const camera = new Camera()
	camera.translate(new Vector3(12,0,8))
	//camera.transform = camera.transform.rotateX(-30*Math.PI/180)
	//camera.position = new Vector3(0,20,10)
	camera.lookAt(rectangleArray[0].position)

	const light1 = new Light(new Vector3(10,10,-15))
	light1.ambientColor = Color.WHITE.scale(0.1)
	light1.diffuseColor = Color.WHITE
	light1.specularColor = Color.RED
	light1.intensity = 1
	scene.addLight(light1)

	const light2 = new Light(new Vector3(0,30,20))
	light2.intensity = 1
	light2.ambientColor = Color.WHITE.scale(0.1)
	light2.diffuseColor = Color.WHITE
	light2.specularColor = new Color(1,1,0)
	scene.addLight(light2)


  	const light3 = new Light(new Vector3(10,30,20))
  	light3.intensity = 1
  	light3.ambientColor = Color.WHITE.scale(0.1)
  	light3.diffuseColor = Color.WHITE
  	light3.specularColor = new Color(1,1,0)
  	scene.addLight(light3)



      	const light4 = new Light(new Vector3(10,30,-10))
      	light4.intensity = 1
      	light4.ambientColor = Color.WHITE.scale(0.1)
      	light4.diffuseColor = Color.WHITE
      	light4.specularColor = new Color(1,1,0)
      	scene.addLight(light4)

	renderer.render(scene,camera)
}

runTest()
