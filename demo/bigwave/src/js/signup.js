const signupAPI = 'https://bigwave.app/api/signup'
// const signupAPI = 'http://localhost:3000/signup'

const signup = document.getElementById('btn-signup')
const email = document.getElementById('tb-email')

signup.addEventListener('click', () => {
  console.log(email.value)
  if(!email.value) return;
    fetch(signupAPI, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'credentials': 'include',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ email: email.value })
  }).then(response => { console.log(response); return response.json() })
    .then(response => {
      setTimeout(() => { 
        notify(
          "Thanks for signing up with us",
          "good",
          "OK"
        )
      }, 1500)
    })
  // axios({
  //   method: 'post',
  //   url: signupAPI,
  //   data: { email: email.value }
  // }).then(response => {
  //   setTimeout(() => { 
  //     notify(
  //       "Thanks for signing up with us",
  //       "good",
  //       "OK"
  //     )
  //   }, 1500)
  // })
})
  



const notify = (t, c, s, f) => {
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
  email.value = ""
}