import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  latestResult: any[] = [];
  timeSpent: any[] = [];
  constructor(
    private _apiService: ApiService
  ){}

  ngOnInit(): void {
    this._apiService.getAllData()
      .subscribe(res => {
        console.log(res);
// 
        this.latestResult = res['lastestResults']


        this.latestResult.forEach(e => {          
            e.score = +e.score.slice(0,2)
        })

        // console.log(res['timeSpentData'].days);
        let arr = []
        for(let key in res['timeSpentData'].days){
          console.log(res['timeSpentData'].days);
            console.log(key);
            let obj = {
              title : key,
              ...res['timeSpentData'].days[key]
            }

              this.timeSpent.push(obj)
        }

        console.log(this.timeSpent);

        
      })
  }




}
