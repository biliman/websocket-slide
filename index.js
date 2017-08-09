  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAeBpJtMQ1QPg-Kb4_vpqiTcjnCUIFqTDM",
    authDomain: "fir-1st-f5097.firebaseapp.com",
    databaseURL: "https://fir-1st-f5097.firebaseio.com",
    projectId: "fir-1st-f5097",
    storageBucket: "fir-1st-f5097.appspot.com",
    messagingSenderId: "929890489292"
  };
  firebase.initializeApp(config);

function writeData(data) {
    firebase.database().ref('test-url/').set({
    hash:data
    });
    console.log('data sukses');
  }
  
  var startData = firebase.database().ref('test-url/hash/');
    startData.on('value', function(url) {
      // console.log(url.val());
      console.log(url);
      var data = url.val()
      window.location.hash = data
  });
  
  $(window).on('hashchange',()=>{
    // console.log(window.location.hash);
    writeData(window.location.hash)
  });