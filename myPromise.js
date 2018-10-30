var promise1 = new Promise(function(resolve, reject) {
	try{
        asdfadsf;
      	resolve("Worked");
    }catch(err){
      reject(new Error("Fuck this didn't work")); 
    }
});

promise1.then(value => {
  console.log(value);
}).catch(err => console.log("Promise failed"));

console.log(promise1);
// expected output: [object Promise]

