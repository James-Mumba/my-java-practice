document.getElementById("searchInput").onkeyup = function () {
  let searchInput = document.getElementById("searchInput").value;
  document.getElementById("searchOutput").innerHTML = searchInput;
};

document.getElementById("displayManufucturer").onclick = function () {
  let manufucturer = document.getElementById("vehicleManufacturer").value;
  document.getElementById("Manufuctureroutput").innerHTML = manufucturer;
};

document.getElementById(`continent`).onchange = function () {
    let continent = document.getElementById(`continent`).value;
    document.getElementById(`continentOutput`).innerHTML = continent
};
