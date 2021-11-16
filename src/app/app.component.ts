import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items: any;
  public nomePanino: string = '';
  public messaggio: string = '';

  constructor(private dataService: DataService) {
    this.items = [];
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data;
    });
  }

  addItem(nomePanino: string) {
    if (!nomePanino) {
      return;
    }
    
    this.dataService
      .addItem(nomePanino)
      .subscribe((data) => {
        console.log('aggiunto correttamente');
        this.items = data;
        this.messaggio = 'Panino aggiunto correttamente!';

        setTimeout(() => {
          this.messaggio = '';
          this.nomePanino = '';
        }, 2000);
      });
  }
}
