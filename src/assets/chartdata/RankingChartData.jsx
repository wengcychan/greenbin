export const rankingChartData = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
	datasets: [
		{
			label: "My Community",
			data: [4, 5, 10, 9, 12, 13, 10, 7, 5, 3, 2, 1],
			pointRadius: 5,
			borderColor: "#b3892e",
			backgroundColor: "#b3892e",
			pointStyle: 'rectRot',
			pointBorderColor: "#b3892e",
			borderWidth: 4
		}
	]
}

export const rankingChartOptions = {
	maintainAspectRatio: false,
	plugins: {
		title: {
      display: true,
      text: 'Ranking of My Community',
      font: {
        size: 20,
      },
      padding: 30,
    },
		legend: {
		display: false,
			position: 'bottom',
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
			reverse: true,
			title: {
				display: true,
				text: 'Ranking',
			},
			suggestedMin: 1,
			suggestedMax: 15,
		}
	}
}

export const rankingChartColor = '#ffd441'