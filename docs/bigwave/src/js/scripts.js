// ESSENTIAL

function timeDifference(previous) {
  var current = (new Date()).getTime();

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - (previous * 1000);

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  }

  else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  }

  else if (elapsed < msPerMonth) {
    return '~ ' + Math.round(elapsed / msPerDay) + ' days ago';
  }

  else if (elapsed < msPerYear) {
    return '~ ' + Math.round(elapsed / msPerMonth) + ' months ago';
  }

  else {
    return '~ ' + Math.round(elapsed / msPerYear) + ' years ago';
  }
}

function monthName(e) {
  var m = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return m[e];
}

const formatDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

const formatCurrency = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 2
})

const formatInt = new Intl.NumberFormat('en-GB')

function formatHumanise (n) {
  return Math.abs(Number(n)) >= 1.0e+9
  ? (Math.abs(Number(n)) / 1.0e+9).toFixed(2) + "B"
  : Math.abs(Number(n)) >= 1.0e+6
  ? (Math.abs(Number(n)) / 1.0e+6).toFixed(2) + "M"
  : Math.abs(Number(n)) >= 1.0e+3
  ? (Math.abs(Number(n)) / 1.0e+3).toFixed(2) + "K"
  : Math.abs(Number(n));
}


window.notify = function (t, c, s, f) {
  var n = document.createElement("div");
  n.classList.add("notification")
  var payload = document.createElement("div");
  payload.classList.add("notification-payload")
  c && isNaN(c) && c.length > 2 ? (n.classList.add(c)) : (s = c)
  var icon = document.createElement("i");
  icon.classList.add("fas")

  switch (c) {
    case 'bad':
      icon.classList.add("fa-times")
      break;
    case 'good':
      icon.classList.add("fa-check")
      break;
    case 'warn':
      icon.classList.add("fa-exclamation")
      break;
    default:
      icon.classList.add("fa-info")
  }

  payload.append(icon);
  var message = document.createElement("span");
  message.innerHTML = t;
  payload.append(message)

  if ((c && !s) || (!c && !s) || (s && isNaN(s) && s.length > 0)) {
    var action = document.createElement("button")
    action.setAttribute("onclick", `window.destroyNotification(this);${f}`)
    action.innerHTML = s ? s : "dismiss";
    payload.append(action);
  } else if ((!s && c && !isNaN(c)) || !isNaN(s)) {
    s = s < 0 ? s * -1 : s;
    s = s < 100 ? s * 1000 : s < 1000 ? 1000 : s;
    setTimeout(function () {
      document.querySelectorAll(".notification").forEach(function (e) { e.remove() })
    }, s)
  }
  n.append(payload);
  document.body.append(n);
}

window.destroyNotification = function (t) {
  t.parentNode.parentNode.remove();
}
// first parameter is the message string
// type (optional) can be "good", "bad" or "warn"
// third parameter (optional) can be a timeout in ms or a text string for the `dismiss` button.
// the default is a `dismiss` button
// final parameter (optional) can only be set when all other parameters contain valid values.
// the final parameter is a function which must be passed as a string e.g. "window.confirmChoice()"
// Bool combination actions are not supported but the code is easily modified for this purpose
// contact flat18 (flat18.co.uk) for more details

// e.g. window.notify("You must agree that this is a notification.", "good", "I Agree")


var theme;

if (!theme || theme.length < 1) {
  if (!localStorage.getItem('theme')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }
} else {
  localStorage.setItem('theme', theme);
}
theme = localStorage.getItem('theme');

function setThemeDark() {
  document.body.classList.remove("body-theme-override-light");
  document.body.classList.add("body-theme-override-dark");
  localStorage.setItem('theme', 'dark');

}

function setThemeLight() {
  document.body.classList.remove("body-theme-override-dark");
  document.body.classList.add("body-theme-override-light");
  localStorage.setItem('theme', 'light');

}

