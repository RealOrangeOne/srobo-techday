
$('#date').text(
  moment().format('MMMM Do YYYY')
);

setInterval(function(){
  $('#time').text(
    moment().format('HH:mm:ss')
  );
}, 1000);
