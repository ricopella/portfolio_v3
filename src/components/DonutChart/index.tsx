import * as React from 'react'
import Highcharts from 'highcharts'
import {
  Chart,
  HighchartsChart,
  PieSeries,
  Tooltip,
  withHighcharts,
} from 'react-jsx-highcharts'

const DonutChart = ({ data = [] }) => {
  const plotOptions = {
    pie: {
      center: ['50%', '50%'],
      edgeWidth: 20,
      shadow: false,
      size: '100%',
      slicedOffset: 0,
    },
  }

  return (
    <div>
      <HighchartsChart
        margin={[0, 0, 0, 0]}
        spacing={[0, 0, 0, 0]}
        className="donutChart"
        plotOptions={plotOptions}
      >
        <Chart
          type="pie"
          backgroundColor={`transparent`}
          height={240}
          width={240}
        />
        <Tooltip
          useHTML={true}
          backgroundColor={'#00171f'}
          borderWidth={0}
          headerFormat=""
          shadow={false}
          style={{ color: 'var(--white)', zIndex: 900 }}
          formatter={function() {
            return `
              <div class='toolTipChartContainer'>
                <div>
                  <span>${this.key ? this.key : ''}</span>
                </div>
                <div class='toolTipValue'>
                  ${this.point.y % 100}%
                </div>
              </div>
            `
          }}
        />
        <PieSeries
          borderWidth={4}
          data={data}
          dataLabels={false}
          innerSize={'78%'}
          name="breakdownDonutChart"
          size={'100%'}
          slicedOffset={0}
        />
      </HighchartsChart>
    </div>
  )
}

export default withHighcharts(DonutChart, Highcharts)
