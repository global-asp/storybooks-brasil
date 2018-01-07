document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].currentTime = 0;
      audios[i].pause();
    }
  }
}, true);

function playpause(n) {
  p = document.getElementById('audio' + n);
  if (p.paused) {
    p.play();
  } else {
    p.pause();
  }
}

function switchlang(d,l) {
  pt = document.getElementsByClassName("pt");
  es = document.getElementsByClassName("es");
  def = document.getElementsByClassName("def");
  btn_pt = document.getElementsByClassName("lang-pt");
  btn_es = document.getElementsByClassName("lang-es");
  if (l == "pt") {
    for (var i = 0; i < btn_pt.length + 1; i++) {
      es[i].style.display = "none";
      pt[i].style.display = "block";
      def[i].style.display = "none";
      btn_pt[i].innerHTML = d;
      btn_es[i].innerHTML = "es";
      btn_pt[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_es[i].setAttribute("onclick", "switchlang('" + d + "','es')");
    }
  } else if (l == "es") {
    for (var i = 0; i < btn_es.length + 1; i++) {
      pt[i].style.display = "none";
      es[i].style.display = "block";
      def[i].style.display = "none";
      btn_pt[i].innerHTML = "pt";
      btn_es[i].innerHTML = d;
      btn_es[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
      btn_pt[i].setAttribute("onclick", "switchlang('" + d + "','pt')");
    }
  } else if (l == d) {
    for (var i = 0; i < btn_es.length + 1; i++) {
      pt[i].style.display = "none";
      es[i].style.display = "none";
      def[i].style.display = "block";
      btn_pt[i].innerHTML = "pt";
      btn_es[i].innerHTML = "es";
      btn_pt[i].setAttribute("onclick", "switchlang('" + d + "','pt')");
      btn_es[i].setAttribute("onclick", "switchlang('" + d + "','es')");
    }
  }
}
