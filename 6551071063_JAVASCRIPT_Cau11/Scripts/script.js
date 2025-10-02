function reverseNumber(n) {
            return parseInt(n.toString().split("").reverse().join(""))
        }

        var original = parseInt(prompt("nhap day so: "))
        var reversed = reverseNumber(original)

        document.write("So ban dau: " + original + "<br>")
        document.write("So sau khi dao nguoc: " + reversed)
