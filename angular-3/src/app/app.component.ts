import { ConstructionService } from 'src/app/service/construction.service';
import { Construction } from 'src/app/model/construction';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-3';

  list$: Observable<Construction[]> = this.construcionService.getAll();

  constructor(
    private construcionService: ConstructionService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(construction: Construction): void {
    this.construcionService.delete(construction.id).subscribe(
      () => this.list$ = this.construcionService.getAll(),
    );
  }

}
