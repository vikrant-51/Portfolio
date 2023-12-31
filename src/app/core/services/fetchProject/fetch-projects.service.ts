import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchProjectsService {

  private projectsUrl = 'assets/Projects/projects.json';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]>{
    return this.http.get<any[]>(this.projectsUrl);
  }
}