switch (theme) {
  case "auto":
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeDark()
    } else {
      setThemeLight()
    }
    break;
  case "dark":
    setThemeDark()
    break;
  case "light":
    setThemeLight()
    break;
  default:
    setThemeLight()
}

// END THEME  



var cpre;
document.querySelectorAll(".menuTrigger").length > 0 && (
  setMenuTriggers()
)

function setMenuTriggers() {
  document.querySelectorAll(".menuTrigger").forEach(function (m) {
    m.addEventListener("click", function (e) {
      cpre = 1;
      setTimeout(function () { cpre = 0 }, 1000)
      e.currentTarget.classList.contains("open") ? (e.currentTarget.classList.remove("open")) : (e.currentTarget.classList.add("open"));
    })
  })

  document.querySelectorAll(".menu").forEach(function (m) {
    m.addEventListener("click", function (e) {
      e.currentTarget.parentNode.querySelectorAll(".menuTrigger")[0].classList.remove("open")
    })
  })
  document.querySelectorAll(".btn-connect").forEach(function (e) { e.addEventListener("click", onConnect); })
  // document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);

}

async function UIWorkingInit(x) {
  x = !x || isNaN(x) ? 100 : x;
  document.getElementById("loader").style.display = ""
  document.getElementById("app").style.filter = "blur(5px)"

  setTimeout(function () {
    document.getElementById("loader") && (
      document.getElementById("loader").style.display = "none"
    )
    document.getElementById("app") && (
      document.getElementById("app").style.filter = "blur(0px)"
    )
  }, x);
}

// END ESSENTIAL MATHS AND UI FUNCTIONS

//POLYFILL
if (!Date.now) {
  Date.now = () => new Date().getTime();
}
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
//END






















var loadActivityFlag;
var permanentlyStop;
var fetching;
function fetchApplicationData(m) {
  fetching = true;
    if(!window.poolPayload) {
      permanentlyStop = true;
      window.notify("Failed fetching application data. Try reloading the page. If the error persists, try clearing the browser cache.", "bad", "Dismiss")
      return;
    } else {
      window.selectedPool = !window.selectedPool ? String(window.poolPayload.tokens[0].tid) : window.selectedPool;
      window.__pool = {
        data: window.poolPayload,
        selected: window.selectedPool,
        selectedIndex: 0,
        __proposalInspector: false,
        __stakingSelection: false,
        __depositSelection: window.poolPayload.depositTokens[0].name,
        applicationLanguage: window.applicationLanguage,
        page: false,
        tab: false,
        lb: window.poolPayload.tokens,
        lbSwitch:{market:"auto",can:{pause:false,swap:false,weight:false,token:false,whitelist:false,limit:false}},
        lbWeight: 0,
        lbTime:Date.now()
      };
      fetching = false
      makeHomePage()
      wHist()
      document.getElementById("app").classList.remove("-loading");
      loadActivityFlag = false;
    }
}

fetchApplicationData();

var wh;
var ww;
wh = window.innerHeight;
ww = window.innerWidth;

window.onresize = function () {
  wh = window.innerHeight;
  ww = window.innerWidth;
    makeChart(window.selectedPoolIndex);
};

