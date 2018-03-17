var config = {
    apiKey: "AIzaSyB_MdeSN7zyqKOez9jD-udjqs9jTTljaVI",
    authDomain: "pukaar2k18.firebaseapp.com",
    databaseURL: "https://pukaar2k18.firebaseio.com",
    projectId: "pukaar2k18",
    storageBucket: "",
    messagingSenderId: "186691084782"
  };
  firebase.initializeApp(config);
var users = firebase.database().ref("userlist");


    $("#submit").click(
        function(e)
        {
             e.preventDefault();
            var name = $("#name").val();
            var phoneNumber = $("#phonenumber").val();
            var branch = $("#branch").val();
            var college = $("#college").val();
            if(validator(name , phoneNumber , branch ,college ))
            {
             var pukaarId = displayId(name,phoneNumber);

              addToDatabase( pukaarId ,name , phoneNumber , branch , college);
               $(".alert").css('display' , 'block');
            }
            else
            {
                alert("fill all the blanks");
            }
           
            $("#eform").trigger("reset");
            
        })

        function addToDatabase( pukaarId ,name, phoneNumber , branch , college) {
            var newUser = users.push();
            newUser.set({
              pukaarId : pukaarId,
              username: name,
              phoneNumber : phoneNumber,
              branch : branch,
              college : college
            
            });
           
          }
        

 function displayId( name , phoneNumber )
  {
     var htmlString = "PUK_"+name.toUpperCase().substring(0,3)+""+phoneNumber.substring(7,10) ;
     
    alert("please remember your ID: "+htmlString);
     return htmlString;
    
  }

//validator
  function validator(name , phoneNumber ,branch , college )
  {
     if(name.length==0 || phoneNumber == null || branch.length==0 || college.length==0)
     {
       return 0;
     }
     else
     { 
  
       return 1;  
     }
  }

