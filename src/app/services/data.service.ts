import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { JobOffer } from '../models/JobOffer';
import { Employer } from '../models/Employer';
import { Seeker } from '../models/Seeker';
import { AuthService } from './auth.service';
import { JobAppplication } from '../models/JobApplication';
import { Qualification } from '../models/Qualification';

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

  async getQualifications(callback: (res: Array<Qualification>) => void) {
    console.log("get eleje")
    let uid = this.auth.currentUser?.uid
    if (!uid) {
      console.log("null")
      return;
    }
    console.log("get közepe")
    let qualifications: Array<Qualification> = [];
    (await this.db.collection<Qualification>('qualification').ref.where('uid', '==', uid).get()).forEach(
      doc => {
        qualifications.push(doc.data())
      }
    )
    console.log("get vége")
    callback(qualifications)
  }

  async getMyApplications(callback: (res: Array<Qualification>) => void) {
    let uid = this.auth.currentUser?.uid
    if (!uid)
      return;

    let qualifications: Array<Qualification> = [];
    (await this.db.collection<Qualification>('qualification').ref.where('uid', '==', uid).get()).forEach(
      doc => {
        qualifications.push(doc.data())
      }
    )
    callback(qualifications)
  }

  async addApplication(experience: JobAppplication) {
    const {...object} = experience
    await this.db.collection("application").ref.add(object).catch(error => {
      alert(error.message)
      return false;
    })
    return true;
  }

  async addQualification(qualification: Qualification) {
    const {...object} = qualification
    await this.db.collection("qualification").ref.add(object).catch(error => {
      alert(error.message)
      return false;
    })
    alert("Sikeresen hozzáadva")
    location.reload()
    return true;
  }

  async deleteApplication(application: JobAppplication) {
    await (await this.db.collection("application").ref.where("seekerId", '==', application.seekerId).where('jobId', '==', application.jobId).get()).forEach(doc => {
      doc.ref.delete()
      .catch(error => {
        alert(error.message)
        return false;
      })
    })
    return true;
  }

  async deleteQualification(qualification: Qualification) {
    console.log(qualification)
    await (await this.db.collection("qualification").ref.where("name", '==', qualification.name).where('uid', '==', qualification.uid).get()).forEach(doc => {
      doc.ref.delete()
      .catch(error => {
        alert(error.message)
        return false;
      })
    })
    alert("Sikeresen törölve")
    setTimeout(() => {
      location.reload()
    }, 1000);
    return true;
  }
}
