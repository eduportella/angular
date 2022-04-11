import { Component } from '@angular/core'
import { WeatherService } from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInput = {
    date: '',
    city: ''
  }
  woeid: string = ''
  temp: string = '0'

  constructor (private weatherService: WeatherService) {}

  fixDateFormat (inputDate: string): void {
    console.log(this.userInput.date)
    let newDate = inputDate.split('-');
    this.userInput.date = newDate[0]+'/'+newDate[1]+'/'+newDate[2];
  }

  getLocationData (): void {
    if (this.userInput.date && this.userInput.date !== '') {
      this.fixDateFormat(this.userInput.date)
      this.weatherService
        .getLocation(this.userInput.city)
        .subscribe((ret: any) => {
          if (ret[0] && ret[0].woeid) {
            this.woeid = ret[0].woeid
            this.getTemperature()
          }
        })
    } else {
      alert('please select date')
    }
  }

  getTemperature (): void {
    this.weatherService
      .getTemperature(this.userInput.date, this.woeid)
      .subscribe((rt: any) => {
        console.log(rt)
        this.temp = rt[0].the_temp;
      })
  }
}
