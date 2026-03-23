function checkConsumption() {
    let unit = document.getElementById("unit").value;
}
    if (unit > 0 && unit <= 100) {
        window.alert("Discounted electricity rates apply.");
    } else if (unit > 101 && unit <= 200) {
        window.alert("Normal residential rate");
    } else if (unit > 201&& unit <= 300) {
        window.alert("Typical electricity usage");
    }
        else if (unit > 301 && unit <= 500  ) {
        window.alert("High electricity usage");
    }
        else if (unit > 1000) {
        window.alert("Heavy electricity users");
    }
