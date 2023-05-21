// hoisting
// biến được khai báo var
// function declaration

// scope
// 1. global
// 2. local
// 3. block code
// var i;
// for(let i = 0 ; i < 10; i++){
//     console.log(i);
// }
// console.log(`i outside for: ${i}`)


var i = 1;
{
    console.log(i)
    {
        var i = 5;
        console.log(i)
        {
            var i = 7
            {
                {
                    let i = 15;
                    console.log(i)
                }
            }
            console.log(i)
        }
    }
}