$(function() {
  $(".devour").on("click", function(event) {
    console.log("Devour has been clicked")
    var id = $(this).data("id");
    
    var newBurgerState = {
      id: id,
      devour: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed burger state to devoured!");

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    console.log("In create-form function")

    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devour: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