var chartData;
function makeChart(s) {
  if (window.poolPayload && window.selectedPool) {
    var p = window.poolPayload.tokens;
    // var s = window.selectedPool;
  }
  else if (!window.poolPayload || !window.selectedPool) { return }
  var c = document.getElementById("graph");
  c.style.display = "none";
  if (c) {
    var chart01Parent = document.getElementById("graphParent");
    c.innerHTML = "";
    var h;
    h = chart01Parent.getBoundingClientRect().height >= (window.outerHeight * .3) && window.outerWidth <= 750 ? window.outerHeight * .3 : 500;
    var chartWidth = chart01Parent.getBoundingClientRect().width;
    var chart = LightweightCharts.createChart(c, {
      width: chartWidth,
      height: h,
      priceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },

      grid: {
        horzLines: {
          visible: false
        },
        vertLines: {
          visible: false
        }
      },
      layout: {
        backgroundColor: "#ffffff00",
        textColor: "#6702FF",
        fontSize: 14,
        fontFamily: "Montserrat"
      }
    });

    chart.applyOptions({
      handleScroll: false,
      handleScale: false
    });

    var lineSeries = chart.addAreaSeries({
      topColor: '#6702FF',
      bottomColor: '#6702FF00',
      lineColor: '#6702FF',
      lineWidth: 2,
    });



    //Make timestamps with respect to time now
    chartData = Array();
    var n = Date.now();
    var ts = Math.round((new Date()).getTime() / 1000);
    {
      switch (window.graphFilter) {
        case "7day":
          if (!p[s]['7d-average'][0]['time'] && !isNaN(p[s]['7d-average'][0])) {
            for (i = 0; i < p[s]['7d-average'].length; i++) {
              var dy = 8640 * (i + 1);
              var time_ = ts - dy;
              var value_ = Number(p[s]['7d-average'][p[s]['7d-average'].length - (i + 1)]);
              chartData.push({ time: time_, value: value_ });
            }
          }
          else {
            chartData = p[s]['24hr-average'];
          }
          break;
        case "24hr":
        default:
          if (!p[s]['24hr-average'][0]['time'] && !isNaN(p[s]['24hr-average'][0])) {
            for (i = 0; i < p[s]['24hr-average'].length; i++) {
              var hr = 3600 * (i + 1);
              var time_ = ts - hr;
              var value_ = Number(p[s]['24hr-average'][p[s]['24hr-average'].length - (i + 1)]);
              chartData.push({ time: time_, value: value_ });
            }
          }
          else {
            chartData = p[s]['24hr-average'];
          }
          break;
      }
    }

    lineSeries.setData(chartData);
    chart.timeScale().fitContent();
    c.style.display = "";
    window.dollarToERC20 = p[s].value;

    // TOOLTIP
    if (document.querySelectorAll(".floating-tooltip-2").length < 1) {
      var toolTip = document.createElement("div");
      toolTip.className = "floating-tooltip-2";
      chart01Parent.append(toolTip);
    }

    var toolTip = document.querySelectorAll(".floating-tooltip-2")[0];

    toolTip.innerHTML =
      `<div class="badge"><img loading="lazy" class="token-icon-mini" src="${p[s].icon}"><div>1 ${p[s].tid} : USD</div></div>
      <div style="font-size: 24px;padding: 0.5rem;">$${(p[s]['24hr-average'][p[s]['24hr-average'].length - 1]).toFixed(2)}</div>
      <div style="font-size: 11px;font-family: 'Montserrat';opacity: .5;">${new Date()}</div>`;

    document.getElementById("explorePool") && (
      document.getElementById("explorePool").querySelectorAll("span")[0].innerHTML = `${p[s].tid}`
    )

    chart.subscribeCrosshairMove(function (param) {
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > c.clientWidth ||
        param.point.y < 0 ||
        param.point.y > c.clientHeight
      ) {
        var val = p[s]['24hr-average'][p[s]['24hr-average'].length - 1];
        var dateStr = new Date();
      } else {
        var dateStr = new Date(param.time * 1000);
        var val = param.seriesPrices.get(lineSeries);
      }

      toolTip.innerHTML =
        `<div class="badge"><img class="token-icon-mini" src="${p[s].icon}"><div>1 ${p[s].tid} : USD</div></div>
      <div style="font-size: 24px;padding: 0.5rem;">$${val.toFixed(2)}</div>
      <div style="font-size: 11px;font-family: 'Montserrat';opacity: .5;">${dateStr}</div>`;
    });

    // END TOOLTIP
  }

  document.getElementById("currentReceive") && (
    document.getElementById("currentReceive").innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="${p[s].icon}">&nbsp;${p[s].tid}</span>`
  )
  saniExc()
}


function makeHomePage() {
  new Vue({
    el: `#app`,
    data: window.__pool,
    methods: {
      manualExister: function (e) {
        var r = false, c = 0, a = window.__pool.lb;
        a.forEach(function (t) {
          t.tid === e && t.engaged && (r = true);
          c++
        })
        return r
      },
      percent: function(e,n){return percent(e,n)},
      multiply: function (e, v) {
        if (window.__pool.lbSwitch.market !== 'auto') { return "-";}
        var i, a = window.__pool.lb;
        a.forEach(function (t) {
          !t.amount &&( t.amount = 0);
          t.tid === e && (i = Number(t.amount));
        })
        i = i * v.value;
        i = i <= 0 ? "-" : i.toFixed(2);
        return i;
      },
      rN: function(b, c){
          const n = Math.random()*(c-b) + b
          return Math.floor(n)
        },
      formatCurrency: function (value) {
        return formatCurrency.format(value)
      },
      formatDollar: function (string) {
        return formatDollar.format(string)
      },
      __ts: function (x) {
        var ts = new Date(x * 1000);
         ts = `${ts.getFullYear()} ${monthName(ts.getMonth())} ${ts.getDate()} ${ts.getHours()}.${ts.getMinutes() < 10 ? '0' + ts.getMinutes() : ts.getMinutes()}`
        return ts
      },
      timeDifference: function (s) {
        return timeDifference(s)
      },
      formatInt: function (i) {
        return formatInt.format(i)
      },
      formatHumanise: function(n){return formatHumanise(n)}
    }
  })
  selectPool(window.selectedPool, 0)
}

