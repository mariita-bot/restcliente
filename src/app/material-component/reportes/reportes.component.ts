import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: 'reportes.component.html',
  styleUrls: ['reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  constructor(
    private reportesService: ReportesService

  ) {}

  reporte(){
    this.reportesService.getReporte().subscribe((res: any) => {
      console.log(res);
    })
  }

  ngOnInit() {

  }
}
