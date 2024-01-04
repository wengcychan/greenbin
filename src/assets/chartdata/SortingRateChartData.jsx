export const sortingRateChartData = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	datasets: [
		{
			label: "My Community",
			data: [55, 62, 58, 71, 56, 68, 75, 69, 65, 72, 67, 65],
			pointRadius: 6,
			borderColor: "#ffffff00",
			backgroundColor: "#b2841f",
			cubicInterpolationMode: 'monotone',
			tension: 0.4
		},
		{
			label: "Median",
			data: [50, 60, 53, 73, 62, 53, 63, 59, 65, 73, 62, 65],
			pointRadius: 1,
			borderColor: "#d5ae598F",
			backgroundColor: "#d5ae592F",
			fill: true,
			cubicInterpolationMode: 'monotone',
			tension: 0.4
		}
	]
}

export const sortingRateChartOptions = {
	maintainAspectRatio: false,
	plugins: {
		title: {
      display: true,
      text: 'Sorting Rate of My Community vs Median Across Communities',
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
			title: {
				display: true,
				text: 'Sorting Rate  (%)',
			},
			suggestedMin: 30,
			suggestedMax: 90,
		}
	}
}

export const sortingRateChartColor = '#fea32c'