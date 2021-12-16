import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnterUrlDialogComponent } from '../enter-url-dialog/enter-url-dialog.component';

@Component({
  selector: 'app-plant-disease-upload',
  templateUrl: './plant-disease-upload.component.html',
  styleUrls: ['./plant-disease-upload.component.scss'],
})
export class PlantDiseaseUploadComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  public file!: File;
  public fileUrl: any;

  async onFileSelect(e: any) {
    console.log(e);
    const file = e.target.files[0];
    this.file = file;
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.fileUrl = event.target.result;
    };
    reader.readAsDataURL(file);
    if (file.size <= 0) {
      return;
    }
    console.log(file);
  }

  ngOnInit(): void {}
  enterUrlFunc() {
    console.log('here');
    const dialogRef = this.dialog.open(EnterUrlDialogComponent, {
      width: '20rem',
      data: {},
      panelClass: 'dialog',
      autoFocus: false,
    });
    dialogRef.afterOpened().subscribe((res) => {});
  }
  uploadImage(){

  }
}
