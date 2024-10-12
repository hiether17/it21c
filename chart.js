class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
    }

    async init() {
        await this.fetchData();
        if (this.chartData) {
            this.createCharts();
        }
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            this.chartData = await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    
    createCharts() {
        // This method will be overridden in subclasses
        throw new Error('createCharts() must be implemented in subclasses');
    }
}
class LineChart extends ChartCreator {
    constructor(dataUrl) {
        super(dataUrl);
        this.lineCtx = document.getElementById('lineChart');
    }
    createCharts() {
        this.createLineChart(); 
    }

    createLineChart() {
        const chartData = {
            labels: this.chartData.labels,
            datasets: [{
                label: 'Number of Students', 
                data: this.chartData.data,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,  
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        };
        const config = {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#e0e0e0'
                        },
                        ticks: {
                            color: '#495057'
                        }
                    },
                    x: {
                        grid: {
                            color: '#e0e0e0'
                        },
                        ticks: {
                            color: '#495057'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#333'
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        };

        new Chart(this.lineCtx, config); 
    }
}
// Initialize the line chart
const lineChartCreator = new LineChart('data.json');
lineChartCreator.init();



