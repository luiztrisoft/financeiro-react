import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
              legend:{
                  show: false
              }
          },
          series: [10,90],
          labels: ['A', 'B']
        }
      }
    
    render() {    
        return (
          <div className="donut">
            <Chart 
                options={{...this.props.options, labels: this.props.labels}} 
                series={this.props.series} 
                // labels={this.props.labels}
                type="donut" 
                width="80%" 
                />
          </div>
        );
      }
    }
export default PieChart;