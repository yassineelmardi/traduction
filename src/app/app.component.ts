import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');//parrametre par defaut
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  getInfo(){
    return this.translate.instant('IntroBis',{name:'Hicham' , age:33})//passer par le TS
  }

}
