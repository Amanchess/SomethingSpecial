function main() {
    var physics_ids = []
    for (let ip = 1; ip <= 40 ; ip++) {
        physics_ids.push("p"+ip)
    }

    var physics_checks = []
    for (let jp = 0; jp < 40 ; jp++) {
        var ele_p = document.getElementById(physics_ids[jp])
        physics_checks.push(ele_p.checked)
    }

    var chem_ids = []
    for (let ic = 1; ic <= 37 ; ic++) {
        chem_ids.push("c"+ic)
    }

    var chem_checks = []
    for (let jc = 0; jc < 37 ; jc++) {
        var ele_c = document.getElementById(chem_ids[jc])
        chem_checks.push(ele_c.checked)
    }

    var math_ids = []
    for (let im = 1; im <= 34 ; im++) {
        math_ids.push("m"+im)
    }

    var math_checks = []
    for (let jm = 0; jm < 34 ; jm++) {
        var ele_m = document.getElementById(math_ids[jm])
        math_checks.push(ele_m.checked)
    }

    var phy_count = 0
    var chem_count = 0
    var math_count = 0

    for (var kp = 0 ; kp < 40 ; kp++) {
        if (physics_checks[kp] == true) {
            phy_count += 1
        }
    }

    for (var kc = 0 ; kc < 37 ; kc++) {
        if (chem_checks[kc] == true) {
            chem_count += 1
        }
    }

    for (var km = 0 ; km < 34 ; km++) {
        if (math_checks[km] == true) {
            math_count += 1
        }
    }

    var avg_p = Math.floor((phy_count / 40) * 100);
    var avg_c = Math.floor((chem_count / 37) * 100);
    var avg_m = Math.floor((math_count / 34) * 100);

    var data = "<br/><b><u>PHYSICS:</u></b> "+ avg_p +"% <br/><b><u>CHEMISTRY:</u></b> "+ avg_c +"%<br /><b><u>MATHS:</u></b> "+ avg_m +"%"
    document.getElementById("s").innerHTML = data;

    swal("YOUR RESULT", "PHYSICS: "+ avg_p +"%, CHEMISTRY: "+ avg_c +"%, MATHS: "+ avg_m +"%");
          }