function selectPool(k, i) {
  window.selectedPool = k;
  window.selectedPoolIndex = i;
  window.__pool.selected = k;
  window.__pool.selectedIndex = i;
  makeChart(i)
}
function lbSet(e, v, g, r) {
  a = window.__pool.lb, c=0;
  a.forEach(function (t) {
    t.tid === e && (t[g] = v);
  })
  g==='weight'&&(
  a.forEach(function (t) {
    t.engaged === true && (c+=Number(t[g]))
  }),
    window.__pool.lbWeight = c)
  window.__pool.lbTime = Date.now();
  if (r) { return v;}
}
function pushByKey(e) {
  const p = window.__pool.lb;
  var i = false;
  p.forEach(function (t) {
    t.tid === e && (t.engaged = true,
      lbSet(e, 1, `weight`)
      );
  })
  window.__pool.lb.sort(function (a, b) {
    return a.engaged - b.engaged;
  })
  window.__pool.lbTime = Date.now();
}

function replaceByKey(e, d) {
  const p = window.__pool.lb;
  var c = 0;
  var i = false;
  p.forEach(function (t) {
    t.tid === e && (t.engaged = false, t.weight=0);
    d!=='destroy' && t.tid === d && (t.engaged = true,lbSet(e, 1, `weight`));
  })
  window.__pool.lb.sort(function (a, b) {
    return a.engaged - b.engaged;
  })
  window.__pool.lbTime = Date.now()
}

function percent(e, n) {
  var i, a = window.__pool.lb;
  a.forEach(function (t) {
    t.tid === e && (i = t.weight);
  })
  var p = Number(i) / Number(n);
  p = isNaN(p) || p>1 || p<0 ? 0 : (Number(i) / Number(n))*100;
  return (p).toFixed(2)
}

if (document.getElementById("dollarInput")) {
  document.getElementById("dollarInput").addEventListener("input", function (e) {
    if (!window.dollarToERC20 || isNaN(this.value)) {
      this.value = 200;
      return;
    }
    var v = this.value * (window.dollarToERC20);
    document.getElementById("tokenInput").value = Number(v).toFixed(2);
  });

  document.getElementById("tokenInput").addEventListener("input", function (e) {
    if (!window.dollarToERC20 || isNaN(this.value)) {
      this.value = 0;
      return;
    }
    var dollar = this.value * (window.dollarToERC20);
    document.getElementById("dollarInput").value = dollar;
  });

  saniExc()
}

function saniExc() {
  document.getElementById("dollarInput").value = 200;
  window.dollarToERC20 && (document.getElementById("tokenInput").value = Number(200 * (window.dollarToERC20)).toFixed(2))
}



