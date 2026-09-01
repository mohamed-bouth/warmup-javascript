const courses = ["pain", "lait", "riz", "cafe"]

//1 

courses.push("sucre");
console.log("add cafe : " , courses)

//2

const postion = courses.indexOf("lait");
courses.splice(1,1)
console.log("delete lait : " , courses)

//3

console.log("count article on array : " , courses.length)

//4

console.log("number d'articles : " , courses.length);
for(i = 0 ; i < courses.length ; i++){
    console.log(i+1 + ". " , courses[i]);
}
console.log("Le cafe est bien dans la liste.")