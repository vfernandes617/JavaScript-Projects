//This variable keeps track of whose turn it is.
let activePlayer='X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares=[];

//This function is for palcing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasnt been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if  (!selectedSquares.some(element=>element.includes(squareNumber))){
        //This variable retrieves the HTML element id that was clicked.
        let select=document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer==='X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage='url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage='url("images/o.png")';
        }
        //sqaureNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a functiuon to check for any win conditions.
        checkWinConditions();
        if (activePlayer=='X') {
            //If active player is 'X' change it to 'O'.
            activePlayer='O';
            //if active player is anything other than 'X'
        } else{
            //change the activePlayer to 'X'
            activePlayer='X';
        }
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn.
        if (activePlayer==='O') {
            //This fucntion disables clicking for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function(){computersTurn();},1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success=false;
        //This variable stores a random number0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success){
            //A random number between 0 and 8 is selected.
            pickASquare=String(Math.floor(Math.random()*9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)){
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success=true;
            };
        }
    }
}


//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X 0,1,2 condition.
    if (arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100)}
    //X3,4,5 condition.
    else if (arrayIncludes('3X','4X','5X')){drawWinLine(50,304,558,304)}
    //X6,7,8 condition.
    else if (arrayIncludes('6X','7X','8X')){drawWinLine(50,508,558,508)}
    //X0,3,6 condition.
    else if(arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558)}
    //X1,4,7 condition.
    else if(arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558)}
    //x2,5,8 condition.
    else if(arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558)}
    //X6,4,2 condition.
    else if(arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90)}
    //X0,4,8 condition.
    else if(arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520)}
    //O0,1,2 condition.
    else if(arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100)}
    //O3,4,5 condition.
    else if(arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304)}
    //O6,7,8 condition.
    else if(arrayIncludes('6O','7O','8O')){drawWinLine(50,508,558,508)}
    //O0,3,6 condition.
    else if(arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558)}
    //O1,4,7 condition.
    else if(arrayIncludes('1O','4O','7O')){drawWinLine(304,50,304,558)}
    //O2,5,8 condition.
    else if(arrayIncludes('2O','5O','8O')){drawWinLine(508,50,508,558)}
    //O6,4,2 condition.
    else if(arrayIncludes('6O','4O','2O')){drawWinLine(100,508,510,90)}
    //O0,4,8 condition.
    else if(arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520)}
    //This condition checks for a tie. If none of the above conditions are met and 
    //9 square are selected the code executes.
    else if(selectedSquares.length>=9){
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function(){resetGame();},500);
    }

    //This fucntion checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA,squareB,squareC){
        //These 3 variable will be used to check for 3 in a row.
        const a=selectedSquares.includes(squareA);
        const b=selectedSquares.includes(squareB);
        const c=selectedSquares.includes(squareC);
        //If the 3 variable we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function.
        if(a===true&&b===true&&c===true){return true;}
    }
}   
//This function makes our body element temporarily unclickable.
    function disableClick() {
        //This makes our body unclickable.
        body.style.pointerEvents='none';
        //This makes our body clickable again after 1 second.
        setTimeout(function(){body.style.pointerEvents='auto';},1000);
    }
    //This function takes a string parameter of the path you set earlier for
    //placement souind('.media/place.mp3')
    function audio(audioURL){
        //we create a new audio object and we pass the path as a parameter.
        let audio=new Audio(audioURL);
        //play method plays our audio sound.
        audio.play();
    }


    //This function utilizes HTML canvas to draw win lines.
    function drawWinLine(coordX1,coordY1,coordX2,coordY2){
        //This line accesses our HTML canvas element.
        const canvas=document.getElementById('win-lines');
        //This line gives us access to methods and properties to use on canvas.
        const c=canvas.getContext('2d');
        //This line indicates where the start of a line x axis is.
        let x1=coordX1,
            //This line inidcates where the start of a line y axis is.
            y1=coordY1,
            //This line indicates where the end of a line x axis is.
            x2=coordX2,
            //This line inidcates where the end of a lines y axis.
            y2=coordY2,
            //This variable stores temporary x axis data we update in our animation loop.
            x=x1,
            //This variable stores temporary y axis data we update in our animation loop.
            y=y1;

        //This function interacts with the canvas.
        function animateLineDrawing(){
            //This variable creates a loop.
            const animationLoop=requestAnimationFrame(animateLineDrawing);
            //This method clears content from the last loop interation.
            c.clearRect(0,0,608,608);
            //This method starts a new path.
            c.beginPath();
            //This method moves us to a starting point in our line.
            c.moveTo(x1,y1);
            //This method incdicates the end point in our line.
            c.lineTo(x,y);
            //This method sets the width of our line.
            c.lineWidth=10;
            //This method sets the color of our line.
            c.strokeStyle='rgba(70,255,33,.8)';
            //This method draws everything we laid our above.
            c.stroke();
            //This condition checks if we've reached the endpoint.
            if(x1<=x2&&y1<=y2){
                //This condition adds 10 to the previous end x endpoint
                if(x<x2){x+=10;}
                //This condition adds 10 to the previous end y endpoint.
                if (y<y2){y+=10;}
                //This condition is similar to the one above.
                //This is necessary for the 6,4,2 winn conditions.
                if (x>=x2&&y>=y2){cancelAnimationFrame(animationLoop);}
            }
            //This condition is similar to the one above.
            //This is necessary for the 6,4,2 win condtion.
            if(x1<=x2&&y1>=y2){
                if(x<x2){x+=10;}
                if(y>y2){y-=10;}
                if(x>=x2&&y<=y2){cancelAnimationFrame(animationLoop);}
            }
        }

            //This function clears our canvas after our win line is drawn.
            function clear() {
                //This line starts our animation loop.
                const animationLoop=requestAnimationFrame(clear);
                //This line clears our canvas.
                c.clearRect(0,0,608,608);
                //This line stops our animation loop.
                cancelAnimationFrame(animationLoop);
            }
            //This line disallows clicking while the win sound is playing
            disableClick();
            //this line plays the win sounds.
            audio('./media/winGame.mp3');
            //This line calls our maiun animation loop.
            animateLineDrawing();
            //This line waits 1 second.Then, clears canvas resets game, an allows again.
            setTimeout(function(){clear();resetGame();},1000);    
    }

    //function resets the game in the evenr of a tie or a win.
    function resetGame() {
        //This for loop iterates through each HTML square element.
        for(let i=0;i<9;i++){
            //This variable gets teh HTML element i.
            let square=document.getElementById(String(i));
            //This removes our elements backgroundImage.
            square.style.backgroundImage='';
        }
        //This resets our array so it is empty and we can start over.
        selectedSquares=[];
    }
