import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-searchtalent',
  templateUrl: './searchtalent.component.html',
  styleUrls: ['./searchtalent.component.css']
})
export class SearchtalentComponent implements OnInit {
  hpSkillInputBox: String;
  hpWhereInputBox: String;
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  onSearchSubmit(){
    const search = {
      hpSkillInputBox: this.hpSkillInputBox,
      hpWhereInputBox: this.hpWhereInputBox
    }
    if(this.validateService.validateWhere(search)){
      //this.router.navigate(['searchtalent']);
      //find related information
      //display ordered list
      this.searchService.searchUser(search).subscribe(user =>{
        if(user.success){
          this.flashMessage.show('success', {
          cssClass: 'alert-success',
          timeout: 3000});
        }
        else {
          this.flashMessage.show(user.msg, {
          cssClass: 'alert-danger',
          timeout: 3000});
        }
      });
      
    }
    else{
      this.flashMessage.show('Where has not been specified', {cssClass:'alert-danger', timeout:3000});
    }
  }
}
