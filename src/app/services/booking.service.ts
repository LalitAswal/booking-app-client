import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url ='/seats_reservation';
  
  constructor(private http:HttpClient) { }

  bookings(data:any)
  {
    console.warn('checking data', data);
    
    return this.http.post(this.url, data)
  }
}
