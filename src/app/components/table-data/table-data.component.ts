import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataRestService } from 'src/app/services/data-rest.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  posts: any = [];

  displayedColumns: string[] = ['id', 'title', 'author'];
  dataSource = new MatTableDataSource([]);

  constructor(
    private dataRestService: DataRestService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.dataRestService.getPosts()
      .subscribe((posts: any[]) => {
        this.posts = posts;
        this.initializeTable();
      });
  }

  initializeTable() {
    this.dataSource.data = this.posts;
  }

  handleFilterEvent(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

}