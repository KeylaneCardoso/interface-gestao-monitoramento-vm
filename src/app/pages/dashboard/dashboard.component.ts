import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HeaderComponent } from '../../components/header/header.component';
// import {Chart} from 'node_modules/chart.js'

Chart.register(...registerables);

@Component({
  // standalone: true,
  selector: 'app-dashboard',
  imports: [ HeaderComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent implements OnInit {

  userName = "Keylane";

  // @ViewChild("firstCanvas", {static: true}) elemento: ElementRef;

  // constructor(private _elementRef: ElementRef) {
  //   this.elemento = _elementRef.nativeElement;
  // }

  ngOnInit(){
    // new Chart(this.elemento.nativeElement, {
    //   type: 'line',
    //   data: {
    //     labels: ["teste1", "teste2", "teste3"],
    //     datasets: [
    //       {
    //         data: [10, 20, 30]
    //       }
    //     ]
    //   }
    // });


    this.RenderPieChart();
    this.RenderBarChart()

  }

  RenderPieChart(){
    const pieChart = new Chart( "piechart", {
      type: 'pie',
      data: {
        labels: [
          "VM's em uso",
          "VM's disponiveis"
        ],
        datasets: [{
          label: "Maquinas Virtuais",
          data: [3, 10],
          backgroundColor: [
            '#00BBFF',
            '#E8FFFE'
          ],
          hoverOffset: 4
        }]
      }
    })

  }

  RenderBarChart(){
    const barChart = new Chart( "barchart", {
      type: 'bar',
      data: {
        labels: ["RUNNING", "PAUSED", "STOP"],
        datasets: [{
          label: "Status das VM's",
          data: [1, 2, 3],
          backgroundColor: [
            '#FF8A08',
            '#FFBE76',
            '#FFB908'
          ],
          borderRadius: 5,
        }]
      },
      options: {
        indexAxis: 'y',
        // gridLinesX: {
        //   display: false
        // }
      },  
    })

  }


}
