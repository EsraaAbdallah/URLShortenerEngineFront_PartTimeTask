import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlTask';
  url:any;
  constructor(private router:Router,
    private newService:NewServiceService,
    ){}
  ngOnInit() {
    this.newService.getData().subscribe(res=>{this.url = res})
  }
  openUrl(url){
    window.open(url,'_system');
  }
  addNewURL(){
    this.router.navigate(['addForm'])
  }
}
