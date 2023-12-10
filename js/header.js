$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 6; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});

// JavaScript to handle tabs
function openTab(evt, tabName) {
  var i, tabs, tabLabels;
  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tabLabels = document.getElementsByClassName("tab-label");
  for (i = 0; i < tabLabels.length; i++) {
    tabLabels[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  const tabLink = document.querySelectorAll('.hoverable');
  tabLink.forEach(t => t.classList.remove('active'));
  evt.currentTarget.classList.add("active");
}

$(document).ready(function () {
  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});