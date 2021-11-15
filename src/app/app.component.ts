import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paninotekaClient';
  constructor(private dataService: DataService) {
    this.dataService.getdata().subscribe(data => {
      console.log('data', data);
    });
  }
}
