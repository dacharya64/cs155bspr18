function runTest(){
	
	canvas.width = 600
	canvas.height = 600
	const renderer = new Renderer(600,600)
	const scene = new Scene('demo')
	const camera = new Camera()

	const s1 = new Sphere()
	s1.scale(new Vector3(2,2,2));
	scene.addObject(s1)
	
	const s2 = new Sphere()
	s2.translate(new Vector3(10, 0, 0))
	s2.scale(new Vector3(2, 2, 2));
	scene.addObject(s2)
	
	const s3 = new Sphere()
	s3.translate(new Vector3(-10, 0, 0))
	s3.scale(new Vector3(2, 2, 2));
	scene.addObject(s3)
	
	const s4 = new Sphere()
	s4.translate(new Vector3(-20, 0, 0))
	s4.scale(new Vector3(2, 2, 2));
	scene.addObject(s4)

	const light1 = new Light(new Vector3(0,200,200))
	light1.intensity = 0.9
	light1.diffuseColor = Color.GREEN
	light1.specularColor = Color.RED

	camera.translate(new Vector3(0,10,30))
	camera.lookAt(new Vector3(0,0,0))

	renderer.render(scene,camera)
}

runTest()