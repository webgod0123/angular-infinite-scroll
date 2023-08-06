import { Component, OnInit } from '@angular/core';
import { ITourist } from '../../interfaces/tourist';
import { TripService } from '../../services/trip.service';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime, finalize, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: ITourist[] = [];
  page: number = 1;
  location: string = '';
  filteredData: ITourist[] = [];
  loading = false;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  pageItems = 10;

  searchtouristControl = new UntypedFormControl(null);

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.tripService.gettourists().subscribe((res) => {
      this.data = res.tourists;
      this.filteredData = this.filterData();
    });

    this.searchtouristControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.page = 1;
        this.location = value;
        this.filteredData = this.filterData();
      });
  }

  private filterData() {
    return this.data
      .filter((data, index) =>
        data.location.toLowerCase().includes(this.location.toLowerCase())
      )
      .filter((data, index) => index < this.page * this.pageItems);
  }

  onScrollDown() {
    if (this.filteredData.length === this.data.length) return;

    this.loading = true;
    this.page += 1;
    setTimeout(() => {
      this.filteredData = this.filterData();
      this.loading = false;
    }, 1000);
  }
}
