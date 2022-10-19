import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
//POST
//import { PostServiceService } from '../services/post-service.service';
//import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayPosts: any;

  post:any={
    id:null,
    title:"",
    body:"",
    userId:null
  };

  constructor(public alertController: AlertController, private activeroute: ActivatedRoute, private router: Router/**, public postServices:PostServiceService */) {/**
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }else{this.router.navigate(["/login"])}
    }); */
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
