$(window).load(function() {
            $(".se-pre-con").fadeOut();;
        });


function openNav() {
   
            let x=  screen.width;
         
            if(x < 700)
            {
                 document.getElementById("myNav").style.width = "60%";
            }
            else{
               
                document.getElementById("myNav").style.width = "20%";
            }
            
        }
        
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }

        
