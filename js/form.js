function submitted(e){
  console.log("SUBMITTED");
  switch (e) {
    case 1:  $('#test-form-war').html("<h4>Thank you..Your registration is being processed! <a href='./event.html'>Click here</a> to go back..</h4>");  break;
    case 2:  $('#test-form-soccer').html("<h4>Thank you..Your registration is being processed! <a href='./event.html'>Click here</a> to go back..</h4>");  break;
    case 3:  $('#test-form-royal').html("<h4>Thank you..Your registration is being processed! <a href='./event.html'>Click here</a> to go back..</h4>");  break;
    case 4:  $('#test-form-hack').html("<h4>Thank you..Your registration is being processed! <a href='./event.html'>Click here</a> to go back..</h4>");  break;
    case 5:  $('#test-form-circuit').html("<h4>Thank you..Your registration is being processed! <a href='./event.html'>Click here</a> to go back..</h4>");  break;
    case 6:  $('#test-form-code').html("<h4>Thank you..Your registration is being processed! <a href='./event.html'>Click here</a> to go back..</h4>");  break;
    case 7:  $('#test-form-expo').html("<h4>Thank you..Your registration is being processed! <a href='./event.html'>Click here</a> to go back..</h4>");  break;
    default:

  }

}


$.fn.serializeObject = function()
{
var o = {};
var a = this.serializeArray();
$.each(a, function() {
   if (o[this.name]) {
       if (!o[this.name].push) {
           o[this.name] = [o[this.name]];
       }
       o[this.name].push(this.value || '');
   } else {
       o[this.name] = this.value || '';
   }
});
return o;
};

var $form_war = $('form#test-form-war'),
$form_soccer = $('form#test-form-soccer'),
$form_royal = $('form#test-form-royal'),
$form_hack = $('form#test-form-hack'),
$form_circuit = $('form#test-form-circuit'),
$form_code = $('form#test-form-code'),
$form_expo = $('form#test-form-expo'),
url_war = 'https://script.google.com/macros/s/AKfycbyi4eO5xm22ftix8FkivhugKCtlCDcz8ra2bZKFCs6xMglZh_lv/exec',
url_soccer = 'https://script.google.com/macros/s/AKfycbyCbQJKay9jid9zzo0RpcL861LRsLd2fPGLf1B7kLuuv1KFS3mC/exec',
url_royal ='https://script.google.com/macros/s/AKfycbw7xcOVrDgovbxbCW0ngwidNuIM5ccOCmqaNLs2bBWZOCQnDG0/exec',
url_hack = 'https://script.google.com/macros/s/AKfycbxFkprn3T0xDcGVOPBhP-uYu1sg0WL9_RfAuC7FQi2b_TuEt8jo/exec',
url_circuit = 'https://script.google.com/macros/s/AKfycbzy5INB-EWr6WOCZNl4DOqxzLDp0DxltRi9kKzzVaypqLLhzs0/exec',
url_code = 'https://script.google.com/macros/s/AKfycbyYUmR4tL8Do5px-3oV_ofkbV_QLtPdBUJmYWhJfbdS2vrwCpS9/exec',
url_expo = 'https://script.google.com/macros/s/AKfycbwCMUTfV9n2TRgjjX17WcDT5xGHIZ2UCwsgy09rX625gNttFutO/exec'

console.log("loaded");

$('#submit-form-war').on('click', function(e) {
  console.log("clicked");
e.preventDefault();
var jqxhr = $.ajax({
url: url_war,
method: "GET",
dataType: "json",
data: $form_war.serializeObject()
}).success(
// do something
);
console.log(jqxhr);
})

$('#submit-form-soccer').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url_soccer,
method: "GET",
dataType: "json",
data: $form_soccer.serializeObject()
}).success(
// do something
);
})

$('#submit-form-royal').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url_royal,
method: "GET",
dataType: "json",
data: $form_royal.serializeObject()
}).success(
// do something
);
})

$('#submit-form-hack').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url_hack,
method: "GET",
dataType: "json",
data: $form_hack.serializeObject()
}).success(
// do something
);
})

$('#submit-form-circuit').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url_circuit,
method: "GET",
dataType: "json",
data: $form_circuit.serializeObject()
}).success(
// do something
);
})

$('#submit-form-code').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url_code,
method: "GET",
dataType: "json",
data: $form_code.serializeObject()
}).success(
// do something
);
})

$('#submit-form-expo').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url_expo,
method: "GET",
dataType: "json",
data: $form_expo.serializeObject()
}).success(
// do something
);
})
