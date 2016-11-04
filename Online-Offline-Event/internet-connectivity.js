window.addEventListener('load', function() {

  var info_text = document.getElementById("info-text");
  var alert_box = document.getElementById("alert-box");
  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "You are connected to the internet" : "Internet Connection Lost. Please try to connect again.";
    info_text.innerHTML = condition;
    $('#alert-box').show();
      
    setTimeout(function() {
        console.log('timeout called');
        $('#alert-box').hide();   
    },7000)
  }
    $('.alert .close').on('click', function(e) {
        console.log("Called Close");
        $(this).parent().hide();
    })
 
  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});