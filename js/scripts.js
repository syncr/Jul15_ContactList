$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").prepend('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("#add-phone").click(function() {
    $("#new-phones").prepend('<div class="new-phone">' +
                                 '<div class="form-group">' +
                                   '<label for="new-phone">Phone</label>' +
                                   '<input type="text" class="form-control new-number">' +
                                 '</div>' +
                               '</div>');
  });


  $("form#new-contact").submit(function(event) {


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [], phones: []};

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();


      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
      newContact.addresses.push(newAddress);
    });

    $(".new-phone").each(function() {
      var inputtedPhoneNumber = $(this).find("input.new-number").val();
      var phoneNumber = { phone: inputtedPhoneNumber};
      newContact.phones.push(phoneNumber);
    });

    $("ul#contacts").append("<li><a><span class='contact'>" + newContact.firstName + "</span></a></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
      $("ul#phones").text("");
      newContact.phones.forEach(function(phoneNumber) {
        $("ul#phones").append("<li>" + phoneNumber.phone + "</li>");
      });
    });

    $("#new-addresses").empty();
    $("#new-phones").empty();

  var form = document.getElementById("new-contact");
  form.reset();
  event.preventDefault();
  });
});
