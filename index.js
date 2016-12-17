
$('#date').text(
  moment().format('MMMM Do YYYY')
);

setInterval(function(){
  $('#time').each(function () {
    $(this).text(
      moment().format('hh:mm:ss')
    )
  });
}, 1000);
