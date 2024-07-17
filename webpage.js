var layout = {
  title: {
    text:'Plot Title',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: "orange",
  xaxis: {
    title: {
      text: 'x Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'y Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: ['red', 'green', 'orange', 'yellow', 'purple'],
      y: [1, 2, 4, 8, 16],
    type: 'bar'
    }
  ],
  layout
);


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.plot.ly/plotly-2.32.0.min.js" charset="utf-8"></script>
</head>

<body>
  <div id="tester" style="width:600px;height:400px;"></div>
  <script>
    TESTER = document.getElementById('tester');
    Plotly.newPlot(TESTER, [{
      x: [470, 525, 560, 585, 600, 645, 700, 735, 810, 880, 940],
      y: [-0.3273322422, 7.395498392, 18.53035144, 66.28289474, 88.6914378, 106.539075, 115.5594406, 122.761194, 120.8333333, 119.4762684, 119.12045891],
      mode: 'markers+lines',
      marker: {
        color: 'rgba(156, 165, 196, 1.0)',
        size: 8,
        line: {
          color: 'rgba(156, 165, 196, 1.0)',
          width: 2
        }
      },
      line: {
        color: 'rgba(156, 165, 196, 1.0)',
        width: 2
      }
    }], {
      title: {
        text: 'Reflection Spectrum',
        font: {
          family: 'Arial, sans-serif',
          size: 24,
          color: 'black',
          weight: 'bold'
        }
      },
      xaxis: {
        title: 'Wavelength (nm)',
        showgrid: true,
        zeroline: false
      },
      yaxis: {
        title: '% Reflectance',
        showgrid: true,
        zeroline: false
      },
      margin: { t: 50 }
    });
  </script>
</body>

</html>
