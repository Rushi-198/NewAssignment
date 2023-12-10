import { AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-r',
  templateUrl: './sidebar-r.component.html',
  styleUrls: ['./sidebar-r.component.scss']
})
export class SidebarRComponent implements OnInit, OnChanges {


  @Input() userObj!: any
  remindersArray : any[] =[];
  coursesArray : any[] =[];



  constructor() { }


  ngOnInit(): void {
  
    
  }



  ngOnChanges(changes: SimpleChanges): void {
    this.remindersArray = this.userObj.reminders
    // console.log(this.userObj.courses);

    this.coursesArray = this.userObj.courses

    let arr = []
    for(let key in this.userObj.courses){
      let obj = {
        subject: key,
        value: this.userObj.courses[key].slice(0,2)
      }
    
      console.log(obj);
      arr.push(obj)
    }

    this.coursesArray = arr
    
  }

 


  openNav(mySidenav: HTMLElement){
    mySidenav.classList.add('width-300')
  }

  openNav2(mySidenav: HTMLElement){
    mySidenav.classList.add('width-300')
  }


  closeNav(mySidenav: HTMLElement){
    mySidenav.classList.remove('width-300')
  }
  closeNav2(mySidenav: HTMLElement){
    mySidenav.classList.remove('width-300')
  }
}
