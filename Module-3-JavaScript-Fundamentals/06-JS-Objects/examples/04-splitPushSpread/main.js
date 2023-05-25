let lyrics = "As I walk down the valley of the Shadow of Death I take a look at my life and realize there's nothing left"

let arrSplit = lyrics.split(' ')
arrSplit[10] = "Death ,"
arrSplit = arrSplit.join(' ').split(',')
console.log(arrSplit);

// for(let i = arrSplit.length -1; i>0 ; i-- ){
//     console.log(arrSplit[i]);
// }

let lyrics2 = "cause i been blasting and laughin so low that even my mama thinks my mind is gone"

let arr2Split = lyrics2.split(' ');
//arrSplit.push(arr2Split)
// let newArray = [...arrSplit, ...arr2Split]

//console.log(arrSplit)