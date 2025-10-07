// Hotel Soliven Analytics Dashboard
// Chart.js visualizations

// Color variables (to match site palette)
const gold = '#d7b87a';
const goldTrans = 'rgba(215,184,122,.22)';
const grid = 'rgba(255,255,255,.08)';
const ticks = '#9fb0c6';

// Occupancy Rate by Month (Line Chart)
const occCtx = document.getElementById('occupancyChart');
new Chart(occCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Occupancy Rate (%)',
      data: [82, 75, 88, 93, 90, 95],
      borderColor: gold,
      backgroundColor: goldTrans,
      pointRadius: 3,
      pointHoverRadius: 5,
      fill: true,
      tension: 0.35
    }]
  },
  options: {
    plugins: { legend: { labels: { color: ticks } } },
    scales: {
      x: { ticks: { color: ticks }, grid: { color: grid } },
      y: { ticks: { color: ticks }, grid: { color: grid }, beginAtZero: true, max: 100 }
    }
  }
});

// ADR by Room Type (Bar Chart)
const adrCtx = document.getElementById('adrChart');
new Chart(adrCtx, {
  type: 'bar',
  data: {
    labels: ['Standard', 'Deluxe', 'Executive', 'Presidential'],
    datasets: [{
      label: 'Average Daily Rate ($)',
      data: [190, 250, 330, 580],
      backgroundColor: ['#bfa46f', '#d7b87a', '#c6a867', '#aa8c4e'],
      borderWidth: 0
    }]
  },
  options: {
    plugins: { legend: { labels: { color: ticks } } },
    scales: {
      x: { ticks: { color: ticks }, grid: { color: grid } },
      y: { ticks: { color: ticks }, grid: { color: grid }, beginAtZero: true }
    }
  }
});