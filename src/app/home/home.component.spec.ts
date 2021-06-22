import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getSpielraum();
  }
  
  Spielraum: any;
  private SpielraumUrl = "Spielraum";
  getSpielraum()
  {
    return this.httpClient.get(this.SpielraumUrl).subscribe(x => {
      this.Spielraum = x;
      console.log(this.Spielraum);
    });
  }
  
}
