import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { JobOffer } from '../models/JobOffer';
import { Employer } from '../models/Employer';
import { Seeker } from '../models/Seeker';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected db: AngularFirestore) { }

  async getAllOffers() {
    let allOffers = []
    let offers = await this.db.collection<JobOffer>("offers").ref.get()

    offers.forEach((offer) => {
      let offerData = offer.data()

      this.db.collection<Employer>('employer').doc(offerData.employerId).ref.get().then(snapshot => {
        allOffers.push({
          'name': offerData.name,
          'description': offerData.description,
          'employerName': snapshot.data()?.name,
          'employerAddress': snapshot.data()?.address
        })
      })
    })
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
}
