var n = parseInt(prompt("Nhap so nguyen duong n:"))
        var factorial = 1

        if (n < 0) {
            document.write("Khong tinh duoc giai thua cua so am.")
        } else {
            for (var i = 1; i <= n; i++) {
                factorial = Math.imul(factorial, i)
            }
            document.write("Giai thua cua " + n + " la: " + factorial)
        }