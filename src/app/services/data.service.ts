import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { JobOffer } from '../models/JobOffer';
import { Employer } from '../models/Employer';
import { Seeker } from '../models/Seeker';
import { AuthService } from './auth.service';
import { JobAppplication as JobApplication } from '../models/JobApplication';
import { Qualification } from '../models/Qualification';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(protected db: AngularFirestore, protected auth: AuthService) { }

  async getMyOffers(callback: (value: Array<any>) => void) {
    if (!this.auth.currentUser) {
      setTimeout(() => {
        this.getMyOffers(callback)
      }, 100);
      return;
    }

    let uid = this.auth.currentUser.uid
    let offers:Array<JobOffer> = [];

    (await this.db.collection<JobOffer>("offers").ref.where('employerId', '==', uid).get()).forEach(
      result => offers.push(result.data())
    )
    callback(offers)
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
          'employerAddress': snapshot.data()?.address,
          'id': offer.id
        })
      })
    })
    callback(allOffers)
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
    let uid = this.auth.currentUser?.uid
    if (!uid) {
      setTimeout(() => {
        this.getQualifications(callback);
      }, 200);
      return;
    }

    let qualifications: Array<Qualification> = [];
    (await this.db.collection<Qualification>('qualification').ref.where('uid', '==', uid).get()).forEach(
      doc => {
        qualifications.push(doc.data())
      }
    )
    callback(qualifications)
  }

  async getMyApplications(callback: (res: Array<string>) => void) {
    let uid = this.auth.currentUser?.uid
    if (!uid) {
      setTimeout(() => {
          this.getMyApplications(callback);
      }, 100);
      return;
    }

    let applications: Array<string> = [];
    (await this.db.collection<JobApplication>('application').ref.where('seekerId', '==', uid).get()).forEach(
      doc => applications.push(doc.data().jobId)
    )
    callback(applications)
  }

  async addApplication(application: JobApplication) {
    const {...object} = application
    await this.db.collection("application").ref.add(object).catch(error => {
      alert(error.message)
      return false;
    })
    return true;
  }

  async addNewJob(application: JobOffer) {
    const {...object} = application
    await this.db.collection("offers").ref.add(object).catch(error => {
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

  async deleteApplication(application: JobApplication) {
    await (await this.db.collection("application").ref.where("seekerId", '==', application.seekerId).where('jobId', '==', application.jobId).get()).forEach(doc => {
      doc.ref.delete()
      .catch(error => {
        alert(error.message)
        return false;
      })
    })
    return true;
  }

  async deleteJob(offer: JobOffer) {
    await (await this.db.collection("offers").ref.where("name", '==', offer.name).where('employerId', '==', offer.employerId).get()).forEach(doc => {
      console.log(doc.id)
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
    }, 500);
    return true;
  }
}
