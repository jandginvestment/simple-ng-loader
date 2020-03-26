import { Component, OnInit } from '@angular/core';
import { SimpleNgLoaderService } from '../../services/simple-ng-loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'simple-ng-loader',
  templateUrl: './simple-ng-loader.component.html',
  styleUrls: ['./simple-ng-loader.component.scss']
})
export class SimpleNgLoaderComponent implements OnInit {
  isLoading: Subject <boolean> = this.loaderService.isLoading;

  constructor(private loaderService: SimpleNgLoaderService) { }
  ngOnInit(): void {
  }

}
