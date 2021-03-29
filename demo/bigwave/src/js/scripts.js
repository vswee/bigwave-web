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
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "src/data/sample.json", true);

  xhr.send();

  xhr.onload = function () {
    if (200 === xhr.status && xhr.responseText.length > 0) {
      var data = JSON.parse(xhr.responseText);
      window.dataPayload = data;
      fetching = false
      makeHomePage()
      wHist()
      document.getElementById("app").classList.remove("-loading");
      loadActivityFlag = false;
    } else {
      permanentlyStop = true;
      document.getElementById("app").classList.remove("-loading");
    }

    xhr.onprogress = function (event) {
    };

    xhr.onerror = function () {
      permanentlyStop = true;
      window.notify("Failed fetching application data. Try reloading the page. If the error persists, try clearing the browser cache.", "bad", "Dismiss")

    };

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
  if (window.selectedPool && window.dataPayload) {
    makeChart();
  }
};
window.refreshTimeElapsed = 0
setInterval(function () { window.refreshTimeElapsed++ }, 600000)
window.onfocus = function () {
  window.refreshTimeElapsed >= 1 && (
    document.getElementById("loader").style.display = "",
    document.getElementById("app").style.filter = "blur(5px)",
    !fetching && (fetchApplicationData()),
    UIWorkingInit(2000),
    window.refreshTimeElapsed = 0
  )
}

