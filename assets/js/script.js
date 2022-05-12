//$(document).ready(function(){})
$(function(){



var servicesBtnContainer = $("<div id=services></div>");
        let websiteBtn = $("<button id='website' class='servicesBtn'> Web Dev.</button>");
        let graphicDBtn = $(" <button id='graphicD' class='servicesBtn'></button>").text("Graphic Design");
        let mobAppBtn = $(" <button id='mobApp' class='servicesBtn'></button>").text("Mobile App Development");
        let desktopAppBtn = $(" <button id='desktopAppDev' class='servicesBtn'></button>").text("Desktop App Development");
        let team = $(" <p id='team'></p> ").text("Team of Experts");
        let ceoBtn = $("<button id='sammy' class='servicesBtn'></button>").text("Samuel Omaka");
        let internBtn = $(" <button id='cassidy' class='servicesBtn'>Oluchi Cassidy</button>").text("Oluchi Cassidy");

    
  
        
      
       

//This function appends the chatbot replies to the main tag
function chatBot(message){
    let prevMessage = $("main").html();
    var chatbotHtml = '<div id="chatbotPost">' + 
    '  <img  src="assets/img/ai_chatbot-removebg-preview-removebg-preview (1).png"> ' +
       '<div class="chat">' + 
          ' <span id="chatbotReply">' + message +'</span> ' +
            '<span class="chatbotTime"></span>' +
       '</div>' +
  '</div>'
$("main").html(prevMessage + chatbotHtml);
}


//This function appends the user replies to the main tag
function user(message){
    let prevMessage = $("main").html();
    var userHtml = ' <div id="userPost"> ' +
            '<div class="chat">' +
                '<span id="userReply">'+ message+'</span>' +
                '<span class="userTime"></span>' +
            '</div>' +
        '<img src="assets/img/usericon-removebg-preview.png" alt="">' +
    '</div>'

    $("main").html(prevMessage + userHtml);
};




const services = {
    Ceo : '<div style="text-align:center"><img src="assets/img/ceo_tutapis.jpg"  id="ceoImg"></div>' +
            '<div style="text-align:center"><b>Omaka Samuel Dike</b> <br> <span>CEO Tutapis Technologies</span></div>' +
            '' +
            '<p style="text-align:justify">Omaka Samuel Dike is the founder and Chief Executive Officer of Tutapis technologies and read more....</p>',
            

    cassidy : '<div style="text-align:center"><img src="assets/img/oluchi.jpg"  id="ceoImg"></div>' +
            '<div style="text-align:center"><b>Oluchi Cassidy</b> <br> <span>Intern at Tutapis Technologies</span></div>' +
            '' +
            '<p style="text-align:justify">Oluchi Cassidy is a fullstack web developer intern at tutapis technologies and read more....</p>'
}

//displays the time at which the post is replied
function displayTime(){
    var today = new Date();
    var h = today.getHours();
    var minute = today.getMinutes();
    minute = (minute <= 9)? "0" + minute : minute;
    var hour = today.getHours();
    if(hour == 00){hour = 12}
    hour = (hour <= 12)? hour : hour - 12;
    var ampm = (h <= 11) ? "AM" : "PM";
    
    $("#wrapper span.userTime").last().text(hour + ":" + minute + " " + ampm);
    $("#wrapper span.chatbotTime").last().text(hour + ":" + minute + " " + ampm);

}



//Introduces the chatbot and asks for users name
function askName(){
    chatBot("Hi! my name is Zinny, your Virtual Assistance");
    displayTime();
    chatBot("Please may I know your name?");
    }
   

//displays a welcome message with user's name
function welcomeMessage(message){
        chatBot("Your name is "+ message + "!" +  "<br> You are welcome to Tutapis Technologies");
        displayTime();
    
}


    $("#aiBtn").hide();
    askName();
    displayTime();

   
  
    //if nothing is typed to the input box, disable the send button
     $("#userInput").keyup(function(){
         if($(this).val().trim() != ""){
            $("#sendBtn").removeAttr("disabled");
            $("#aiBtn").removeAttr("disabled");
         }else{
             $("#sendBtn").attr("disabled", "disabled");
             $("#aiBtn").attr("disabled", "disabled");
         }
       
     })
    
    
    



    $("#sendBtn").click(function(){
        //getting user's input 
        var message = $("#userInput").val();
        $("#userInput").val("");
       
        if(message.trim() != ''){user(message)}; 
        
              

        welcomeMessage(message);
        chatBot("<b>services at tutapis technologies</b></b>. ");
        displayTime();
       $("main").html($("main").html());
       servicesBtnContainer.append(websiteBtn, graphicDBtn, mobAppBtn, desktopAppBtn, team, ceoBtn, internBtn);
       $("main").html($("main").html() + servicesBtnContainer.html());

 
  ///////////////////////////////////
       //$("#website").click(function(){
       // user("website");
    //})
    //////////////////////////////////

       $("#sendBtn").hide();
       $("#aiBtn").show().attr("disabled", "disabled");
       $("#userInput").attr("placeholder", "Enter your reply...")
       displayTime();
    });


 


//the function that replies the user base on his input
    $("#aiBtn").click(function(){

      
        let reply = $("#userInput").val().toLowerCase();
        $("#userInput").val("");


        if(reply.trim() != ''){
            
        if(reply.includes("website") || reply.includes("web")){
            user(reply);
            chatBot("We develop and maintain responsive and secure websites and applications to drive your business and organization.");
            displayTime();
           chatBot("Would you like to contact us for your website projects?  <a href='#' target='_blank'>Click here</a>"); 
        }
        else if(reply.match("mobile")){
            user(reply);
            chatBot("We build mobile applications to make your business portable, closer and accessible to your customers.");
            displayTime();
            chatBot("Would you like to contact us for your Mobile App projects?  <a href='#' target='_blank'>Click here</a>");
           
        }
        else if((reply.includes("graphics") || reply.includes("design")) || reply.includes("graphic")){
            user(reply);
            chatBot("As a vital factor of business presentation, we design graphics and video marketing for better customer persuation.");
            

        }
        else if(reply.includes("desktop") || reply.includes("software")){
            user(reply);
            chatBot("We develop desktop applications for your business automation while you focus on clients and administration.");
        }
        else if(reply.includes('samuel') || reply.includes('omaka')){
            user(reply);
            chatBot(services.Ceo)
        }
        else if (reply.includes("oluchi") || reply.includes("cassidy")){
            user(reply);
            chatBot(services.cassidy);
        }
        else{
            user(reply);
            chatBot("Invalid reply");
            displayTime();
            chatBot(" <br> Reply any of the following to learn more...");
       $("main").html($("main").html() + servicesBtnContainer.html());
            
        }
        
        }
        //calling the displaytime function
        displayTime();
       
    })


//chatbot icon appears after 3 seconds
    $("#chatbotBtn img").hide();
    $("#chatbotBtn img").fadeIn(3000);

    //chatbot icon rotates every 5 seconds
    setInterval(() => {
        $("#chatbotBtn img").animate({
            transform : 360
        },
        {
            step: function(now){
                $(this).css({
                    'webkit-transform' : 'rotate(' + now + 'deg)',
                    '-moz-transform' : 'rotate(' + now + 'deg)',
                    'transform' : 'rotate(' + now + 'deg)',
                    'transform' : 'rotate(' + now-1 + 'deg)'
                })
            }
        })
    }, 3000);


    
//show the wrapper class and hide the chatbot icon on click
    $("#chatbotBtn").click(function(){
        $("#wrapper").toggle(); 
    })

// close the wrapper class and show the chatbot icon on click
    $("#times").click(function(){
        $("#wrapper").fadeOut();
        $("#chatbotBtn").fadeIn();
    })
  
    //send reply when the enter keyboard is pressed
$("#userInput").keyup(function(e){
    if(e.key == "Enter"){
       if ($("#userInput").attr("placeholder").includes("name")){
        $("#sendBtn").click();
        }
        
       if ($("#userInput").attr("placeholder").includes("reply")){
        $("#aiBtn").click();
        }
        
       
    }

 })





 




       






})

















