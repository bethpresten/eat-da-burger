// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    let id = $(this).data("id");

    let changeState = {
      devour: true
    };
    console.log(changeState);

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: JSON.stringify(changeState),
    }).then(
      function () {
        console.log("changed state to devour");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#ca").val().trim(),
      devour: false,
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
