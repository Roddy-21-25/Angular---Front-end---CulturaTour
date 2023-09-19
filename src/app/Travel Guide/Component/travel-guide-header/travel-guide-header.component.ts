import { Component, OnInit } from '@angular/core';
import { HistoricalEvents } from 'src/app/Models/HistoricalEvents';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-travel-guide-header',
  templateUrl: './travel-guide-header.component.html',
  styleUrls: ['./travel-guide-header.component.css'],
})
export class TravelGuideHeaderComponent implements OnInit {
  public HistoricalEventsList: any[] = [];
  public HolidaysList: any[] = [];
  public countryList: any[] = [];
  public MuseumsLins: any[] = [];

  public WikiApiUrl: any[] = [];
  public WikiApiName: any[] = [];

  check: boolean = true;
  checkNavbar: boolean = false;

  country_dataCheck: boolean = false;
  historical_eventsCheck: boolean = false;
  Museums_eventsCheck: boolean = false;

  country: string = '';

  constructor(private apiRequest: ApiRequestService) {}

  ngOnInit(): void {}

  getMuseumsInCanada() {
    if (this.country == '' || this.country == ' ') {
      throw new Error('El nombre del país no puede estar vacío.');
    } else {
      this.apiRequest.getMuseumsInCanada(this.country).subscribe((resp) => {
        if (this.MuseumsLins.length == 0) {
          this.MuseumsLins.push(resp.places);
        } else {
          this.MuseumsLins.pop();
          this.MuseumsLins.push(resp.places);
        }
        this.check = false;
        this.checkNavbar = true;
      });
    }
  }

  // Country
  gerCountryDataMethod() {
    if (this.country == '' || this.country == ' ') {
      throw new Error('El nombre del país no puede estar vacío.');
    } else {
      this.apiRequest.gerCountryData(this.country).subscribe((resp) => {
        if (this.countryList.length == 0) {
          this.countryList.push(resp);
        } else {
          this.countryList.pop();
          this.countryList.push(resp);
        }
        this.check = false;
        this.checkNavbar = true;
      });
    }
  }

  // historial events Api Request.
  GetHistoricalEventsMethod() {
    if (this.country == '' || this.country == ' ') {
      throw new Error('El nombre del país no puede estar vacío.');
    } else {
      this.apiRequest.GetHistoricalEvents(this.country).subscribe((resp) => {
        if (this.HistoricalEventsList.length == 0) {
          this.HistoricalEventsList.push(resp);
        } else {
          this.HistoricalEventsList.pop();
          this.HistoricalEventsList.push(resp);
        }
        this.check = false;
        this.checkNavbar = true;
      });
    }
  }

  scroll(el: HTMLElement) {
    if (el.id == 'historical_events') {
      this.historical_eventsCheck = true;
      this.country_dataCheck = false;
      this.Museums_eventsCheck = false;
    } else if (el.id == 'country_data') {
      this.country_dataCheck = true;
      this.historical_eventsCheck = false;
      this.Museums_eventsCheck = false;
    } else if (el.id == 'MuseumsList') {
      this.Museums_eventsCheck = true;
      this.historical_eventsCheck = false;
      this.country_dataCheck = false;
    }
    el.scrollIntoView();
  }
}
