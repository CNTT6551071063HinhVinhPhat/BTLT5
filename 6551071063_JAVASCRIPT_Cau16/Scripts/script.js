     function HinhTru(radius, height) {
            this.radius = radius
            this.height = height

            this.tinhTheTich = function() {
                return Math.PI * this.radius * this.radius * this.height
            }

            this.tinhDienTichToanPhan = function() {
                return 2 * Math.PI * this.radius * this.height + 2 * Math.PI * this.radius * this.radius
            }
        }

        var ht = new HinhTru(10, 15)

        document.write("The tich ban dau la: " + ht.tinhTheTich().toFixed(2) + "<br>")

        ht.height = 30

        document.write("Dien tich toan phan sau khi cap nhat height = 30 la: " + ht.tinhDienTichToanPhan())