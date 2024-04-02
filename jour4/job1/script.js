//async for asyncronised a function 
async function monExpression(){
    //path of txt
    const button = await fetch('./expression.txt');
    const reponse = await button.txt();
    console.log(reponse);
}
monExpression()