import { Component, AfterViewInit } from '@angular/core';

// gsap imports
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports

import { Object3D } from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'bouncy';
  model$ = this.ngtGLTFLoader.load('./assets/product_placeholder_2.glb');
  bounce_height: number = 0.5

  // // whole bottle
  public whole_thing: Object3D | undefined;

  constructor(
    public ngtGLTFLoader: NgtGLTFLoader,

  ) { }


  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("scrollStart", () => 
    {console.log("scrolling begun!"),
    this.on_bounce(this.bounce_height = -0.4)
    this.on_stop_bounce_and_start_turn()}
    );
    
  }

  ngAfterViewInit(): void {
    this.on_scroll()
    this.on_bounce(this.bounce_height)
  }

  modelReadyService(object: Object3D) {

    // whole thing
    this.whole_thing = object.getObjectByName('Cylinder')
    console.log(this.whole_thing)

  }

  on_bounce(bounce_height: number) {
    if (this.whole_thing) {
      // console.log("From on_bounce() function: \n")
      // console.log(this.whole_thing)
      
      gsap.to(this.whole_thing.position, {
        y: bounce_height,
        duration: 1,
        repeat: -1,
        yoyo: true,
      })
      
    }
  }

  on_stop_bounce_and_start_turn() {
   
    //this.on_bounce();
    if (this.whole_thing) {
      
   
      gsap.to(this.whole_thing.rotation, {
        y: '-=0.5',
        duration: 1,
        repeat: -1,
        yoyo: true,
      })
    }
  }


  on_scroll() {

    gsap.to(".a-box", {
      scrollTrigger: {
        trigger: "#c-box",
        toggleActions: "play reverse play reverse"

      },
      x: '+=500',
      duration: 3,

    })


 
   }
}
