import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(page: number = 1): void {
    this.rickAndMortyService.getLocations(page).subscribe(response => {
      this.locations = response.results;
      this.currentPage = page;
      this.totalPages = response.info.pages;
    });
  }

  onPageChange(event: any): void {
    this.loadLocations(event.pageIndex + 1);
  }
}