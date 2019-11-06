    
var gol = [];
    gol[0] = "foto1.jpg";
    gol[1] = "foto2.png";
    gol[2] = "foto3.jpg";
    NumGol = 0;
    TotalGol = 3;

    setInterval(function (){  
    
    document.IMGbanner.src = gol[NumGol];
        NumGol ++
        if (NumGol == TotalGol){
            NumGol = 0 ; 
        }
    },
     2000);