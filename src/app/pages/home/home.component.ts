import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hirdetesek: Array<any> = []

  constructor(protected data: DataService) { }

  ngOnInit() {
    this.data.getAllOffers(res => this.hirdetesek = res)
  }
}
