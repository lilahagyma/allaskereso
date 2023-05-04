import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { JobOffer } from '../models/JobOffer';
import { Employer } from '../models/Employer';
import { Seeker } from '../models/Seeker';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected db: AngularFirestore, protected auth: AuthService) {
    this.getAllOffers(console.log)
  }

  async getAllOffers(callback: (value: Array<any>) => void) {
    let allOffers: Array<any> = []
    let offers = await this.db.collection<JobOffer>("offers").ref.get()

    offers.forEach((offer) => {
      let offerData = offer.data()

      this.getEmployer(offerData.employerId).then(snapshot => {
        allOffers.push({
          'name': offerData.name,
          'description': offerData.description,
          'employerName': snapshot.data()?.name,
          'employerAddress': snapshot.data()?.address
        })
        callback(allOffers)
      })
    })
  }

  async updateName(name: string) {
    if (!this.auth.currentUser)
      return false;

    let uid = this.auth.currentUser.uid
    await this.db.collection("seeker").doc(uid).ref.update({name: name}).catch(error => {
      alert(error.message)
      return false;
    })
    this.auth.userData["name"] = name
    return true;
  }

  async getEmployer(id: string) {
    let employer = await this.db.collection<Employer>('employer').doc(id).ref.get()
    return employer
  }

  async getSeeker(id: string) {
    let employer = await this.db.collection<Employer>('seeker').doc(id).ref.get()
    return employer
  }

  async uploadEmployerData(uid: string, userdata: Employer) {
    const {...object} = userdata
    console.log(uid)
    console.log(object)
    await this.db.collection("employer").doc(uid).ref.set(object).catch(error => {
      alert(error.message)
      return false;
    })
    console.log("added")
    return true;
  }

  async uploadSeekerData(uid: string, userdata: Seeker) {
    const {...object} = userdata
    console.log(uid)
    console.log(object)
    await this.db.collection("seeker").doc(uid).ref.set(object).catch(error => {
      alert(error.message)
      return false;
    })
    console.log("added")
    return true;
  }

  async addExperience(uid: string, userdata: Seeker) {

  }
}
