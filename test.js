

var arr1 = [1 , 'a' , 'b' , 2]

function filterNumbers(arr)
{
    for(let i  = 0 ; i < arr.length; i++)
    {
        if( typeof arr[i] !== "number" )
        {
            arr.splice(i , 1 )
            i = 0
        }
    }
}

filterNumbers(arr1)
console.log(arr1)