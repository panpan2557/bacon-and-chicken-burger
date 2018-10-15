$(document).ready(function(){
  // Amcharts map setup
  let map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",
    "colorSteps": 10,
    "dataProvider": {
      "map": "usaLow",
      "areas": [{
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
      "autoZoom": true,
      "balloonText": "[[title]]: [[value]]"
    },
    "valueLegend": {
      "right": 80,
      "bottom": 100,
      "minValue": "Low cases",
      "maxValue": "Many cases"
    },
    "export": {
      "enabled": true
    }
  });

  let infoPanel = $('#info-panel')
  let overlayPanel = $('#overlay-panel')
  let mapPanel = $('#map-panel')
  let toggleButton = $('#toggle-button')
  let mapSwitchButton = $('#map-switch-button')
  // stats & news div
  let newsCard = $('#news-card')
  let statNumCases = $('#stat-num-cases')
  let mNum = $('#m-num')
  let fNum = $('#fm-num')
  let highRankDiv = $('#high-rank')
  let lowRankDiv = $('#low-rank')
  let highRankAcpcDiv = $('#high-rank-acpc')
  let lowRankAcpcDiv = $('#low-rank-acpc')
  let statYear = $('#stat-year')

  const grey = '#6c757d'
  const green = '#28a745'
  const black = '#00000'
  const orange = 'orange'
  const acpcColor = '#DBC08B'
  const acpcSolidColor = '#FFAA00'
  const casesColor = '#67b7dc'
  const casesColorSolid = '#003767'

  let isOverlayedToggle = false
  let isNumberOfCases = true

  let mapOpac = 0.5

  let currentYear = 0
  let currentYearData = {}

  // click event handling
  toggleButton.click(function() {
    if (!isOverlayedToggle) {
      mapOpac = 1
      animateBgAndBorderColor(toggleButton, green) // change button color -> green
      mapPanel.css('pointer-events', 'auto') // enable click event on the map
      // animate the panels
      overlayPanel.fadeOut(200)
      mapSwitchButton.fadeIn(200)
    } else {
      mapOpac = 0.5
      animateBgAndBorderColor(toggleButton, grey)
      mapPanel.css('pointer-events', 'none')
      overlayPanel.fadeIn(200)
      mapSwitchButton.fadeOut(200)
    }
    mapPanel.animate({
      duration: 200,
      opacity: mapOpac
    })
    isOverlayedToggle = !isOverlayedToggle
  })
  mapSwitchButton.click(function() {
    if (isNumberOfCases) {
      // switch to acpc by changing the data & color
      $(this).html("Switch to <b>Number of Cases</b>")
      map.areasSettings.color = acpcColor
      map.areasSettings.colorSolid = acpcSolidColor
      map.areasSettings.balloonText = "[[title]]: $[[value]]"
      map.valueLegend.minValue = "Low ACPC"
      map.valueLegend.maxValue = "High ACPC"
      updateMapData(map, currentYearData.heatmapAcpc)
    } else {
      $(this).html("Switch to <b>Average charges Per Case (ACPC)</b>")
      map.areasSettings.color = casesColor
      map.areasSettings.colorSolid = casesColorSolid
      map.areasSettings.balloonText = "[[title]]: [[value]]"
      map.valueLegend.minValue = "Low cases"
      map.valueLegend.maxValue = "Many cases"
      updateMapData(map, currentYearData.heatmap)
    }
    isNumberOfCases = !isNumberOfCases
  })
  $('span.date').click(function () {
    console.log("clicked")
    let id = $(this).attr('id')
    currentYear = id.slice(6) + ''
    currentYearData = data[currentYear]
    if (isNumberOfCases) {
      updateMapData(map, currentYearData.heatmap)
    } else {
      updateMapData(map, currentYearData.heatmapAcpc)
    }
    updateStatsData(currentYearData, currentYear)
    updateNewsData(currentYear)
    animateYearColor($('span.date'), black)
    animateYearColor($(this), orange)
  })

  // add commas to the input number (from stackoverflow!)
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function animateBgAndBorderColor(el, color) {
    el.animate({
      borderBottomColor: color,
      borderLeftColor: color,
      borderRightColor: color,
      borderTopColor: color,
      backgroundColor: color
    }, 200)
  }

  function animateYearColor(el, color) {
    el.animate({
      borderBottomColor: color,
      borderLeftColor: color,
      borderRightColor: color,
      borderTopColor: color
    }, 150)
  }

  function createRanks(rankDiv, arr, type) {
    rankDiv.empty()
    rankDiv = rankDiv[0]
    let i = 1
    arr.forEach(function(item) {
      let state = item[0]
      let count = item[1]
      state = state.split("-")[1]
      let span = document.createElement('span')
      span.setAttribute('class', 'grey')
      if (type === "cases")
        span.textContent = '(' + numberWithCommas(count) + ')'
      else
        span.textContent = '($' + numberWithCommas(count.toFixed(2)) + ')'
      let p = document.createElement("p")
      p.setAttribute('class', 'm-1')
      let stateFullName = statesMap[state]
      p.textContent = i + '. ' + stateFullName + ' '
      p.appendChild(span)
      rankDiv.appendChild(p)
      i += 1
    })
  }

  function updateMapData(map, data) {
    let val = 0
    let mappedData = Object.keys(data).map(key => {
      val = data[key]
      return {id: key, value: val}
    })
    map.dataProvider.areas = mappedData
    map.validateData()
  }

  function updateStatsData(data, year) {
    statYear.text(year)
    let heatmap = data.heatmap
    let stats = data.stats
    let totalCases = stats.totalCases
    let fn = stats.F, mn = stats.M
    let fp = (fn / (fn + mn) * 100).toFixed(1), mp = (mn / (fn + mn) * 100).toFixed(1)
    let topHigh = stats.topHigh
    let topLow = stats.topLow
    let topHighAcpc = stats.topHighAcpc
    let topLowAcpc = stats.topLowAcpc
    statNumCases.text(numberWithCommas(totalCases))
    mNum.text(numberWithCommas(mn) + " (" + mp + "%)")
    fNum.text(numberWithCommas(fn) + " (" + fp + "%)")
    createRanks(highRankDiv, topHigh, "cases")
    createRanks(lowRankDiv, topLow, "cases")
    createRanks(highRankAcpcDiv, topHighAcpc, "acpc")
    createRanks(lowRankAcpcDiv, topLowAcpc, "acpc")
  }

  function updateNewsData(year) {
    newsCard.html("") // reset news content
    // check if there are news for the specific year
    if (year in news) {
      // show + update news Panel
      let yearNews = news[year]
      newsCard.css('display', 'block')
      let img = document.createElement('img')
      img.setAttribute('class', 'card-img-top')
      img.setAttribute('src', yearNews['img'])
      let overlayDiv = document.createElement('div')
      overlayDiv.setAttribute('class', 'card-img-overlay')
      let newsh2 = document.createElement('h2')
      let newsSpan = document.createElement('span')
      newsSpan.setAttribute('class', 'badge badge-primary')
      newsSpan.textContent = "News"

      newsh2.appendChild(newsSpan)
      overlayDiv.appendChild(newsh2)

      let textDiv = document.createElement('div')
      textDiv.setAttribute('class', 'card-body')
      let header = document.createElement('h4')
      header.setAttribute('class', 'card-title')
      header.textContent = yearNews['headline']
      let p = document.createElement('p')
      p.setAttribute('class', 'card-text')
      p.textContent = yearNews['description']

      textDiv.appendChild(header)
      textDiv.appendChild(p)

      newsCard[0].appendChild(img)
      newsCard[0].appendChild(overlayDiv)
      newsCard[0].appendChild(textDiv)
    } else {
      // hide and clear
      newsCard.css('display', 'none')
    }
  }

  function generateTimelineFromYear(from, to){
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

  // generate timeline
  let sortedKeys = Object.keys(data).sort()
  let min = parseInt(sortedKeys[0])
  let max = parseInt(sortedKeys[sortedKeys.length - 1])
  generateTimelineFromYear(min, max)
});
