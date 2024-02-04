function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase().includes(name.toLowerCase())
    );
  }

  constdrivers = ["Ada", "Bob", "Catherine", "ada"];
console.log(findMatching(drivers, "Ada")); // Output: ["Ada", "ada"]

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

constdrivers = ["Ada", "Bob", "Catherine", "ada"];
console.log(fuzzyMatch(drivers, "Ca")); // Output: ["Catherine"]

function matchName(drivers, name) {
    return drivers.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase()
    );
}