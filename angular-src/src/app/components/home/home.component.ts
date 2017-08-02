import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hpSkillInputBox: String;
  hpWhereInputBox: String;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSearchSubmit(){
    //this.router.navigate(['searchtalent']);
    const search = {
      hpSkillInputBox: this.hpSkillInputBox,
      hpWhereInputBox: this.hpWhereInputBox
    }
    if(this.validateService.validateWhere(search)){
      this.router.navigate(['searchtalent']);
    }
    else{
      this.flashMessage.show('Where has not been specified', {cssClass:'alert-danger', timeout:3000});
    }
  }
}
