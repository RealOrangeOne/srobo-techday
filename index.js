
$('#date').text(
  moment().format('MMMM Do YYYY')
);

setInterval(function(){
  $('#time').text(
    moment().format('hh:mm:ss')
  );
}, 1000);
