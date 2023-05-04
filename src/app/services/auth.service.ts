import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/compat/app';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: firebase.User | null = null;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();
  authLevel = 1;

  constructor(protected auth: AngularFireAuth, protected data: DataService, protected router: Router) {
    this.authStatusListener();
  }

  authStatusListener(){
    this.auth.onAuthStateChanged((credential)=>{
      if(credential){
        this.authStatusSub.next(credential);
        this.currentUser = credential
      }
      else{
        this.currentUser = null
        this.authStatusSub.next(null);
        //this.authLevel = 0;
      }
    })
  }

  async signIn(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password).catch((error) => {
      alert("Hibás felhasználónév vagy jelszó!");
    });
  }

  async register(email: string, password: string) {
    let user = null;
    try {
      user = await this.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
        alert(error.message);
      });
      this.auth.signOut();
    }
    catch { }
    return user;
  }

  async signOut(){
    await this.auth.signOut();
    this.router.navigate(['bejelentkezes'])
  }
}
