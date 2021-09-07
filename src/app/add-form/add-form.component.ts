import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassUrl } from '../class-url';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  Url:any;
  urlValidation:any;
  classurl:ClassUrl
  urlpattern = 'https?://.+'
  constructor(private router:Router,
    private newService:NewServiceService
    ) { 
      this.classurl = new ClassUrl();
    }

  ngOnInit() {
  }
  submit(){
    this.checkUrl(this.Url)
    if(this.urlValidation == true){
      this.classurl.url = this.Url;
      this.newService.addUrl(this.classurl).subscribe(res=>{
        if(res == true)this.router.navigate(['./List'])
      })
    }
    else{
      alert('wrong Url')
    }
  }
  checkUrl(url){
    if(url.match(this.urlpattern)){
      this.urlValidation = true;
    }
    else{
      alert('wrong url')
      this.urlValidation = false
    }
  }
}
