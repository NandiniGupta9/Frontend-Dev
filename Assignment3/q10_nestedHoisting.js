function outer() {
  console.log(count);
  var count = 5;

  function inner() {
    console.log(count); 
    var count = 10;
  }

  inner();
}

outer();

// Arrow version:
function outerArrow() {
  var count = 5;
  const inner = () => {
    console.log(count); // accesses outer count (no var redeclare)
  };
  inner();
}
