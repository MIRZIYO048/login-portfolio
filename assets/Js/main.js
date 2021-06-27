// // SHOW MENU
// const showMenu = (toggleId, navbarId,bodyId) =>{
//     const toggle = document.getElementById(toggleId),
//     navbar = document.getElementById(navbarId),
//     bodypadding = document.getElementById(bodyId)

//     if(toggle && navbar){
//         toggle.addEventListener('click', ()=>{
//             // APARECER MENU
//             navbar.classList.toggle('show')
//             // ROTATE TOGGLE
//             toggle.classList.toggle('rotate')
//             // PADDING BODY
//             bodypadding.classList.toggle('expander')
//         })
//     }
// }
// showMenu('nav-toggle','navbar','body')

// // LINK ACTIVE COLOR
// const linkColor = document.querySelectorAll('.nav__link');   
// function colorLink(){
//     linkColor.forEach(l => l.classList.remove('active'));
//     this.classList.add('active');
// }

// linkColor.forEach(l => l.addEventListener('click', colorLink));

let navT = document.querySelectorAll('.nav__text')

navT.addEventListener('click' , () =>{
    navT.style.background = '#303749'  
    // `color: #bcfa02; border: none;`
})

var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

    const righter = document.querySelector('.right-fas');
    const inPut = document.querySelector('.in-put');
    const iNput = inPut.input.value;

    righter.addEventListener('click', () =>{
        inPut.input.value = ''
    })


    


    //  function sendmail(){
    
	// 		var name = $('#Name').val();
	// 		var email = $('#Sender').val();
	// 		var subject = $('#Subject').val();
    //   var message = $('#Message').val();

	// 		// var body = $('#body').val();

	// 		var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
	// 		//console.log(name, phone, email, message);

	// 		Email.send({
    //     SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
	// 			To: 'mirzeeyo2007@gmail.com',
	// 			From: "Your@client.com",
	// 			Subject: "Salom Men " +name + 'man',
	// 			Body: Body
	// 		}).then(
	// 			message =>{
	// 				//console.log (message);
	// 				if(message=='OK'){
	// 				alert('HOORRAY!!! 👍 Sizning so\'rovingiz qabul qilindi. Sog\' bo\'ling');
	// 				}
	// 				else{
	// 					console.error (message);
	// 					alert('OOPS!!! ☹ Xatolik yuz berdi , qaytadan urinib ko\'ring ')
						
	// 				}

	// 			}
	// 		);



	// 	}
//     /*===== LOGIN SHOW and HIDDEN =====*/
// const signUp = document.getElementById('sign-up'),
// signIn = document.getElementById('sign-in'),
// loginIn = document.getElementById('login-in'),
// loginUp = document.getElementById('login-up')


// signUp.addEventListener('click', ()=>{
// // Remove classes first if they exist
// loginIn.classList.remove('block')
// loginUp.classList.remove('none')

// // Add classes
// loginIn.classList.toggle('none')
// loginUp.classList.toggle('block')
// })

// signIn.addEventListener('click', ()=>{
// // Remove classes first if they exist
// loginIn.classList.remove('none')
// loginUp.classList.remove('block')

