


// Function that builds a grid in the "container"
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < x; columns++) {
          $("#container").append("<div class='grid'></div>");
      };
  };
  $(".grid").width(480/x);
  $(".grid").height(480/x);
};

// Function that clears the grid
function clearGrid(){
  $(".grid").remove();
};

// Function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
  clearGrid();
};

// Create a 10x10 grid when the page loads.
// Creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$("#10").click(function() {
    refreshGrid();
    createGrid(10);

  $(".grid").mouseover(function() {
      $(this).css("background-color", "black");
      });

  $(".newGrid").click(function() {
      refreshGrid();

      $(".grid").mouseover(function() {
      $(this).css("background-color", "black");
      });
  });
});
$("#20").click(function() {
  refreshGrid();
  createGrid(20);

$(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });

$(".newGrid").click(function() {
    refreshGrid();
    createGrid(10);

    $(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });
});
});
$("#30").click(function() {
  refreshGrid();
  createGrid(30);

$(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });

$(".newGrid").click(function() {
    refreshGrid();

    $(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });
});
});
$("#40").click(function() {
  refreshGrid();
  createGrid(40);

$(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });

$(".newGrid").click(function() {
    refreshGrid();

    $(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });
});
});
$("#50").click(function() {
  refreshGrid();
  createGrid(50);

$(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });

$(".newGrid").click(function() {
    refreshGrid();

    $(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });
});
});

