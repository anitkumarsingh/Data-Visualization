import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';
import CHARTCONFIG from '../../../../Theme/chartConfig';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import { BASE_URL } from '../../../../Constants/Api';

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: false,
      isLoading: true
    };
  }
  componentDidMount() {
    axios
      .get(`${BASE_URL}/api/player/graph`)
      .then((response) => {
        const posts = response.data;
        this.setState({ data: posts, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  getOption = (props) => ({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['eCPM'],
      textStyle: {
        color: CHARTCONFIG.color.text
      }
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true, title: 'save' }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '2019-04-10',
          '2019-04-10',
          '2019-04-11',
          '2019-04-11',
          '2019-04-12',
          '2019-04-12',
          '2019-04-13',
          '2019-04-13',
          '2019-04-14',
          '2019-04-14',
          '2019-04-15',
          '2019-04-15',
          '2019-04-16',
          '2019-04-16',
          '2019-04-17',
          '2019-04-17',
          '2019-04-18',
          '2019-04-18',
          '2019-04-19',
          '2019-04-19'
        ],
        axisLabel: {
          textStyle: {
            color: CHARTCONFIG.color.text
          }
        },
        splitLine: {
          lineStyle: {
            color: CHARTCONFIG.color.splitLine
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value} ',
          textStyle: {
            color: CHARTCONFIG.color.text
          }
        },
        splitLine: {
          lineStyle: {
            color: CHARTCONFIG.color.splitLine
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: CHARTCONFIG.color.splitArea
          }
        }
      }
    ],
    series: [
      {
        name: 'eCPM',
        type: 'line',
        data: [
          0.024, 0.131, 0.112, 0.118, 0.111, 0.075, 0.047, 0.056, 0.045, 0.088,
          0.076, 0.06, 0.068, 0.12, 0.08, 0.161, 0.084, 0.096, 0.12, 0.08
        ],
        // data: [0.02403, 0.13151, 0.11290, 0.11811, 0.11151, 0.07599, 0.04780,0.05682,0.04500,0.08867,0.07658,0.06046,0.06852,0.12091,0.08061,0.16122,0.08417,0.09673,0.12091,0.08061],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Average' }]
        }
      }
    ]
  });
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <div className="box box-default">
          <div className="box-header">Line Chart</div>
          <div className="box-body">
            <ReactEcharts
              option={this.getOption(this.state.data)}
              theme={'blue'}
            />
          </div>
        </div>
      );
    }
  }
}

export default Chart;
