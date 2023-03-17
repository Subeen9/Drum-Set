function Housekeeper(name, age, work){
    this.name = name;
    this.age = age;
    this.work = work;
     this.clean = function(){
         alert("Clean in progress")
     }
   }

var h1 = new Housekeeper("jak", 22, "work");
console.log(h1.name);
console.log(h1.clean);