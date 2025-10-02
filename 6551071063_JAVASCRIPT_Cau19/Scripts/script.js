var principal = parseFloat(prompt("Nhap so tien goc (VND):"))
        var rate = parseFloat(prompt("Nhap lai suat hang nam (%):"))
        var years = parseInt(prompt("Nhap so nam dau tu:"))

        var total = principal * Math.pow(1 + rate / 100, years)

        document.write("So tien goc: " + principal + " VND<br>")
        document.write("Lai suat hang nam: " + rate + "%<br>")
        document.write("So nam dau tu: " + years + "<br>")
        document.write("Tong so tien sau " + years + " nam la: " + total)