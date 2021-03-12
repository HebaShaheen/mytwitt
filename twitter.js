var thewrite =document.querySelector('textarea'),
    thename = document.querySelector(".name"),
    thebtn = document.querySelector('.btn'),
    thetweet = document.querySelector('.newsfeed'),
    thetnews = document.querySelector('.tweet');
    var tweets   = [];
       thebtn.onclick = function() {
       thetnews.setAttribute("style", "height:auto");
       var thep = document.createElement('p');
       var b = document.createElement('p');
       var thelike = document.createElement('div');
       var b1 = document.createElement('button');
       var b2 = document.createElement('button');
       var thekol =document.createElement('div');
       b.textContent = '@' + thename.value;
       b.setAttribute('style', 'font-weight:bold; color:rgb(0, 69, 97); text-shadow:3px 3px 7px #888; font-size:25px');
       thep.textContent = thewrite.value;
       thep.setAttribute('style', 'max-width:100% ; word-wrap: break-word; white-space:pre-line; height:auto; font-size:20px ');
       thealt = document.querySelector(".alt");
       thex = document.querySelector(".x");
       if(b.textContent == '@'|| thep.textContent == ''){
          thealt.style.display ="block";
          thex.onclick =() =>{
            thealt.style.display ="none";
         }
      }
       else{
       thetweet.style.display = 'block';
       thekol.appendChild(b);
       thekol.appendChild(thep);
       b1.textContent = "Like";
       b2.textContent = "Retweet";
       thelike.setAttribute("style", "border-bottom: 1px solid #ddd");
       b1.setAttribute("class", "first");
       b2.setAttribute("class", "second");
       thelike.appendChild(b1);
       thelike.appendChild(b2);
       thekol.append(thelike);
       thetweet.insertBefore(thekol, thetweet.firstChild);
       let mytweet = {
         auther: b,
         tweet: thep
     };
         tweets.push(mytweet);
         console.log(tweets);
       b1.onclick = ()=>{
         b1.textContent = "1";
         thep.style.color = "red";
      };
      b1.ondblclick = ()=>{
         b1.textContent = "Like";
         thep.style.color = "#000";
      };
      b2.onclick = () =>{
         let theret = thekol.cloneNode(true);
         thetweet.insertBefore(theret, thetweet.firstChild);
         theret.childNodes[2].onclick = ()=>{
          theret.childNodes[1].style.color = "red";
       };
       theret.childNodes[2].ondblclick = ()=>{
        theret.childNodes[1].style.color = "#000";
     };


      };
   }
    };
     
var myprofile = document.querySelector(".pro");
var myhome = document.querySelector(".home");
var you = document.querySelector(".tweet h2");
var thespan = document.querySelector('.tweet span');
myprofile.addEventListener("click", () =>{
thewrite.style.display = "none";
thename.style.display = "none";
thebtn.style.display = "none";
thespan.style.display = "none";
you.textContent = thename.value;
});

myhome.addEventListener("click", () =>{
thewrite.style.display = "block";
thename.style.display = "block";
thebtn.style.display = "block";
thespan.style.display = "block";
you.textContent = "Home";
});  
    
    