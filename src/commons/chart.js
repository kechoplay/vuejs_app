const doughnutChartOption = {
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 0,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        displayColors: false,
        backgroundColor: '#FFFFFF',
        titleColor: '#4B4B4B',
        titleFont: {
          size: 12,
          weight: 700,
          lineHeight: '17px'
        },
        titleAlign: 'center',
        bodyColor: "#4B4B4B",
        bodyFont: {
          size: 18,
          weight: 700,
          lineHeight: '21px'
        },
        bodyAlign: 'center',
        borderColor: '#F3F4F3',
        borderWidth: 1,
        callbacks: {
          title: tooltipItem => {
            return `${tooltipItem[0].label}`
          },
          label: function(context) {
            let value = context.formattedValue;
            let sum = 0;
            let dataArr = context.chart.data.datasets[0].data;
            dataArr.map(data => {
                sum += Number(data);
            });
            let percentage = (value * 100 / sum) + '%';
            return percentage;
          }
        },
        
      },
      
    }
}

const lineChartOption = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        color: "#FBFBFB"
      },
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 14,
        }
      }
    },
    y: {
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 12,
          weight: "bold"
        },
        callback: function(value) {
          return value + '億';
        }
      }
    },
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      mode: 'index',
      displayColors: false,
      backgroundColor: '#FFFFFF',
      titleColor: '#4B4B4B',
      titleFont: {
        size: 12,
        weight: 700,
        lineHeight: '17px'
      },
      titleAlign: 'center',
      bodyColor: "#4B4B4B",
      bodyFont: {
        size: 18,
        weight: 700,
        lineHeight: '21px'
      },
      bodyAlign: 'center',
      borderColor: '#F3F4F3',
      borderWidth: 1,
      
    },
  }
}

const lineBarChartOption = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        color: "#FBFBFB"
      },
    },
    y: {
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 12,
          weight: "bold"
        },
        callback: function(value) {
          return value + '億';
        }
      },
    },
    barPercentage: {
      beginAtZero: true,
      type: "linear",
      position: "right",
      gird: {
        drawOnChartArea: false
      },
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 12,
          weight: "bold"
        },
        callback: function(value) {
          return value * 100 + '%';
        }
      },
    }
  },
  plugins:{ 
    legend: {
      display: false
    }
  }
}

const lineStackedBarChartOption = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        color: "#FBFBFB"
      },
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 14,
        }
      }
    },
    y: {
      stacked: true,
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 12,
          weight: "bold"
        },
        callback: function(value) {
          return value + '億';
        }
      }
    },
  },
  plugins:{ 
    legend: {
      display: false
    }
  }
}

const stackedBarChartOption = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        color: "#FBFBFB"
      },
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 14,
        }
      }
    },
    y: {
      stacked: true,
      ticks: {
        color: '#4B4B4B',
        font: {
          size: 12,
          weight: "bold"
        },
        callback: function (value) {
          return value + '億';
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}
export {
  doughnutChartOption,
  lineChartOption,
  lineBarChartOption,
  lineStackedBarChartOption,
  stackedBarChartOption
}