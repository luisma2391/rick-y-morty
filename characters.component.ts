import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.rickAndMortyService.getCharacters(page).subscribe(response => {
      this.characters = response.results;
      this.currentPage = page;
      this.totalPages = response.info.pages;
    });
  }

  onPageChange(event: any): void {
    this.loadCharacters(event.pageIndex + 1);
  }
}