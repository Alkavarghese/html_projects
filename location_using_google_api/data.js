var x=$('#main');
$('form input[type="text"]').on('blur', function() {
  console.warn('Entered ', this.value );
  console.assert(document.getElementById("demo"), "You have no element with ID 'demo'");
});

$('#main').on('submit', function(e) {
  e.preventDefault();


  var width = $('#width').val();
  console.log('Width ' + width);

  var height = $('#height').val();
  console.log('Height ', height);
  var  area = width * height;
  if(area<50){
    debugger;
  }
  console.log(area);
  console.table(["A", "b", "c","d","e"]);
x.append('<p>' + area + '</p>');
});
