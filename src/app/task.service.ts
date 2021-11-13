import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  num = 5;

  public task = [
   {
     "name" : "SL assignment",
     "id" : 1,
     "details" : "13 Nov at 11:59 pm"
   },
   {
     "name" : "Graph Theory Quiz",
     "id" : 2,
     "details" : "15 Nov at 12:45 pm"
   },
   {
     "name" : "AI-DS Quiz",
     "id" : 3,
     "details" : "16 Nov at 6:10 pm"
   },
   {
     "name" : "SE assignment",
     "id" : 4,
     "details" : "27 Nov at 11:59 pm"
   },
   {
     "name" : "ITCT assignment",
     "id" : 5,
     "details" : "30 Nov at 11:59 pm"
   }
 ];

 getTasks(){
   return this.task;
 }

 getNumber(){
   return this.num;
 }

  constructor() { }
}
