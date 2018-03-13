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
            var events = $("#eventSelector").val();
            console.log(name); 
            addToDatabase(name , phoneNumber, events);
            $("#eform").trigger("reset");
            
        })

        function addToDatabase( name, phoneNumber , events) {
            var newUser = users.push();
            newUser.set({
              username: name,
              phoneNumber : phoneNumber,
              event : events
            });
          }
        




