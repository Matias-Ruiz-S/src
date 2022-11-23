import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

// POST
//import { PostServiceService } from '../services/post-service.service';
//import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit: false,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  /**
  arrayPosts: any;
  
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null
  };
  */

  imgURL;

  constructor(public alertController: AlertController, private activeroute: ActivatedRoute, private router: Router, private camera: Camera/**, public postServices:PostServiceService */) {
    
    /**
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }else{this.router.navigate(["/login"])}
    }); */
  }

  
  abrirCamara() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res) => {
      this.imgURL = res;
    }).catch(e => {
      console.log(e);
    })
  }

  //POST
  
  /**
  ionViewWillEnter(){
    this.getPosts();
  }
  */

  //POST
  
  /**
  getPosts(){
    this.postServices.getPosts()
    .then(data =>{
      this.arrayPosts = data;
    });
  } 
   */

  //Observable
  /*
  getPosts(){
    this.postServices.getPosts().subscribe((data)=>{
      this.arrayPosts=data;
      this.arrayPosts.reverse();
    })
  }
  */

  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  registrar(){
    this.presentAlert("Aviso", "La asistencia se registro correctamente")
  }

  //POST
  
  /**
  createPost(){
    this.postServices.createPost(this.post).subscribe(
      ()=>{
        console.log("Post creado.");
        this.getPosts();
      },
      error=>{
        console.log("Error " + error)
      }
    );
  }
   */
}
