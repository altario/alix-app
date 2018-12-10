const axisLineColor = '#5f6063';
const fontFamily = 'Lato';

export const eChartsConfig = {
  title: {
    color: '#fff',
    //fontFamily: fontFamily,
    fontSize: 16,
    fontWeight: 'bold',
  },

  legend: {
    itemWidth: 10,
    itemHeight: 10,
    top: '20px',
    right: '20px',
    color: '#EEEEEE',
    fontSize: 9
  },

  grid: {
    top: 100,
    right: 40
  },

  // xAxis
  xAxis: {
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    axisLabel: {
      color: 'rgba(255, 255, 255, 1)'
    }
  },

  // yAxis
  yAxis: {
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    axisLabel: {
      color: 'rgba(255, 255, 255, 1)'
    }
  },

  // series
  series: {
    symbol: 'circle',
    symbolSize: 8,
    lineStyle: {
      width: 3
    }
  }
};
