import { Component } from '@angular/core';
import { BookingService } from './services/booking.service';
import { HttpErrorResponse } from '@angular/common/http';

// interface ApiResponse {
//   data: number[];
//   bookedSeat: any;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking Application';
  bookings:any;
  public result: number[] | undefined;
  errorMessage: string | undefined;

  
  constructor(private booking: BookingService){}
  BookingStatus(data:any)//BookingStatus
  
  {
    console.warn("data", data);  
   this.booking.bookings(data).subscribe((response:any) =>{
      if (response.data) {
        this.result = response.data;
      } else {
        this.errorMessage = response.error || 'An error occurred during booking.';
      }
    },
    (error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        // Client-side error 
        this.errorMessage =  error.error.message;
      } else {
        // Backend-side error
        this.errorMessage =  error.error.error;
      }
      this.result = undefined;

  })
}
  clearErrorMessage() {
    this.errorMessage = undefined;
}
}
