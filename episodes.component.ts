import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(page: number = 1): void {
    this.rickAndMortyService.getEpisodes(page).subscribe(response => {
      this.episodes = response.results;
      this.currentPage = page;
      this.totalPages = response.info.pages;
    });
  }

  onPageChange(event: any): void {
    this.loadEpisodes(event.pageIndex + 1);
  }
}