var chartData;
function makeChart() {
  if (window.dataPayload && window.selectedPool) {
    var p = window.dataPayload.tokens;
    var s = window.selectedPool;
  }
  else if (!window.dataPayload || !window.selectedPool) { return }
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
      `<div class="badge"><img loading="lazy" class="token-icon-mini" src="src/img/symbols/${p[s].icon}"><div>1 ${s} : USD</div></div>
      <div style="font-size: 24px;padding: 0.5rem;">$${(p[s]['24hr-average'][p[s]['24hr-average'].length - 1]).toFixed(2)}</div>
      <div style="font-size: 11px;font-family: 'Montserrat';opacity: .5;">${new Date()}</div>`;

    document.getElementById("explorePool") && (
      document.getElementById("explorePool").querySelectorAll("span")[0].innerHTML = `${s}`
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
        `<div class="badge"><img loading="lazy" class="token-icon-mini" src="src/img/symbols/${p[s].icon}"><div>1 ${s} : USD</div></div>
      <div style="font-size: 24px;padding: 0.5rem;">$${val.toFixed(2)}</div>
      <div style="font-size: 11px;font-family: 'Montserrat';opacity: .5;">${dateStr}</div>`;
    });

    // END TOOLTIP
  }

  document.getElementById("currentReceive") && (
    document.getElementById("currentReceive").innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="src/img/symbols/${p[s].icon}">&nbsp;${s}</span>`
  )
  document.getElementById("poolHeader") && (
    document.getElementById("poolHeader").innerHTML = `<img loading="lazy" style="height:2rem" src="src/img/symbols/${p[s].icon}">&nbsp;${s} Pool`
  )


  saniExc()
}

function setBalances() {
  window.ocToken = !window.ocToken ? "ETH" : window.ocToken;
  if (window.dataPayload && window.selectedPool && window.ocToken)
    document.querySelectorAll(".-cbp").forEach(function (p) {
      p.innerHTML = `Balance: ${formatCurrency.format(window.dataPayload.user.portfolio[window.selectedPool].balance)}`
    })
  document.querySelectorAll(".-cbt").forEach(function (p) {
    p.innerHTML = `Balance: ${formatCurrency.format(window.dataPayload.user.portfolio[window.ocToken.toUpperCase()].balance)}`
  })
  updateBalancePreviewForStaking();
}

function makeHomePage() {
  var data = window.dataPayload;
  document.getElementById("poolList").innerHTML = ``;
  var _e = 0;
  Object.keys(data.tokens).forEach(function (key) {
    var tr = document.createElement("tr");
    if (!window.selectedPool) {
      window.selectedPool = key;
      setBalances();
      makeChart();
      tr.classList.add("selected");
    }
    tr.style['animation-delay'] = `${_e / 10}s`;
    _e++;
    if (data.tokens[key]) {
      var e = data.tokens[key];
      var arrow = Number(e['24hr-change-percent']) > 0 ? `<i class="fas fa-arrow-up"></i>` : Number(e['24hr-change-percent']) < 0 ? `<i class="fas fa-arrow-down"></i>` : "";
      var gb = Number(e['24hr-change-percent']) > 0 ? `good` : Number(e['24hr-change-percent']) < 0 ? `bad` : ``;
      tr.innerHTML = `<td><div class="badge">
      <img loading="lazy" class="token-icon-mini" src="src/img/symbols/${e.icon}"><span>${key}</span>
      <span class="mobile-only l-imp-txt">${e.name}</span>
      </div></td>
        <td class="desktop-only">${e.name}</td>
        <td>$${e.value}<span class="mobile-only"><span class="${gb}">${arrow}${e['24hr-change-percent']}%</span></span></td>
        <td class="desktop-only"><span class="${gb}">${arrow}${e['24hr-change-percent']}%</span></td>
        <td class="desktop-only">$${e.volume}</td>
        <td class="desktop-only" style="padding:0"><a style="padding:1rem" onclick="window.location='#explore=${key}'"><i class="fas fa-caret-right"></i></a></td>`;
      tr.setAttribute("onclick", `selectPool(this, '${key}')`)
      document.getElementById("poolList").append(tr)
    }
  });
}

function selectPool(t, k) {
  window.selectedPool = k;
  document.getElementById("poolList").querySelectorAll(".selected").forEach(function (e) { e.classList.remove("selected") });
  t.classList.add("selected");
  setBalances()
  makeChart()
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

var availableTokens = ["eth", "usdt", "usdc", "dai", "chi", "bgw-t"];

if (document.getElementById("receiveDenom") &&
  document.getElementById("sendDenom") &&
  availableTokens.length > 2 &&
  document.querySelectorAll(".currentSend").length > 0) {
  var receive = document.getElementById("receiveDenom"),
    send = document.getElementById("sendDenom");

  document.querySelectorAll(".selection-drawer.-token-options").forEach(function (e) {
    availableTokens.forEach(function (v) {
      var option = document.createElement("span")
      option.setAttribute("onclick", `changeSender(this, '${v}')`)
      option.classList.add("sel")
      option.innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="src/img/symbols/${v}.png">&nbsp;${v}</span>`
      e.append(option)
    });
  })

  document.querySelectorAll(".selection-drawer").forEach(function (s) {
    s.addEventListener("mouseleave", function (e) {
      e.currentTarget.classList.remove("open")
      e.currentTarget.parentNode.querySelectorAll(".-target").length > 0 && (
        e.currentTarget.parentNode.querySelectorAll(".-target").forEach(function (s) { s.setAttribute("_o", "0") }))
    }),
      s.addEventListener("click", function (e) {
        e.currentTarget.classList.remove("open")
        e.currentTarget.parentNode.querySelectorAll(".-target").length > 0 && (
          e.currentTarget.parentNode.querySelectorAll(".-target").forEach(function (s) { s.setAttribute("_o", "0") }))
      })
  })

  window.selling = availableTokens[0]
  document.querySelectorAll(".currentSend").forEach(function (e) { e.innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="src/img/symbols/${availableTokens[0]}.png">&nbsp;${availableTokens[0]}&nbsp;<i class="fas fa-caret-down"></i></span>` })


  document.querySelectorAll(".selection-drawer").forEach(function (d) {
    d.parentNode.querySelectorAll(".-trigger")[0].addEventListener("click", function (e) {
      var o;
      var a = e.currentTarget;
      a.hasAttribute("_o") ? a.getAttribute("_o") === '1' ? (o = 1, a.setAttribute("_o", "0")) : (o = 0, a.setAttribute("_o", "1")) : (o = 0, a.setAttribute("_o", "1"));
      document.querySelectorAll(".selection-drawer").forEach(function (f) { f.classList.remove("open") })
      if (o === 0) {
        if (a.parentNode.querySelectorAll(".selection-drawer")[0].classList.contains("open")) {
          a.parentNode.querySelectorAll(".selection-drawer")[0].classList.remove("open")
        } else {
          a.parentNode.querySelectorAll(".selection-drawer")[0].classList.add("open");
        }
      }
    })
  })

}

function changeSender(t, n) {
  window.ocToken = n
  t.parentNode.classList.remove("open")
  document.querySelectorAll(".currentSend").forEach(function (e) { e.innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="src/img/symbols/${n}.png">&nbsp;${n}&nbsp;<i class="fas fa-caret-down"></i></span>`; })
  setBalances()
}

