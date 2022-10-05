import { Component } from '@angular/core';
/*import { AlertController } from '@ionic/angular';*/
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayPosts: any;

  constructor(private activeroute: ActivatedRoute, private router: Router, public postServices:PostServiceService) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }else{this.router.navigate(["/login"])}
    });
  }

  ionViewWillEnter(){
    this.getPosts();
  }

  /*async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Su asistencia ha sido registrada exitosamente',
      buttons: ['OK'],
    });

    await alert.present();
  }*/
}