document.querySelectorAll(".option-switch").forEach(function (x) {
  Array.prototype.slice.call(x.children).forEach(function (e) {
    e.addEventListener("click", function (t) {
      Array.prototype.slice.call(t.currentTarget.parentNode.children).forEach(function (f) {
        f.classList.remove("selected");
      });
      t.currentTarget.classList.add("selected");
    })
  })
})

Array.prototype.slice.call(document.getElementById("graphControls").children).forEach(function (e) {
  e.addEventListener("click", function (t) {
    window.graphFilter = t.currentTarget.getAttribute("filter");
    makeChart(window.selectedPoolIndex);
  })
})



UIWorkingInit();

document.getElementById("explorePool") && (
  document.getElementById("explorePool").addEventListener("click", function () {
    explorePool();
  })
)

function explorePool(p) {
  if (p) {
    window.selectedPool = p;
  }
  window.location = `#explore=${window.selectedPool}`
}



function stakingManager(h) {
  if (!h) { window.location = "#stake" }
}

function selectStakingPool(t, p) {
  if (!p) { return false; }
  else {
    window.currentStakingPool = p;
    window.__pool.__stakingSelection = p;
    document.getElementById("poolList2").querySelectorAll(".selected").forEach(function (e) { e.classList.remove("selected") });
    stakingManager()
  }
}

function stakeCurrent() {
  !window.walletConnected && (
    window.notify("Link a wallet to the app to begin staking tokens.", "bad", "dismiss")
  )
}

function governanceInspector(h) {
  if (!h) { window.location = "#governance" }
  if (window.poolPayload && document.getElementById("governanceInspector")) {
  }
}

function inspectProposal(p) {
  if (!p) { return false; }
  p = Number(p)
  if (window.poolPayload && window.poolPayload.governance.proposals) {
    window.__pool.__proposalInspector = p;

    var t = false
    window.poolPayload.governance.proposals.forEach(function (e) {
      e.id && e.id === p && (t = e)
    })

  }
}

function openPageElement() {
}

function manageInvestorPools() {
  if (0 <= 2 && window.__pool.lb.length>=2) {
    for (i = 0; i < 2; i++){
      window.__pool.lb[i].engaged=true
      window.__pool.lb[i].weight=1
      window.__pool.lb[i].percent=50
    }
  }
}

function closePageElement(n) {
  window.__pool.page = false;
  window.__pool.tab = false;
  document.getElementById(n) && (
    document.getElementById(n).classList.remove("build-in")
  );
}

function wHist() {

  if (String(window.location.href).indexOf('#') > -1) {
    var item = window.location.hash.split("#")[1].split("&");
    var _p = item[0].split("=");
    var p = String(item[0]).indexOf('=') > -1 ? item[0].split("=")[0] : item[0];
    if (p) {
      var p2 = "";
      switch (p) {
        case "home":
          closePageElement()
          break;
        case "explore":
          window.selectedPool = _p[1] && window.poolPayload.tokens[_p[1]] ? _p[1] : !window.selectedPool ? "error" : window.selectedPool;
          window.__pool.page = "explore";
          openPageElement()
          break;
        case "manage":
          window.__pool.tab = _p[1] ? _p[1] : "";
          window.__pool.page = "manage";
          manageInvestorPools()
          break;
        case "stake":
          window.__pool.page = "stake";
          stakingManager(true)
          break;
        case "governance":
          window.__pool.page = "governance";
          governanceInspector(true)
          break;
        case "inspect-proposal":
          window.__pool.page = "inspect-proposal";
          inspectProposal(_p[1])
          break;
        default:
          closePageElement()
      }
    }
  }
  else { closePageElement() }

}

document.getElementById("homeTrigger") && (
  document.getElementById("homeTrigger").addEventListener("click", function (e) {
    window.location = "#home"
  })
)



window.addEventListener('popstate', function (e) {
  wHist()
})
