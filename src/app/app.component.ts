import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedStateService } from './services/shared-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projeto-web-front-end-angular';
  private static readonly DARK_THEME_CLASS = 'dark-theme';
  isOpenDrawer = true;
  theme = 'light';

  formPeriod!: FormGroup

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private responsive: BreakpointObserver,
    private ref: ChangeDetectorRef,
    private sharedStateService: SharedStateService
  ) {  }

  ngOnInit(): void {
    this.setFormPeriod();
    this.onChangeMobile();
  }

  selectLightTheme(): void {
    this.theme = 'light';
    this.document.documentElement.classList.add(AppComponent.DARK_THEME_CLASS);
  }

  selectDarkTheme(): void {
    this.theme = 'dark';
    this.document.documentElement.classList.remove(AppComponent.DARK_THEME_CLASS);
  }

  setFormPeriod() {
    this.formPeriod = this.formBuilder.group({
      start:[new Date('2021-04-01T12:12:55'), Validators.required],
      end:[new Date('2021-07-30T12:12:55'), Validators.required]
    })
  }

  submitFormPeriod() {
    this.sharedStateService.setPeriodState(this.formPeriod.value);
  }

  onChangeMobile() {
    this.responsive.observe(Breakpoints.Small)
      .subscribe(result => {
        console.log(Breakpoints)
        if (result.matches) {
          this.isOpenDrawer = false;
          this.ref.detectChanges();
        }
  });

  }



}
