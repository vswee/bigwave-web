window.setApplicationLanguage = function (x, u) {
  u = !u ? '' : u;
  u = !window.currentApplicationLanguage ? u : `../${u}`;

  var l = !window.dataPayload && window.lngData ? window.lngData : window.dataPayload;
  var e = document.getElementById("appLanguage").querySelectorAll(".selection-drawer")[0]

  if (x && x.length > 0 && l.applicationLanguages[x].name) {
    document.getElementById("currentLanguage").innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="${u}src/img/symbols/iso-flags/${l.applicationLanguages[x].icon}"></span>`;
    document.getElementById("appLanguage").querySelectorAll(".-target").forEach(function (s) { s.setAttribute("_o", "0") })
  }
  // REFRESH ASSETS

  if (window.pageName === "landing" && x) {
      var _c = !window.currentApplicationLanguage ? window.location.href : window.location.href.replace(`${window.currentApplicationLanguage}/`, "");
    var c = _c.substring(_c.length - 1) == "/" ? _c.substring(0, _c.length - 1) : _c;
    window.location = `${c}/${x}`
  }

  else if (e.innerHTML.length < 1) {
    if (!window.dataPayload) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `${u}src/data/sample.json`, true);
      xhr.send();
      xhr.onload = function () {
        if (xhr.status == "404") {
          xhr.open("GET", `${u}bigwave/src/data/sample.json`, true);
          xhr.send();
          xhr.onload = function () { consumeXHR(xhr, "bigwave/") }
        } else {
          consumeXHR(xhr)
        }
      }
    }
  }
}

function consumeXHR(xhr, pre) {
  if (200 === xhr.status && xhr.responseText.length > 0) {
    var data = JSON.parse(xhr.responseText);
    window.lngData = window.dataPayload && window.dataPayload.applicationLanguages ? { "applicationLanguages": window.dataPayload.applicationLanguages } : { "applicationLanguages": data.applicationLanguages };
    Object.keys(window.lngData.applicationLanguages).forEach(function (key) {
      var n = window.lngData.applicationLanguages[key].name;
      var i = window.lngData.applicationLanguages[key].icon;
      var p = !pre ? '' : pre;
      p = !window.currentApplicationLanguage ? p : `../${p}`;
      var k = !pre ? '' : `,'${pre}'`;
      var option = document.createElement("span")
      option.setAttribute("onclick", `window.setApplicationLanguage('${key}'${k})`)
      option.classList.add("sel")
      option.innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="${p}src/img/symbols/iso-flags/${i}">&nbsp;${n}</span>`
      document.getElementById("appLanguage").querySelectorAll(".selection-drawer")[0].append(option)
      document.getElementById("appLanguage").querySelectorAll(".selection-drawer")[0].addEventListener("mouseleave", function (e) {
        e.currentTarget.classList.remove("open")
        e.currentTarget.parentNode.querySelectorAll(".-target").length > 0 && (
          e.currentTarget.parentNode.querySelectorAll(".-target").forEach(function (s) { s.setAttribute("_o", "0") }))
      });
      document.getElementById("appLanguage").querySelectorAll(".selection-drawer")[0].addEventListener("click", function (e) {
        e.currentTarget.classList.remove("open")
        e.currentTarget.parentNode.querySelectorAll(".-target").length > 0 && (
          e.currentTarget.parentNode.querySelectorAll(".-target").forEach(function (s) { s.setAttribute("_o", "0") }))
      });
      !window.currentApplicationLanguage ?
        (document.getElementById("currentLanguage").innerHTML.length < 1 && (
          document.getElementById("currentLanguage").innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="${p}src/img/symbols/iso-flags/${i}"></span>`
        )) :
        (document.getElementById("currentLanguage").innerHTML.length < 1 && key === window.currentApplicationLanguage && (
          document.getElementById("currentLanguage").innerHTML = `<span><img loading="lazy" style="height:1.5rem" src="${p}src/img/symbols/iso-flags/${i}"></span>`
        ))
    });
    document.getElementById("app").classList.remove("-loading");
    document.querySelectorAll(".-lng.-trigger")[0].addEventListener("click", function (e) {
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
  } else {
    document.getElementById("app").classList.remove("-loading");
  }
}

window.setApplicationLanguage()