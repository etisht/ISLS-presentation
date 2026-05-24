// ─── Chart Definitions ────────────────────────────────────────────────────────

function initCharts() {

  // ── Chart 1: Factor Loadings (Slide 7) ──────────────────────────────────────
  const factorCtx = document.getElementById('factorChart');
  if (factorCtx) {
    new Chart(factorCtx, {
      type: 'bar',
      data: {
        labels: ['Forum comments', 'Forum words', 'Quiz score', 'Quiz attempts', 'Learning duration', 'Task uploads', 'Log records', 'Quiz attempt duration'],
        datasets: [
          {
            label: 'Forum Activity',
            data: [0.69, 0.78, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(59,130,246,0.85)',
            borderRadius: 4,
          },
          {
            label: 'Quiz Performance',
            data: [0, 0, 0.88, 0.94, 0, 0, 0, 0],
            backgroundColor: 'rgba(236,72,153,0.85)',
            borderRadius: 4,
          },
          {
            label: 'Learning Effort',
            data: [0, 0, 0, 0, 0.77, 0.57, 0.56, 0.47],
            backgroundColor: 'rgba(34,197,94,0.85)',
            borderRadius: 4,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { family: 'Inter', size: 13, weight: '600' },
              color: '#1a2744',
              boxWidth: 14,
              padding: 20,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ctx.dataset.data[ctx.dataIndex] > 0
                ? ` ${ctx.dataset.label}: ${ctx.dataset.data[ctx.dataIndex].toFixed(2)}`
                : null,
              filter: (item) => item.raw > 0,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            min: 0, max: 1.05,
            grid: { color: 'rgba(0,0,0,0.06)' },
            ticks: { font: { family: 'Inter', size: 12 }, color: '#475569' },
            title: { display: true, text: 'Factor Loading', font: { family: 'Inter', size: 13, weight: '600' }, color: '#1a2744' },
          },
          y: {
            stacked: true,
            grid: { display: false },
            ticks: { font: { family: 'Source Sans 3', size: 14 }, color: '#1a2744' },
          },
        },
      },
    });
  }

  // ── Chart 2: Regression / Forum Power (Slide 8) ─────────────────────────────
  const regCtx = document.getElementById('regressionChart');
  if (regCtx) {
    new Chart(regCtx, {
      type: 'bar',
      data: {
        labels: ['Forum Activity', 'Learning Effort', 'Quiz Performance'],
        datasets: [
          {
            label: 'Course Completion (Odds Ratio)',
            data: [14.895, 1.513, 1.419],
            backgroundColor: ['rgba(33,150,166,0.9)', 'rgba(245,158,11,0.7)', 'rgba(107,114,128,0.4)'],
            borderRadius: 6,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          annotation: {},
          tooltip: {
            callbacks: {
              label: (ctx) => ` OR = ${ctx.raw.toFixed(3)}`,
            },
          },
          datalabels: false,
        },
        scales: {
          x: {
            min: 0,
            grid: { color: 'rgba(0,0,0,0.06)' },
            ticks: { font: { family: 'Inter', size: 12 }, color: '#475569' },
            title: { display: true, text: 'Odds Ratio (Course Completion)', font: { family: 'Inter', size: 13, weight: '600' }, color: '#1a2744' },
          },
          y: {
            grid: { display: false },
            ticks: { font: { family: 'Inter', size: 15, weight: '600' }, color: '#1a2744' },
          },
        },
      },
    });
  }

  // ── Chart 3: Cluster Radar (Slide 9) ────────────────────────────────────────
  const clusterCtx = document.getElementById('clusterChart');
  if (clusterCtx) {
    new Chart(clusterCtx, {
      type: 'radar',
      data: {
        labels: ['Forum Activity', 'Learning Duration', 'Log Records', 'Quiz Score', 'Task Uploads'],
        datasets: [
          {
            label: 'Active Collaborators',
            data: [1.01, 1.11, 0.00, 0.02, 0.5],
            borderColor: 'rgba(59,130,246,0.9)',
            backgroundColor: 'rgba(59,130,246,0.15)',
            pointBackgroundColor: 'rgba(59,130,246,0.9)',
            borderWidth: 2.5,
          },
          {
            label: 'Struggling Strivers',
            data: [0.8, 1.92, 0.88, -0.75, 0.7],
            borderColor: 'rgba(249,115,22,0.9)',
            backgroundColor: 'rgba(249,115,22,0.12)',
            pointBackgroundColor: 'rgba(249,115,22,0.9)',
            borderWidth: 2.5,
          },
          {
            label: 'Efficient Achievers',
            data: [-0.2, -0.6, -0.7, 0.78, -0.2],
            borderColor: 'rgba(34,197,94,0.9)',
            backgroundColor: 'rgba(34,197,94,0.12)',
            pointBackgroundColor: 'rgba(34,197,94,0.9)',
            borderWidth: 2.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { family: 'Inter', size: 13, weight: '600' },
              color: '#ffffff',
              padding: 20,
              boxWidth: 14,
            },
          },
        },
        scales: {
          r: {
            min: -1.5, max: 2.2,
            grid: { color: 'rgba(255,255,255,0.15)' },
            angleLines: { color: 'rgba(255,255,255,0.15)' },
            pointLabels: {
              font: { family: 'Inter', size: 13, weight: '600' },
              color: 'rgba(255,255,255,0.85)',
            },
            ticks: {
              color: 'rgba(255,255,255,0.4)',
              font: { size: 10 },
              backdropColor: 'transparent',
              stepSize: 0.5,
            },
          },
        },
      },
    });
  }
}

document.addEventListener('DOMContentLoaded', initCharts);
