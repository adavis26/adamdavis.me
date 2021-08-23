import { Component, Inject, OnInit } from '@angular/core';
import { DevComponent, ITech } from '../dev.component';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './dev-info.component.html',
  styleUrls: ['./dev-info.component.css'],
})
export class DevInfoComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<DevInfoComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public tech: ITech
  ) {}

  ngOnInit(): void {}
}
