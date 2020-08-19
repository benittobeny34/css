const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


const flames = document.querySelector("#flames");
const rps = document.querySelector('#rps');
const about = document.querySelector("#about");

const flamegame  = document.querySelector(".flames");
const rpsgame  = document.querySelector(".game");



hamburger.addEventListener("click",() => {
    navlinks.classList.toggle("open");
    flamegame.classList.remove("fadeIn");


});



flames.addEventListener("click",function() {
    
   flamegame.classList.add("fadeIn");
   $('.landing').addClass('fadeOut');
   navlinks.classList.remove("open");
   rpsgame.classList.remove("fadeIn");

   
});

rps.addEventListener("click",function() {

    rpsgame.classList.add("fadeIn");
    $('.landing').addClass('fadeOut');
    navlinks.classList.remove("open");
    flamegame.classList.remove("fadeIn");

});

about.addEventListener('click',()=>{
    alert('happy Coding.!.!.benitto_raj');
});

$(document).ready(function(){

    $('#button').on('click',function(){
            var uname = $('#uname').val();
            var pname = $('#pname').val();
           var match = getFlame(uname, pname);
           if(match == 'Friends')
            $('#result').html(uname+' and '+pname+' are best '+match);
           else if(match == 'Love')
            $('#result').html(uname+' and '+pname+' are going to be Fall in '+match);
           else if(match == 'Affection')
             $('#result').html(uname+' and '+pname+' are having  '+match+' on each other');
           else if(match =='Marry')
            $('#result').html(uname+' and '+pname+' are Going To Be  '+match);
           else if(match =='Enemy')
            $('#result').html(uname+' and '+pname+' are literally  '+match);
           else if(match == 'Sibling')
            $('#result').html(uname+' and '+pname+' are '+match);    
            
     })


    const getFlame = (name1, name2) =>
          name1.toLowerCase().split('').                                                      // take all characters in "name1", to compare
          filter(c => name2.toLowerCase().includes(c)).                                       // keep only characters (in "name1") also found in "name2"
          reduce((result, c) => [
            result[0].replace(new RegExp(`${c}`, 'g'), ''),                                   // replace common characters in "name1"
            result[1].replace(new RegExp(`${c}`, 'g'), '')                                    // replace common characters in "name2"
          ], [name1.toLowerCase(), name2.toLowerCase()]).
          reduce((length, letters) => [length.shift() + letters.length], [0]).                // determine length of characters left, after removal
          map(length => {
            const findStop = (flames, startAt) => {
              if (flames.length === 1) return flames;                                         // stop, if one flame character is left
              const position = new Array(length).fill(0).                                     // move "length" number of times
                reduce(beginAt => beginAt + 1 > flames.length ? 1 : beginAt + 1, startAt - 1) // determine where to stop, in one move
              flames.splice(position - 1, 1);                                                 // remove the "flame" character where we stopped
              return findStop(flames, position);                                              // find the next stop
            };
            return findStop('FLAMES'.split(''), 1)[0];                                        // begin finding stops
          }).
          map(result =>
            ['Friends', 'Love', 'Affection', 'Marry', 'Enemy', 'Sibling'].
              filter(flame => flame.toLowerCase().startsWith(result.toLowerCase()))[0]        // present result in readable form
          )[0];

    })