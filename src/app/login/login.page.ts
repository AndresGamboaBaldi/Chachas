import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import { AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user= {
    email: '',
    password: ''
  }
  userFound = false;
  constructor(
    private router: Router,
    public ngFireAuth: AngularFireAuth,
    private firestoreService: FirestoreService,
    private alertCtrl:AlertController
    ) { }

  ngOnInit() {
  }

  async login() {
    await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password).
    then(
      ()=>{
        this.firestoreService.getData("Administradores").subscribe((adminsArray) => {
          adminsArray.forEach((admin:any)=>{
            if (admin.correo === this.user.email) {
             this.userFound=true;
            }
          });
          if (this.userFound) {
            this.router.navigate(['/tabs']);
          }else {
            alert("you don't belong here")
          }
        });
      },
      async error=> {
        const alert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text: 'ok',role:'cancel',handler:()=>{
          },},],
        },
        );
        await alert.present();
      }
    )
  }
  async resetPassword() {
    this.router.navigate(['/password-recovery']);
  }
}
