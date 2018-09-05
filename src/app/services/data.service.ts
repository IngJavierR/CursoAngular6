import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }
  
  private isLoading = new Subject<boolean>();
  public isLogged: boolean;
  public isLoggedEvent = new Subject<boolean>();
  public notificationEvent = new Subject<string>();

  setNotificationEvent(message: string) {
    this.notificationEvent.next(message);
  }

  getNotificationEvent() {
    return this.notificationEvent.asObservable();
  }

  getIsLoadingEvent(){
      return this.isLoading.asObservable();
  }

  setIsLoadingEvent(isLoading: boolean){
      this.isLoading.next(isLoading);
  }

  getIsLogged() {
    return this.isLoggedEvent.asObservable();
  }

  setIsLogged(isLogged: boolean) {
      this.isLogged = isLogged;
      this.isLoggedEvent.next(isLogged);
  }
}
