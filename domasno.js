const temp = [12, 13, 20, 31, 41, 17]

let hottest = temp[0]
let coldest= temp[0]

for (let index = 0; index < temp.length; index++) {
    let day = temp[index]
    if ( day > hottest)
    {
        hottest = temp[index]
    }
    if (day < coldest)
    {
    coldest= temp[index]

    }
}
console.log(hottest)
console.log(coldest)