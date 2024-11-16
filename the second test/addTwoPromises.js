/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return new Promise((resolve)=>{
        Promise.all([promise1,promise2]).then((result)=>{
            let add=result[0]+result[1];
            resolve(add)});
    });
}
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
addTwoPromises(Promise.resolve(promise1),Promise.resolve(promise2)).then(result=>console.log(result));
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));
addTwoPromises(Promise.resolve(promise1),Promise.resolve(promise2)).then(result=>console.log(result));

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */