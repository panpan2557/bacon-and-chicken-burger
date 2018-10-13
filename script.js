// setup marker svg
let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

let map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "colorSteps": 10,

  "dataProvider": {
    "map": "usaLow",
    "areas": [ 
      {
      "id": "US-AL",
      "value": 4447100
    }, {
      "id": "US-AK",
      "value": 626932
    }, {
      "id": "US-AZ",
      "value": 5130632
    }, {
      "id": "US-AR",
      "value": 2673400
    }, {
      "id": "US-CA",
      "value": 33871648
    }, {
      "id": "US-CO",
      "value": 4301261
    }, {
      "id": "US-CT",
      "value": 3405565
    }, {
      "id": "US-DE",
      "value": 783600
    }, {
      "id": "US-FL",
      "value": 15982378
    }, {
      "id": "US-GA",
      "value": 8186453
    }, {
      "id": "US-HI",
      "value": 1211537
    }, {
      "id": "US-ID",
      "value": 1293953
    }, {
      "id": "US-IL",
      "value": 12419293
    }, {
      "id": "US-IN",
      "value": 6080485
    }, {
      "id": "US-IA",
      "value": 2926324
    }, {
      "id": "US-KS",
      "value": 2688418
    }, {
      "id": "US-KY",
      "value": 4041769
    }, {
      "id": "US-LA",
      "value": 4468976
    }, {
      "id": "US-ME",
      "value": 1274923
    }, {
      "id": "US-MD",
      "value": 5296486
    }, {
      "id": "US-MA",
      "value": 6349097
    }, {
      "id": "US-MI",
      "value": 9938444
    }, {
      "id": "US-MN",
      "value": 4919479
    }, {
      "id": "US-MS",
      "value": 2844658
    }, {
      "id": "US-MO",
      "value": 5595211
    }, {
      "id": "US-MT",
      "value": 902195
    }, {
      "id": "US-NE",
      "value": 1711263
    }, {
      "id": "US-NV",
      "value": 1998257
    }, {
      "id": "US-NH",
      "value": 1235786
    }, {
      "id": "US-NJ",
      "value": 8414350
    }, {
      "id": "US-NM",
      "value": 1819046
    }, {
      "id": "US-NY",
      "value": 18976457
    }, {
      "id": "US-NC",
      "value": 8049313
    }, {
      "id": "US-ND",
      "value": 642200
    }, {
      "id": "US-OH",
      "value": 11353140
    }, {
      "id": "US-OK",
      "value": 3450654
    }, {
      "id": "US-OR",
      "value": 3421399
    }, {
      "id": "US-PA",
      "value": 12281054
    }, {
      "id": "US-RI",
      "value": 1048319
    }, {
      "id": "US-SC",
      "value": 4012012
    }, {
      "id": "US-SD",
      "value": 754844
    }, {
      "id": "US-TN",
      "value": 5689283
    }, {
      "id": "US-TX",
      "value": 20851820
    }, {
      "id": "US-UT",
      "value": 2233169
    }, {
      "id": "US-VT",
      "value": 608827
    }, {
      "id": "US-VA",
      "value": 7078515
    }, {
      "id": "US-WA",
      "value": 5894121
    }, {
      "id": "US-WV",
      "value": 1808344
    }, {
      "id": "US-WI",
      "value": 5363675
    }, {
      "id": "US-WY",
      "value": 493782
    } ],
    "images": [
      {
          "svgPath": targetSVG,
          "zoomLevel": 5,
          "scale": 0.5,
          "title": "Vienna",
          "latitude": 41.5359,
          "longitude": 93.5711
      }
    ]
  },

  "areasSettings": {
    "autoZoom": true
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

// setup event handler
let infoPanel = $('#info-panel')
let mapPanel = $('#map-panel')
let toggleButton = $('#toggle-button')
let isOverlayedToggle = false
let mapOpac = 0.5
let overlayOpac = 0
let grey = '#6c757d'
let green = '#28a745'
toggleButton.click(function() {
  if (!isOverlayedToggle) {
    overlayOpac = 0
    mapOpac = 1
    // change button color to green
    animateColor(toggleButton, green)
    mapPanel.css('pointer-events', 'auto')
  } else {
    overlayOpac = 1
    mapOpac = 0.5
    // change button color to gray
    animateColor(toggleButton, grey)
    mapPanel.css('pointer-events', 'none')
  }
  infoPanel.animate({
    duration: 400,
    opacity: overlayOpac
  })
  mapPanel.animate({
    duration: 400,
    opacity: mapOpac
  })
  isOverlayedToggle = !isOverlayedToggle
})
let testData = [ 
  {
    "id": "US-AL",
    "value": 4447100
  }, {
    "id": "US-AK",
    "value": 626932
  }, {
    "id": "US-AZ",
    "value": 5130632
  }, {
    "id": "US-AR",
    "value": 2673400
  }, {
    "id": "US-CA",
    "value": 33871648
  }, {
    "id": "US-CO",
    "value": 4301261
  }, {
    "id": "US-CT",
    "value": 3405565
  }, {
    "id": "US-DE",
    "value": 783600
  }, {
    "id": "US-FL",
    "value": 15982378
  }, {
    "id": "US-GA",
    "value": 8186453
  }, {
    "id": "US-HI",
    "value": 1211537
  }, {
    "id": "US-ID",
    "value": 1293953
  }, {
    "id": "US-IL",
    "value": 12419293
  }, {
    "id": "US-IN",
    "value": 6080485
  }, {
    "id": "US-IA",
    "value": 2926324
  }, {
    "id": "US-KS",
    "value": 2688418
  }, {
    "id": "US-KY",
    "value": 4041769
  }, {
    "id": "US-LA",
    "value": 11111111
  }, {
    "id": "US-ME",
    "value": 1274923
  }, {
    "id": "US-MD",
    "value": 5296486
  }, {
    "id": "US-MA",
    "value": 6349097
  }, {
    "id": "US-MI",
    "value": 9938444
  }, {
    "id": "US-MN",
    "value": 4919479
  }, {
    "id": "US-MS",
    "value": 2844658
  }, {
    "id": "US-MO",
    "value": 5595211
  }, {
    "id": "US-MT",
    "value": 902195
  }, {
    "id": "US-NE",
    "value": 1711263
  }, {
    "id": "US-NV",
    "value": 1998257
  }, {
    "id": "US-NH",
    "value": 1235786
  }, {
    "id": "US-NJ",
    "value": 8414350
  }, {
    "id": "US-NM",
    "value": 1819046
  }, {
    "id": "US-NY",
    "value": 18976457
  }, {
    "id": "US-NC",
    "value": 8049313
  }, {
    "id": "US-ND",
    "value": 642200
  }, {
    "id": "US-OH",
    "value": 11353140
  }, {
    "id": "US-OK",
    "value": 3450654
  }, {
    "id": "US-OR",
    "value": 3421399
  }, {
    "id": "US-PA",
    "value": 12281054
  }, {
    "id": "US-RI",
    "value": 1048319
  }, {
    "id": "US-SC",
    "value": 4012012
  }, {
    "id": "US-SD",
    "value": 754844
  }, {
    "id": "US-TN",
    "value": 5689283
  }, {
    "id": "US-TX",
    "value": 20851820
  }, {
    "id": "US-UT",
    "value": 2233169
  }, {
    "id": "US-VT",
    "value": 608827
  }, {
    "id": "US-VA",
    "value": 7078515
  }, {
    "id": "US-WA",
    "value": 5894121
  }, {
    "id": "US-WV",
    "value": 1808344
  }, {
    "id": "US-WI",
    "value": 5363675
  }, {
    "id": "US-WY",
    "value": 493782
  } 
]

function updateMapData(map, data) {
  map.dataProvider.areas = testData
  map.validateData()
}

function updateStatsMap() {

}

let testButton = $('#test-button')
testButton.click(function() {
  // update the heatmap data
  updateMapData(map, testData)
  // update stats and news
  updateStatsMap()
})

