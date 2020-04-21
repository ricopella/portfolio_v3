import Highcharts from 'highcharts'
import React from 'react'
import { PIE_SERIES_COLORS } from '../../styles/variables'
import {
  Chart,
  HighchartsChart,
  PieSeries,
  Tooltip,
  withHighcharts,
} from 'react-jsx-highcharts'

const HEIGHT = 240
const INNER_SIZE = `65%`
const MARGIN = [0, 0, 0, 0]
const PADDING = [0, 0, 0, 0]
const SIZE = `100%`
const SLICE_OFFSET = 0
const WIDTH = 240

const DonutChart = ({ data = [] }) => {
  const plotOptions = {
    pie: {
      colors: PIE_SERIES_COLORS,
      size: SIZE,
      slicedOffset: SLICE_OFFSET,
    },
  }

  return (
    <div style={{ display: 'grid' }}>
      <HighchartsChart plotOptions={plotOptions}>
        <Chart
          backgroundColor={`transparent`}
          height={HEIGHT}
          margin={MARGIN}
          padding={PADDING}
          type="pie"
          width={WIDTH}
        />
        <PieSeries
          borderColor={'transparent'}
          data={data}
          dataLabels={false}
          innerSize={INNER_SIZE}
          size={SIZE}
          slicedOffset={SLICE_OFFSET}
        />
      </HighchartsChart>
    </div>
  )
}

export default withHighcharts(DonutChart, Highcharts)
