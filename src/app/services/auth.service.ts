import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: firebase.User | null = null;
  userData: any
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();
  _authLevel: number = 0;

  public set authLevel(level: number) {
    this._authLevel = level;
    localStorage.setItem('authLevel', level.toString());
  }

  public get authLevel() {
    let storage = localStorage.getItem("authLevel")
    if (!storage)
      return 0;
    this._authLevel = parseInt(storage)
    return this._authLevel;
  }

  constructor(protected auth: AngularFireAuth, protected router: Router, protected db: AngularFirestore) {
    this.authStatusListener();
  }

  authStatusListener(){
    this.auth.onAuthStateChanged((credential)=>{
      if(credential){
        this.authStatusSub.next(credential);
        this.currentUser = credential
        console.log("Logged in")
        this.refreshAuthLevel()
      }
      else{
        this.currentUser = null
        this.authStatusSub.next(null);
        this.authLevel = 0;
        console.log("Logged out")
      }
    })
  }

  async signIn(email: string, password: string) {
    let error = false;
    await this.auth.signInWithEmailAndPassword(email, password).catch(() => {
      error = true;
      alert("Hibás felhasználónév vagy jelszó!");
      return;
    });
    if (error)
      return;
    await this.refreshAuthLevel()
    this.router.navigate(["home"])
  }

  async refreshAuthLevel() {
    let seekerData = await this.db.collection("seeker").doc(this.currentUser?.uid).ref.get();
    let employerData = await this.db.collection("employer").doc(this.currentUser?.uid).ref.get();
    if (seekerData.data()) {
      this.userData = seekerData.data()
      this.authLevel = 1;
    }
    else if (employerData.data()) {
      this.userData = employerData.data()
      this.authLevel = 2;
    }
  }

  async register(email: string, password: string) {
    let user = null;
    try {
      user = await this.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
        alert(error.message);
      });
    }
    catch { }
    return user;
  }

  async signOut(){
    await this.auth.signOut();
    this.authLevel = 0;
    this.router.navigate(['login'])
  }
}
