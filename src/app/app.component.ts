import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public latestResult: any[] = [];
  public timeSpent: any[] = [];
  public userData: any = [];

  public subscription: Subscription = new Subscription()
  constructor(
    private _apiService: ApiService
  ){}

  ngOnInit(): void {

    this.subscription.add(
      this._apiService.getAllData()
        .subscribe(res => {
          this.userData = res.userData[0]
          console.log(this.userData)
          this.latestResult = res['lastestResults']
          this.latestResult.forEach(e => {          
              e.score = +e.score.slice(0,2)
          })
          for(let key in res['timeSpentData'].days){
              let obj = {
                title : key,
                ...res['timeSpentData'].days[key]
              }
                this.timeSpent.push(obj)
          }
        })
    )
  }




}
