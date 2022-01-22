import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppRouting';

  isLoading$!: Observable<boolean>;
  private _showLoaderEvents$!: Observable<boolean>;
  private _hideLoaderEvents$!: Observable<boolean>;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._showLoaderEvents$ = this._router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );
    this._hideLoaderEvents$ = this._router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      mapTo(false)
    );
    this.isLoading$ = merge(this._showLoaderEvents$, this._hideLoaderEvents$);
  }
}

