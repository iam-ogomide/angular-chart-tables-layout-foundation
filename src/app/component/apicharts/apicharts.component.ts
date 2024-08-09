import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from 'src/app/service/master.service';
Chart.register(...registerables);

@Component({
  selector: 'app-apicharts',
  templateUrl: './apicharts.component.html',
  styleUrls: ['./apicharts.component.scss']
})
export class ApichartsComponent implements OnInit {

  //Injecting the api from the service file
  constructor(private service:MasterService) { }


  //setting up variables for our chart data
  chartdata: any;

  labeldata:any[] =[];
  realdata:any[] =[];
  colordata:any[] =[];

  ngOnInit(): void {

    //AI gave me this version incase my own dey misbehave
    // this.service.GetChartInfo().subscribe(
    //   (result) => {
    //     this.chartdata = result;
    //     console.log('chartdata:', this.chartdata);
    //     this.RenderChart();
    //   },
    //   (error) => {
    //     console.error('Error fetching chart data:', error);
    //   }
    // );
    this.service.GetChartInfo().subscribe(result => {
      this.chartdata = result;
      if(this.chartdata != null){
        for(let i=0; i<this.chartdata.length ; i++){
          // console.log(this.chartdata[i])
          this.labeldata.push(this.chartdata[i].year);
          this.realdata.push(this.chartdata[i].amount);
          this.colordata.push(this.chartdata[i].colorcode);
        }
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'bar','barchart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'pie','piechart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'doughnut','dochart');
      }
    })
    
  }

  RenderChart(labeldata:any, maindata:any,colordata:any,type:any,id:any) {
    const myChart = new Chart(id, {
    type: type,
    data: {
      labels: labeldata,
      datasets: [{
        label: '# of Votes',
        data: maindata,
        backgroundColor: colordata,
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }


}
