const quotes=[
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "“ In order to be irreplaceable, one must always be different” – Coco Chanel",
  "“Java is to JavaScript what car is to Carpet.” – Chris Heilmann",
  "“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon",
  ];
  var btn = document.querySelector("#quote button");
  btn.addEventListener("click",function(){
    var index;
    quotes.forEach((s,i)=>{
      if(s == document.querySelector("#quote p").innerHTML){
        index = i
      }
    });
    if(index == quotes.length-1){
      document.querySelector("#quote p").innerHTML=quotes[0];
    }else{
      index++;
      document.querySelector("#quote p").innerHTML=quotes[index];
    }
  });