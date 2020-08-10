import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: any) {
  	if (user) { 
  		return true;
  	} else {
  		return false;
  	}
  }

}