document.querySelectorAll(".option-switch").forEach(function (x) {
  Array.prototype.slice.call(x.children).forEach(function (e) {
    e.addEventListener("click", function (t) {
      Array.prototype.slice.call(t.currentTarget.parentNode.children).forEach(function (f) {
        f.classList.remove("selected");
      });
      t.currentTarget.classList.add("selected");
      if (t.currentTarget.hasAttribute("data")) {
        var s = t.currentTarget.getAttribute("data").split(",")
        switch (s[0]) {
          case "exMethod":
            document.querySelectorAll(".send-receive-language").forEach(function (l) {
              l.innerHTML = `${s[1].substring(0, 1).toUpperCase()}${s[1].substring(1).toLowerCase()} `
            })
            break;
          default:
        }
      }
    })
  })
})

Array.prototype.slice.call(document.getElementById("graphControls").children).forEach(function (e) {
  e.addEventListener("click", function (t) {
    window.graphFilter = t.currentTarget.getAttribute("filter");
    makeChart();
  })
})



UIWorkingInit();

document.getElementById("explorePool") && (
  document.getElementById("explorePool").addEventListener("click", function () {
    explorePool();
  }),
  Array.prototype.slice.call(document.getElementById("exploreTabsControls").children).forEach(function (e) {
    e.addEventListener("click", function (t) {
      var f = t.currentTarget.hasAttribute("filter") ? t.currentTarget.getAttribute("filter") : false;
      document.getElementById("explorePayloads").querySelectorAll("div").forEach(function (d) {
        if (d.hasAttribute("filter")) {
          if (d.getAttribute("filter") == f) { d.style.display = "flex" }
          else {
            d.style.display = "none";
          }
        }
      })
    })
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
  if (window.dataPayload) {
    document.querySelectorAll(".data-explorer").forEach(function (e) { e.classList.remove("build-in") });
    document.getElementById("appMain") && (document.getElementById("appMain").classList.add("build-out"))
    document.getElementById("stakingManager") && (document.getElementById("stakingManager").classList.add("build-in"))
    if (window.currentStakingPool && window.dataPayload.user.portfolio[window.currentStakingPool]) {
      var as = window.dataPayload.tokens[window.currentStakingPool].assets
      var a = ``;
      var p = 0;
      Object.keys(as).forEach(function (ask) {
        a += `<span title="${ask}"><img style="z-index:${p};"  loading="lazy" src="src/img/symbols/${as[ask].icon}"></span>`;
        p++;
      });
      var secondary = `
        <h3>Account balance: <span><img loading="lazy" style="height:1.5rem" src="src/img/icon.png">&nbsp;BigWave Token</span></h3>
    <p>${formatCurrency.format(window.dataPayload.user.balance)} BGW-T</p>
    `;
      var primary = `
    <h2>Balance <span><img loading="lazy" style="height:1.5rem" src="src/img/symbols/${window.dataPayload.tokens[window.currentStakingPool].icon}">&nbsp;${window.dataPayload.tokens[window.currentStakingPool].name}</span></h2>
    <p>${formatCurrency.format(window.dataPayload.user.portfolio[window.currentStakingPool].balance)} BGW-T</p>
    <div class="overlap">${a}</div>
    `;
      document.getElementById("stakeActions").style.display = "block"
      document.getElementById("stakeAgainstCoin").style.display = ""
      document.getElementById("stakeAgainstCoin").setAttribute("src", `src/img/symbols/${window.dataPayload.tokens[window.currentStakingPool].icon}`);
      document.getElementById("apyValue") && (
        document.getElementById("apyValue").innerHTML = `${window.dataPayload.tokens[window.currentStakingPool].apy}%`
      )
      document.getElementById("totalStakedValue") && (
        document.getElementById("totalStakedValue").innerHTML = `${formatCurrency.format(window.dataPayload.user.portfolio[window.currentStakingPool].balance)}`
      )
    updateBalancePreviewForStaking()
    }
    else {
      var primary = `
    <h3>Account balance: <span><img loading="lazy" style="height:1.5rem" src="src/img/icon.png">&nbsp;BigWave Token</span></h3>
    <p>${formatCurrency.format(window.dataPayload.user.balance)} BGW-T</p>
    `;
      var secondary = ""
    }
    document.querySelectorAll(".balance-organiser").forEach(function (e) {
      e.classList.contains("prominent") ? (
        e.innerHTML = primary
      ) : (secondary.length < 1 ? (e.style.display = "none") : (e.style.display = "", e.innerHTML = secondary))
    })
    document.getElementById("poolList2").innerHTML = ``;
    var _f = 0;
    Object.keys(window.dataPayload.tokens).forEach(function (key) {
      var tr = document.createElement("tr");
      tr.style['animation-delay'] = `${_f / 10}s`;
      _f++;
      if (window.currentStakingPool && window.currentStakingPool === key) { tr.classList.add("selected") }
      if (window.dataPayload.tokens[key] && window.dataPayload.tokens[key].staking) {
        var e = window.dataPayload.tokens[key];
        tr.innerHTML = `<td><div class="badge">
          <img loading="lazy" class="token-icon-mini" src="src/img/symbols/${e.icon}"><span>${key}</span>
          <span class="mobile-only l-imp-txt">${e.name}</span>
          </div></td>
            <td>${e.staking.end}</td>
            <td>${formatCurrency.format(e.staking.volume)} ${key}</td>
            <td>${formatCurrency.format(e.staking.rate)} BGW-T/day</td>
            <td>${formatCurrency.format(e.staking.balance)} BGW-T</td>
            <td><a href="https://etherscan.io/address/${e.staking.tx}">${e.staking.tx.substring(0, 4)}...${e.staking.tx.substring(e.staking.tx.length - 4)}<i class="fas fa-external-link-alt"></i></a></td>`;
        tr.setAttribute("onclick", `selectStakingPool(this, "${key}")`)
        document.getElementById("poolList2").append(tr)
      } else { }
    });
    document.getElementById("updateBalancePreviewForStakingUITrigger") && (
      document.getElementById("updateBalancePreviewForStakingUITrigger").addEventListener("click", function (e) { updateBalancePreviewForStaking() }), document.getElementById("updateBalancePreviewForStakingUITrigger").addEventListener("mouseleave", function (e) { updateBalancePreviewForStaking() })
    )
  }
  else {
  }
}
function updateBalancePreviewForStaking() {
  window.ocToken = !window.ocToken ? "ETH" : window.ocToken.toUpperCase();
  document.getElementById("stakingViewTokenBalance") && window.dataPayload.user.portfolio[window.ocToken] ? (
    document.getElementById("stakingViewTokenBalance").innerHTML = formatCurrency.format(window.dataPayload.user.portfolio[window.ocToken].balance)
  ) : (document.getElementById("stakingViewTokenBalance").innerHTML = `0.00`)
}
function selectStakingPool(t, p) {
  if (!p) { return false; }
  else {
    window.currentStakingPool = p;
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
  if (window.dataPayload && document.getElementById("governanceInspector")) {
    document.querySelectorAll(".data-explorer").forEach(function (e) { e.classList.remove("build-in") });
    document.getElementById("appMain") && (document.getElementById("appMain").classList.add("build-out"))
    document.getElementById("governanceInspector").classList.add("build-in")

    document.getElementById("governanceInspector").querySelectorAll(".balance-organiser")[0].innerHTML = `<h3>Account balance: <span><img loading="lazy" style="height:1.5rem" src="src/img/icon.png">&nbsp;BigWave Token</span></h3>
    <p>${formatCurrency.format(window.dataPayload.user.balance)} BGW-T</p>`;

    window.dataPayload.governance.statistics.active && (
      document.getElementById("activeGauge").style.transform = `translateX(${window.dataPayload.governance.statistics.active.pc}%)`,
      document.getElementById("activeVal").innerHTML = ` ${formatCurrency.format(window.dataPayload.governance.statistics.active.value)} BWV-T`
    )
    window.dataPayload.governance.statistics.inactive && (document.getElementById("inactiveGauge").style.transform = `translateX(${window.dataPayload.governance.statistics.inactive.pc}%)`,
      document.getElementById("inactiveVal").innerHTML = ` ${formatCurrency.format(window.dataPayload.governance.statistics.inactive.value)} BWV-T`)
    window.dataPayload.governance.statistics.delegated && (document.getElementById("delegatedGauge").style.transform = `translateX(${window.dataPayload.governance.statistics.delegated.pc}%)`,
      document.getElementById("delegatedVal").innerHTML = ` ${formatCurrency.format(window.dataPayload.governance.statistics.delegated.value)} BWV-T`)

    window.dataPayload.governance.proposals && (
      g = window.dataPayload.governance.proposals,
      tbody = ``,
      _g = 0,
      g.forEach(function (e) {
        if (document.getElementById("poolList3")) {
          var text = e.status !== "open" ? "View" : "Vote";
          tbody += `<tr style="animation-delay:${_g / 10}s">
            <td><div class="status-badge"><span>${e.status}</span></div></td>
            <td>${e.name}<br><a>0x • ${e.id}&nbsp;<i class="fas fa-info-circle"></i></a></td>
            <td>${formatInt.format(e.for)} BGW-T<br>
            <span class="bar-gauge for"><span style="transform: translateX(${(e.for / (e.for + e.against)) * 100}%);"></span></span>
            </td>
            <td>${formatInt.format(e.against)} BGW-T<br>
            <span class="bar-gauge against"><span style="transform: translateX(${(e.against / (e.for + e.against)) * 100}%);"></span></span>
            </td>
            <td><a href="#inspect-proposal=${e.id}">${text}&nbsp;<i class="fas fa-check-circle"></i></a></td>
            </tr>`;
          _g++;
        }
      }),
      document.getElementById("poolList3") && (document.getElementById("poolList3").innerHTML = `${tbody}`)
    )
  }
}

function inspectProposal(p) {
  if (!p) { return false; }
  p = Number(p)
  if (window.dataPayload && window.dataPayload.governance.proposals && document.getElementById("proposalInspector")) {
    document.querySelectorAll(".data-explorer").forEach(function (e) { e.classList.remove("build-in") });
    document.getElementById("appMain") && (document.getElementById("appMain").classList.add("build-out"))
    document.getElementById("proposalInspector").classList.add("build-in")

    var t = false
    window.dataPayload.governance.proposals.forEach(function (e) {
      e.id && e.id === p && (t = e)
    })

    if (t.votes && document.getElementById("proposalVotes")) {
      t.votes.forEach(function (e) {
        var d = document.createElement("div")
        d.classList.add("asset-organiser")
        d.innerHTML = `<p><span class="status-badge">${e.type}</span>&nbsp;&nbsp;&nbsp;<b>${formatCurrency.format(e.value)}</b> &nbsp;<a href="https://etherscan.io/address/${e.tx}">${e.tx.substring(0, 4)}...${e.tx.substring(e.tx.length - 4)}<i class="fas fa-external-link-alt"></i></a></p>
        `;
        document.getElementById("proposalVotes").append(d)
      })
    }

    if (t && document.getElementById("proposalSummary")) {
      var html = ``;
      var e = t;
      html += `<h2>${e.name} (${e.id})<br><br><div class="status-badge"><span>${e.status}</span></div></h2>

      <div class="stack-inset">
      <div><div class="status-badge"><span>for</span></div>${formatInt.format(e.for)} BGW-T<br>
      <span class="bar-gauge for"><span style="transform: translateX(${(e.for / (e.for + e.against)) * 100}%);"></span></span>
      </div>
      <div><div class="status-badge"><span>against</span></div>${formatInt.format(e.against)} BGW-T<br>
      <span class="bar-gauge against"><span style="transform: translateX(${(e.against / (e.for + e.against)) * 100}%);"></span></span>
      </div>
      </div>

      <div>
      <p>${e['info-text']}</p>
      </div>
      `;
      document.getElementById("proposalSummary").innerHTML = html;
    }
  }
}

function openPageElement() {
  document.querySelectorAll(".data-explorer").forEach(function (e) { e.classList.remove("build-in") });
  var _a = 1;
  document.getElementById("explorePage") && (
    document.getElementById("explorePage").classList.add("build-in"),
    window.dataPayload && window.selectedPool && (
      window.dataPayload.tokens[window.selectedPool].assets && (
        assets = window.dataPayload.tokens[window.selectedPool].assets,
        document.getElementById("assetsDisplay") && (document.getElementById("assetsDisplay").innerHTML = ""),
        Object.keys(assets).forEach(function (key) {
          if (document.getElementById("assetsDisplay")) {
            var a = document.createElement("div");
            a.classList.add("asset-organiser");
            a.style['animation-delay'] = `${_a / 10}s`;
            _a++;
            a.innerHTML = `<img loading="lazy" style="height:2.5rem" src="src/img/symbols/${assets[key].icon}">&nbsp;
            <div class="txt">
            <h2>${key}</h2>
            <p>${formatCurrency.format(assets[key].amount)} ${key} = ${formatDollar.format(assets[key].value)}
            <br>Provides ${assets[key].pc}% of ${window.selectedPool} Pool liquidity.</p>
            </div><span class="bar-gauge"><span style="transform:translateX(${assets[key].pc}%);background-color:${assets[key].colour}"></span></span>`;
            document.getElementById("assetsDisplay").append(a)
          }
        })
      ),
      window.dataPayload.tokens[window.selectedPool].trades && (
        trades = window.dataPayload.tokens[window.selectedPool].trades,
        tbody = ``,
        _b = 0,
        trades.forEach(function (trade) {
          if (document.getElementById("assetsDisplay")) {
            var exRate = window.dataPayload.tokens[window.selectedPool].value;
            var time = trade.time;
            var ts = new Date(time * 1000);
            ts = `${ts.getFullYear()} ${monthName(ts.getMonth())} ${ts.getDate()} ${ts.getHours()}.${ts.getMinutes() < 10 ? '0' + ts.getMinutes() : ts.getMinutes()}`;
            var input = !trade.input ? `${Number(trade.output) * exRate} ${window.selectedPool}` : `${trade.input} ${trade.currency}`;
            var type = trade.type;
            var output = !trade.output ? `${Number(trade.input) / exRate} ${window.selectedPool}` : `${trade.output} ${trade.currency}`;
            var tx = trade.tx;
            var txS = `${tx.substring(0, 4)}...${tx.substring(tx.length - 4)}`
            tbody += `<tr class="tr-${type}" style="animation-delay:${_b / 10}s">
            <td><div class="date-approx"><span>${ts}</span><small>${timeDifference(time)}</small></div></td>
            <td>${input}</td>
            <td><span class="desktop-only ${type}">${type}</span></td>
            <td>${output}</td>
            <td><a href="${tx}">${txS}&nbsp;<i class="fas fa-external-link-alt"></i></a></td>
            </tr>`;
            _b++;
          }
        }),
        document.getElementById("tradesDisplay") && (document.getElementById("tradesDisplay").innerHTML = `<table class="table">
        <thead class="desktop-only">
          <tr class="">
            <th class="" scope="col">Time</th>
            <th class="" scope="col">Input</th>
            <th class="" scope="col">Type</th>
            <th class="" scope="col">Output</th>
            <th class="" scope="col">Transaction</th>
          </tr>
        </thead>
        <tbody>
        ${tbody}
        </tbody>
      </table>`)
      ),
      window.dataPayload.tokens[window.selectedPool].swaps && (
        swaps = window.dataPayload.tokens[window.selectedPool].swaps,
        tbody = ``,
        _c = 0,
        swaps.forEach(function (exc) {
          if (document.getElementById("assetsDisplay")) {
            var exRate = window.dataPayload.tokens[window.selectedPool].value;
            var time = exc.time;
            var ts = new Date(time * 1000);
            ts = `${ts.getFullYear()} ${monthName(ts.getMonth())} ${ts.getDate()} ${ts.getHours()}.${ts.getMinutes() < 10 ? '0' + ts.getMinutes() : ts.getMinutes()}`;
            var input = !exc.input ? `${Number(exc.output) * exRate} ${window.selectedPool}` : `${exc.input} ${exc.currency}`;
            var output = !exc.output ? `${Number(exc.input) / exRate} ${window.selectedPool}` : `${exc.output} ${exc.currency}`;
            var tx = exc.tx;
            var txS = `${tx.substring(0, 4)}...${tx.substring(tx.length - 4)}`
            tbody += `<tr style="animation-delay:${_c / 10}s">
            <td><div class="date-approx"><span>${ts}</span><small>${timeDifference(time)}</small></div></td>
            <td>${input}</td>
            <td>${output}</td>
            <td><a href="${tx}">${txS}&nbsp;<i class="fas fa-external-link-alt"></i></a></td>
            </tr>`;
            _c++;
          }
        }),
        document.getElementById("swapsDisplay") && (document.getElementById("swapsDisplay").innerHTML = `<table class="table">
        <thead class="desktop-only">
          <tr class="">
            <th class="" scope="col">Time</th>
            <th class="" scope="col">Input</th>
            <th class="" scope="col">Output</th>
            <th class="" scope="col">Transaction</th>
          </tr>
        </thead>
        <tbody>
        ${tbody}
        </tbody>
      </table>`)
      ),
      document.getElementById("infoDisplay") && (
        tok = window.dataPayload.tokens[window.selectedPool],
        address = `${tok.address.substring(0, 4)}...${tok.address.substring(tok.address.length - 4)}`,
        document.getElementById("infoDisplay").innerHTML = `<ul style="list-style:none">
        <li>Volume: ${formatCurrency.format(tok.volume)} ${window.selectedPool}</li>
        <li>Value: ${formatDollar.format(tok.volume * tok.value)}</li>
        <li>Supply: ${formatCurrency.format(tok.supply)} ${window.selectedPool}</li>
        <li>Address: ${address}</li>
        </ul><br><br>${decodeURIComponent(tok.details)}`
      )
    ),


    document.getElementById("appMain") && (
      document.getElementById("appMain").classList.add("build-out")
    )
  )
}

function closePageElement(n) {
  document.getElementById(n) ? (
    document.getElementById(n).classList.remove("build-in")
  ) :
    (
      document.querySelectorAll(".data-explorer").forEach(function (e) { e.classList.remove("build-in") })
    );

  document.getElementById("appMain") && (
    document.getElementById("appMain").classList.remove("build-out")
  )
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
          window.selectedPool = _p[1] && window.dataPayload.tokens[_p[1]] ? _p[1] : !window.selectedPool ? "error" : window.selectedPool;
          openPageElement()
          break;
        case "stake":
          stakingManager(true)
          break;
        case "governance":
          governanceInspector(true)
          break;
        case "inspect-proposal":
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
