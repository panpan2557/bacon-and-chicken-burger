// setup marker svg
let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

let YEAR = 0;

let map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "colorSteps": 10,
  "dataProvider": {
    "map": "usaLow",
    "areas": [
      {
      "id": "US-AL",
      "value": 0
    }, {
      "id": "US-AK",
      "value": 0
    }, {
      "id": "US-AZ",
      "value": 0
    }, {
      "id": "US-AR",
      "value": 0
    }, {
      "id": "US-CA",
      "value": 0
    }, {
      "id": "US-CO",
      "value": 0
    }, {
      "id": "US-CT",
      "value": 0
    }, {
      "id": "US-DE",
      "value": 0
    }, {
      "id": "US-FL",
      "value": 0
    }, {
      "id": "US-GA",
      "value": 0
    }, {
      "id": "US-HI",
      "value": 0
    }, {
      "id": "US-ID",
      "value": 0
    }, {
      "id": "US-IL",
      "value": 0
    }, {
      "id": "US-IN",
      "value": 0
    }, {
      "id": "US-IA",
      "value": 0
    }, {
      "id": "US-KS",
      "value": 0
    }, {
      "id": "US-KY",
      "value": 0
    }, {
      "id": "US-LA",
      "value": 0
    }, {
      "id": "US-ME",
      "value": 0
    }, {
      "id": "US-MD",
      "value": 0
    }, {
      "id": "US-MA",
      "value": 0
    }, {
      "id": "US-MI",
      "value": 0
    }, {
      "id": "US-MN",
      "value": 0
    }, {
      "id": "US-MS",
      "value": 0
    }, {
      "id": "US-MO",
      "value": 0
    }, {
      "id": "US-MT",
      "value": 0
    }, {
      "id": "US-NE",
      "value": 0
    }, {
      "id": "US-NV",
      "value": 0
    }, {
      "id": "US-NH",
      "value": 0
    }, {
      "id": "US-NJ",
      "value": 0
    }, {
      "id": "US-NM",
      "value": 0
    }, {
      "id": "US-NY",
      "value": 0
    }, {
      "id": "US-NC",
      "value": 0
    }, {
      "id": "US-ND",
      "value": 0
    }, {
      "id": "US-OH",
      "value": 0
    }, {
      "id": "US-OK",
      "value": 0
    }, {
      "id": "US-OR",
      "value": 0
    }, {
      "id": "US-PA",
      "value": 0
    }, {
      "id": "US-RI",
      "value": 0
    }, {
      "id": "US-SC",
      "value": 0
    }, {
      "id": "US-SD",
      "value": 0
    }, {
      "id": "US-TN",
      "value": 0
    }, {
      "id": "US-TX",
      "value": 0
    }, {
      "id": "US-UT",
      "value": 0
    }, {
      "id": "US-VT",
      "value": 0
    }, {
      "id": "US-VA",
      "value": 0
    }, {
      "id": "US-WA",
      "value": 0
    }, {
      "id": "US-WV",
      "value": 0
    }, {
      "id": "US-WI",
      "value": 0
    }, {
      "id": "US-WY",
      "value": 0
    } ],
    "images": [
      // {
      //     "svgPath": targetSVG,
      //     "zoomLevel": 5,
      //     "scale": 0.5,
      //     "title": "Vienna",
      //     "latitude": 41.5359,
      //     "longitude": 93.5711
      // }
    ]
  },

  "areasSettings": {
    "autoZoom": true
  },

  "ballonFunction": function(graphDataItem, graph) {
    console.log(graphDataItem)
    var value = graphDataItem.values.value;
    return value + "<br>(Little)";
  },

  "valueLegend": {
    "right": 10,
    "minValue": "little",
    "maxValue": "a lot!"
  },

  "export": {
    "enabled": true
  }
});

function animateColor(el, color) {
  el.animate({
    borderBottomColor: color,
    borderLeftColor: color,
    borderRightColor: color,
    borderTopColor: color,
    backgroundColor: color
  }, 400)
}

