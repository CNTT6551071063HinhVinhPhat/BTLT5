function isPrime(x) {
            if (x < 2) return false
            for (var i = 2; i <= Math.sqrt(x); i++) {
                if (x % i === 0) return false
            }
            return true
        }
        var check=0;
        var n = parseInt(prompt("Nhap so nguyen duong n:"))
        document.write("Cac so nguyen to nho hon " + n + " la:<br>")

        for (var i = 2; i < n; i++) {
            if (isPrime(i)) {
                document.write(i + " ");
                check=1;
            }
        }
        if(check!=1)document.write("khong co so nao")