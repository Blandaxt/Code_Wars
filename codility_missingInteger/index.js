function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    console.log("array", A)

    let sortedArray = A.sort( function( a, b) {
        return a - b;
    })

    let filteredArray = sortedArray.filter( x => x > 0)

    let outlier = 0;

    let interger = 0;

    console.log("New array", filteredArray);

    if( filteredArray.length == 0){

        outlier = 1

        return outlier;

    }

    for( i = 0; i< filteredArray.length; i++){

        if( filteredArray.includes(filteredArray[i] - 1) ){

            console.log("number", filteredArray[i] )

        }
        else
        {

            interger = filteredArray[i] - 1

            return interger;

        }

        if( filteredArray.includes(filteredArray[i] + 1) ){

            console.log(" number", filteredArray[i])


        }
        else
        {

            interger = filteredArray[i] + 1

            return interger;

        }
    }

}
