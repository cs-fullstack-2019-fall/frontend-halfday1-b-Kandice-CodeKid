
// Step 4: (2 points)
//
// In a JavaScript file, once the P1 button is pressed increase the text above it by 1. Do the same for P2.




// let p1 = document.getElementById('#button1'),
//     count=0;
// p1.click=(function(){
//     count+=1;
//     p1.innerText= count
// });

let count = 0;
let gameWin = 15;

$('#button1').click(function()
{
    player1=$('#score1').text(count++);

    function lead()
    {
        // for (x = 0; x < gameWin; x++)
        // {
        //     console.log(x)
        // }
        if (player1 > player2)
        {
            $("#lead").text("Player 1 in lead");

        }
        else if (player1<player2)
        {
            $("#lead").text("Player 2 in lead");
        }
        else {
            $("#lead").text("Tie Game");
        }

    }
    lead();
});

$('#button2').click(function()
{
    // count = 0;
    player2 =$('#score2').text(count++);
    // alert('button clicked');

    function lead()
    {
        for (x = 0; x < gameWin; x++)
        {
            console.log(x)
        }
        if (player1 > player2)
        {
            $("#lead").text("Player 1 in lead");

        }
        else if (player1<player2)
        {
            $("#lead").text("Player 2 in lead");
        }
        else {
            $("#lead").text("Tie Game");
        }

    }
    lead();


});

// let player1Score = 0;
// let player2Score = 0;
// let gameWin =20;
let gameWin =15;
function winner()
{

    while (player1 || player2 !== gameWin);
    {

    }



}
