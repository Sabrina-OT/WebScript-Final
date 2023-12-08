import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private baseUrl = '/api/tasks'; // Your server API base URL

  constructor(private http: HttpClient) {}

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.baseUrl}/`);
  }
  getTaskById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`); // Adjust the endpoint URL
  }


  getTrackList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tracklist`);
  }

  addTrack(trackData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, trackData);
  }

  updateTask(id: string, taskData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/edit/${id}`, taskData);
  }

  deleteTrack(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
}
