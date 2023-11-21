// switch statement
/*SYNTAX : 

switch (key) {
    case value:
        ...some code
        break; must to use to prevent others to exec
        
        default:
            if no one matched the key then this code will exec
            break;
        }

*/

const month = 6;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    default:
        console.log('May be you are above July');
        break;
}

const ratings = 'Good';

switch(ratings)
{
    case 'Bad': 
            console.log('Very bad review');
            break;
    case 'Average': 
            console.log('Average review');
            break;
    case 'Good': 
            console.log('Good review');
            break;
    case 'Excellent': 
            console.log('Excellent review');
            break;
    default:
        console.log('Bad Request 400');
        break;
}