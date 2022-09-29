/* +++++++++++++++++++++++++++++++++++++++++++++ Slider Section +++++++++++++++++++++++++++++++++++++++++++++ */
   var indexValue = 1 ;
   // ------------------------ Call "showImg()" Function ------------------------
   showImg(indexValue);
   // ------------------------ "btn_slide()" Function : When Click on "indicators" ------------
   function btn_slide(e) 
   {
        showImg( indexValue = e ); 
   }
   // ------------------------ "side_slide()" Function : When Click on "Arrows" ------------
   function side_slide(e) 
   {
        showImg( indexValue += e ); 
   }
   /* ------------------------ "showImg()" Function : Show Slides ------------------------ */
   function showImg(e)
   {
        var i ;
               // Return All Slides( images ) : array of images 
        const  img = document.querySelectorAll(".images img"),
                // Return All "image Circles" : array of indicators 
                slider_circles = document.querySelectorAll(".btn-sliders span");
        
        console.log(img);
        console.log(slider_circles);
        
        if( e > img.length )
        {
            indexValue = 1 ;
        }
        else if( e < 1 )
        {
            indexValue = img.length ;
        }
        // Hide All Slides ( slider images ) 
        for( var i=0 ; i < img.length ; i++ )
        {
            img[i].style.display = "none" ;
        }
        for( var j=0 ; j < slider_circles.length ; j++ )
        {
            slider_circles[j].style.background = "rgba(0 , 0 , 0 , 0.5)";
        }
        /* ++++++++++++++++++ Show the "Current Slide" +++++++++++++++++ */
        img[indexValue-1].style.display = "block" ;
        /* ++++ Change the "BackgroundColor" of the "Current Slide" ++++ */
        slider_circles[indexValue-1].style.background = "#f00";
   }