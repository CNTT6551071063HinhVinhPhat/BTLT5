function student(name, id, gender) {
    this.name = name;
    this.id = id;
    this.gender = gender;
}

var sv = new student("Given", "229", "Male");

document.writeln("Thong tin sinh vien:<br>");
document.writeln("Name: " + sv.name + "<br>");
document.writeln("NumberID: " + sv.id + "<br>");
document.writeln("Gender: " + sv.gender + "<br>");