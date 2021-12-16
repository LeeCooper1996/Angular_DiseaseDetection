import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enter-url-dialog',
  templateUrl: './enter-url-dialog.component.html',
  styleUrls: ['./enter-url-dialog.component.scss'],
})
export class EnterUrlDialogComponent implements OnInit {
  public url: string = '';
  constructor(
    public dialogRef: MatDialogRef<EnterUrlDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onSave() {
    if (this.url === '' || this.url === null) {
      return;
    }
    this.dialogRef.close({success: true,url:this.url});
  }
  ngOnInit(): void {}
  onCancel() {
    this.dialogRef.close();
  }
}
