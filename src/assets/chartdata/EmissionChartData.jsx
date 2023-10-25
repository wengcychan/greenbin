export const emissionChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: 'CO2 Emission',
      data: [36, 13, 26, 6, 17, 14],
      pointRadius: 0,
      borderColor: "#5f684b",
      backgroundColor: "#5f684b",
	  	borderWidth: 4,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      type: 'line',
    },
    {
		barThickness: 40,
      label: 'Volume of Mixed Waste',
      data: [86, 53, 76, 56, 67, 64],
      borderColor: "#628D2A",
			backgroundColor: "#a2a0a2",
			borderRadius: 3,
      stack: 'combined',
      yAxisID: 'y1',
      type: 'bar'
    }
  ]
}

export const emissionChartOptions = {
  plugins: {
    title: {
      display: true,
      text: 'CO2 Emission vs Volume of Mixed Waste',
      font: {
        size: 20,
      },
      padding: 30,
    },
    legend: {
      position: 'bottom',
	  align: "end",
    labels: {
      usePointStyle: true,
      pointStyle: 'rect',
    },
    },
  },
  responsive: true,
  scales: {
    x: {
		grid: {
			display: false,
		},
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
    },
    y: {
		grid: {
			display: false,
		},
        display: true,
        title: {
          display: true,
          text: 'CO2 Emission  (Kg)',
        },
        suggestedMin: 0,
        suggestedMax: 50
      },
    y1: {
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Volume of Mixed Waste  (ton)',
      },
      suggestedMin: 30,
      suggestedMax: 90,
    }
  }
}

export const emissionChartColor = '#addca5'