import {ElementRef, Injectable, NgZone, OnDestroy} from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js';
import Stats from 'three/addons/libs/stats.module.js';
import {animate} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService implements OnDestroy {

  public theModel:any;

  public canvas:HTMLCanvasElement;
  public renderer:THREE.WebGLRenderer;
  public camera:THREE.PerspectiveCamera;
  public scene:THREE.Scene;
  public light:THREE.AmbientLight;
  public INIT_MATERIAL:THREE.MeshPhongMaterial;
  public control: OrbitControls;
  public cube:THREE.Mesh;
  public loader: GLTFLoader;

  public frameId:number =null;
  public mixer:any;
  public clock = new THREE.Clock();
  public stats=new Stats();

  public constructor(private ngZone:NgZone) {
  }

  // on destroy for clean Cpu and ram when you change pages
  ngOnDestroy(): void {
    if(this.frameId !=null){
      cancelAnimationFrame(this.frameId);
    }
    if(this.renderer!=null){
      this.renderer.dispose();
      this.renderer = null;
      this.canvas = null;
    }
  }


  //create 3d scene with parm i want (color , light , ...)
  public createScene(canvas:ElementRef<HTMLCanvasElement>):void{
    this.canvas=canvas.nativeElement;
    this.canvas.appendChild(this.stats.dom);

    this.renderer=new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias:true,

    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth*0.5, window.innerHeight*0.7);

    this.scene=new THREE.Scene();
    //color bg
    this.scene.background=new THREE.Color("rgb(227,245,238)");

    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment=pmremGenerator.fromScene(new RoomEnvironment(),0.04).texture;

    //create camera
    this.camera=new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,100);
    this.camera.position.set(40,10,20);
    this.scene.add(this.camera);

    //create light
    this.addlights();

    //import model
    this.loadModel();

    this.initOrbitControl();
  }

  initOrbitControl(){
    this.control=new OrbitControls(this.camera,this.renderer.domElement);
    this.control.target.set(0,0.5,0);
    this.control.update();
    this.control.enableDamping=true;
    this.control.enablePan=false;
  }


  addlights(){
    let hemilight=new THREE.HemisphereLight(0xffffff,0xffffff,0.42);
    hemilight.position.set(0,50,0);
    this.scene.add(hemilight);

    let directionlight = new THREE.DirectionalLight(0xffffff,0.54);
    directionlight.position.set(3,3,3);
    directionlight.castShadow = true;
    directionlight.shadow.mapSize = new THREE.Vector2(1024,1024);
    this.scene.add(directionlight);


    let directionlight2 = new THREE.DirectionalLight(0xffffff,0.54);
    directionlight2.position.set(-3,-3,-3);
    directionlight2.castShadow = true;
    directionlight2.shadow.mapSize = new THREE.Vector2(1024,1024);
    this.scene.add(directionlight2);

  }

  loadModel(){
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/assets/3dModels/libs/draco/gltf/');

    this.loader=new GLTFLoader();
    this.loader.setDRACOLoader(dracoLoader);
    // changer le model 3d ici ↓
    this.loader.load('/assets/3dModels/models/gltf/farm_final.glb',
      (gltf:any)=>{
        this.theModel=gltf.scene,
          this.theModel.position.set(0,0,0);
        this.theModel.scale.set(1,1,1); //(0.009,0.009,0.009)
        this.scene.add(this.theModel);
        this.mixer=new THREE.AnimationMixer(this.theModel);
        this.mixer.clipAction(gltf.animations[ 0 ]).play();
        this.renderer.setAnimationLoop(animate);
      },
      undefined
    );

    const animate=():void=>{
      const delta=this.clock.getDelta();
      this.mixer.update(delta);
      this.control.update();
      this.renderer.render(this.scene,this.camera);
    }


  }



}
