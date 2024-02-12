export const costChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Mixed",
      data: [301, 330, 316, 295, 285, 290],
			backgroundColor: "#a2a0a2",
      barPercentage: 0.5,
      categoryPercentage: 1,
    },
    {
      label: "Bio",
      data: [138, 120, 130, 146, 157, 156],
			backgroundColor: "#6c5248",
      barPercentage: 0.5,
      categoryPercentage: 1,
    },
    {
      label: "Plastic",
      data: [40, 50, 52, 60, 53, 46],
			backgroundColor: "#ffd703",
      barPercentage: 0.5,
      categoryPercentage: 1,
    },
    {
      label: "Carton",
      data: [30, 40, 34, 45, 36, 38],
			backgroundColor: "#0280b8",
      barPercentage: 0.5,
      categoryPercentage: 1,
    },
    {
		  borderRadius: 3,
      label: "Other",
      data: [50, 60, 58, 43, 62, 53],
	  	backgroundColor: "#000000",
      barPercentage: 0.5,
      categoryPercentage: 1,
    }
  ]
}

export const costChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Garbage Cost by Type',
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
      stacked: true,
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
    },
    y: {
      title: {
        display: true,
        text: 'Cost per 100 People  (EUR)',
        font: {
          size: 12,
          weight: 'normal',
        }
      },
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
      stacked: true,
      suggestedMin: 0,
      suggestedMax: 700,
    }
  }
}

export const costChartColor = '#a5d2dc'
