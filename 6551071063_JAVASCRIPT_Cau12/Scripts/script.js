function power(b, n) {
var result = 1
for (var i = 0; i < n; i++) {
    result = result * b
 }
return result
}
var b = parseInt(prompt("Nhap so nguyen duong b:"))
var n = parseInt(prompt("Nhap so nguyen duong n:"))
var kq = power(b, n)
   document.write("Gia tri cua " + b + " mu " + n + " la: " + kq)