function animateYearColor(el, color) {
  el.animate({
    borderBottomColor: color,
    borderLeftColor: color,
    borderRightColor: color,
    borderTopColor: color
  }, 150)
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// setup event handler
let infoPanel = $('#info-panel')
let mapPanel = $('#map-panel')
let toggleButton = $('#toggle-button')
let isOverlayedToggle = false
let mapOpac = 0.5
let overlayOpac = 0
let overlayDisplay = 'none'
let grey = '#6c757d'
let green = '#28a745'
const black = '#00000'
const orange = 'orange'

toggleButton.click(function() {
  if (!isOverlayedToggle) {
    overlayOpac = 0
    mapOpac = 1
    // change button color to green
    animateColor(toggleButton, green)
    mapPanel.css('pointer-events', 'auto')
    overlayDisplay = 'none'
    infoPanel.fadeOut(400)
  } else {
    overlayOpac = 1
    mapOpac = 0.5
    // change button color to gray
    animateColor(toggleButton, grey)
    mapPanel.css('pointer-events', 'none')
    overlayDisplay = 'block'
    infoPanel.fadeIn(400)
  }
  mapPanel.animate({
    duration: 400,
    opacity: mapOpac
  })
  isOverlayedToggle = !isOverlayedToggle
})

function updateMapData(map, data) {
  console.log("in updateMapData")
  data = data.heatmap
  let val = 0
  let mappedData = Object.keys(data).map(key => {
    val = data[key]
    return {id: key, value: val}
  })
  console.log(mappedData)
  map.dataProvider.areas = mappedData
  map.validateData()

  console.log("update mapData")
  console.log(map.dataProvider.areas)
}

let statNumCases = $('#stat-num-cases')
let mNum = $('#m-num')
let fNum = $('#fm-num')
let highRankDiv = $('#high-rank')
let lowRankDiv = $('#low-rank')
let statYear = $('#stat-year')
function createRanks(rankDiv, arr) {
  rankDiv.empty()
  rankDiv = rankDiv[0]
  let i = 1
  arr.forEach(function(item) {
    let state = item[0]
    let count = item[1]
    state = state.split("-")[1]
    let span = document.createElement('span')
    span.setAttribute('class', 'grey')
    span.textContent = '(' + numberWithCommas(count) + ')'
    let p = document.createElement("p")
    p.setAttribute('class', 'm-1')
    p.textContent = i + '. ' + state + ' '
    p.appendChild(span)
    rankDiv.appendChild(p)
    i += 1
  })
}

// createRanks(highRankDiv, [['UL', 100], ['UT', 20]])

let testButton = $('#test-button')

// updateMapData(map, testHeatmap)


$(document).ready(function(){
  let sortedKeys = Object.keys(data).sort()
  let min = parseInt(sortedKeys[0])
  let max = parseInt(sortedKeys[sortedKeys.length - 1])
  generateTimelineFromYear(min, max)
  $('span.date').click(function () {
    idd = $(this).attr('id');
    YEAR = idd.slice(6) + '';
    let yearData = data[YEAR]
    updateMapData(map, yearData)
    updateStatsData(yearData, YEAR)
    animateYearColor($('span.date'), black)
    animateYearColor($(this), orange)
  });
});

function updateStatsData(data, year) {
  statYear.text(year)
  let heatmap = data.heatmap
  let stats = data.stats
  let totalCases = stats.totalCases
  let fn = stats.F, mn = stats.M
  let topHigh = stats.topHigh
  let topLow = stats.topLow
  statNumCases.text(numberWithCommas(totalCases))
  mNum.text(numberWithCommas(mn))
  fNum.text(numberWithCommas(fn))
  createRanks(highRankDiv, topHigh)
  createRanks(lowRankDiv, topLow)
}

function generateTimelineFromYear(from,to){
  for (i = from; i<=to; ++i){
    $('#timeline').append(
      '<div class="js-year">' +
        '<article>' +
          '<div class="inner">' +
            '<span class="date" id=circle'+i+'>' +
              '<br>' +
              '<span class="year">' + i +'</span>' +
            '</span>' +
        '</article>' +
      '</div>'
    );
  }
}