// // Add classes
// loginIn.classList.toggle('block')
// loginUp.classList.toggle('none')
// })


          /*===== LOGIN SHOW and HIDDEN =====*/
		  const signUp = document.getElementById('sign-up'),
		  signIn = document.getElementById('sign-in'),
		  loginIn = document.getElementById('login-in'),
		  loginUp = document.getElementById('login-up'),
		  loginFor = document.querySelector('.login__forgot'),
		  loginButton = document.querySelector('.login__button'),
		  loginBtn = document.querySelector('.log-btn')
		  
		  loginFor.addEventListener('click', function (){
			alert('Why are you asking me? 😒   Please remember')
		  })
		  loginButton.addEventListener('click', function (){
			alert('Great You Are Register Now')
		  })
		  loginBtn.addEventListener('click', function (){
			alert('OK ! You Are In Your Cabin')
		  })
		  signUp.addEventListener('click', ()=>{
		  // Remove classes first if they exist
		  loginIn.classList.remove('block')
		  loginUp.classList.remove('none')
		  
		  // Add classes
		  loginIn.classList.toggle('none')
		  loginUp.classList.toggle('block')
		  })
		  
		  signIn.addEventListener('click', ()=>{
		  // Remove classes first if they exist
		  loginIn.classList.remove('none')
		  loginUp.classList.remove('block')
		  
		  // Add classes
		  loginIn.classList.toggle('block')
		  loginUp.classList.toggle('none')
		  })
		  
		  
		  
		  function sendmail(){
			  
			  var name = $('#Name').val();
			  var email = $('#Sender').val();
			  var subject = $('#Subject').val();
			  var message = $('#Message').val();
		  
			  // var body = $('#body').val();
		  
			  var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
			  //console.log(name, phone, email, message);
		  
			  Email.send({
				SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				To: 'mirzeeyo2007@gmail.com',
				From: "Your@client.com",
				Subject: "Salom Men " +name + 'man',
				Body: Body
			  }).then(
				message =>{
				  //console.log (message);
				  if(message=='OK'){
				  alert('HOORRAY!!! 👍 Your Question is Sent ! Thank You for contacting');
				  }
				  else{
					console.error (message);
					alert('OOPS!!! ☹ Problem Here')
					
				  }
		  
				}
			  );
			}
		  
		  
			const downloadBtn = document.querySelector(".download-btn");
			  const countdown = document.querySelector(".countdown");
			  const pleaseWaitText = document.querySelector(".pleaseWait-text");
			  const manualDownloadText = document.querySelector(".manualDownload-text");
			  const manualDownloadLink = document.querySelector(".manualDownload-link");
			  var timeLeft = 10;
		  
			  downloadBtn.addEventListener("click", () => {
				downloadBtn.style.display = "none";
				countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds."; //for quick start of countdown
		  
				var downloadTimer = setInterval(function timeCount(){
				  timeLeft -= 1;
				  countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";
		  
				  if(timeLeft <= 0){
					clearInterval(downloadTimer);
					pleaseWaitText.style.display = "block";
					let download_href = ""; //enter the downloadable file link URL here
					window.location.href = download_href;
					manualDownloadLink.href = download_href;
		  
					setTimeout(() => {
					  pleaseWaitText.style.display = "none";
					  manualDownloadText.style.display = "block";
					}, 4000);
				  }
				}, 1000);
			  });









			  let knowMore1 = document.querySelector('.ca')
let knowMore2 = document.querySelector('.cb')
let knowMore3 = document.querySelector('.cc')
let knowMore4 = document.querySelector('.cd')
let knowMore5 = document.querySelector('.ce')
let knowMore6 = document.querySelector('.cf')
let knowMore = document.querySelector('.card__button')

knowMore1.addEventListener('click', function (){
let knowText = document.querySelectorAll('.hidden')
    knowText.style.display = 'block'
    knowText.style.transition = '1s'
})
knowMore2.addEventListener('click', function (){
let knowText = document.querySelectorAll('.hidden')
setTimeout(() => {
    knowText.style.display = 'block'
    knowText.style.transition = '1s'
}, 1000);

if(knowMore.innerHTML === 'Know more'){
    knowMore.innerHTML === 'OK !'
}
})
knowMore3.addEventListener('click', function (){
let knowText = document.querySelectorAll('.hidden')
    knowText.style.display = 'block'
    knowText.style.transition = '1s'
})
knowMore4.addEventListener('click', function (){
let knowText = document.querySelectorAll('.hidden')
    knowText.style.display = 'block'
    knowText.style.transition = '1s'
})
knowMore5.addEventListener('click', function (){
let knowText = document.querySelectorAll('.hidden')
    knowText.style.display = 'block'
    knowText.style.transition = '1s'
})
knowMore6.addEventListener('click', function (){
let knowText = document.querySelectorAll('.hidden')
    knowText.style.display = 'block'
    knowText.style.transition = '1s'
})
