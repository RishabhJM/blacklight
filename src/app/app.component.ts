import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];
  rank: {rank:number} = {rank:0};
  rankFetched: boolean = false;
  leaderboardFetched : boolean = false;
  userID: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getData();
    console.log("HELLOOO");
  }

  toggleRankFetched(){
    this.rankFetched = !this.rankFetched;
  }
  toggleLeaderboardFetched(){
    this.leaderboardFetched = !this.leaderboardFetched;
  }

  getData() {
    // console.log("HELLO WORLD");
    this.toggleLeaderboardFetched();
    this.dataService.getTop200Data().subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getTopByCountry(value: string){
    this.toggleLeaderboardFetched();
    console.log(value);
    this.dataService.getTop200DataCountry(value).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getRank(value: string){
    // console.log(value);
    this.toggleRankFetched();
    this.dataService.getRankUid(value).subscribe(
      (res) => {
        this.rank = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  // changeInput(){
  //   this.toggleRankFetched();
  // }
}
