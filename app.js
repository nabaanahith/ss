import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import firebase from 'firebase';
// var config = {
//     apiKey: "AIzaSyDiEdheYYptR8jqM1skd1JWLF_fIoqmIp8",
//     authDomain: "fikrajob-c5adb.firebaseapp.com",
//     databaseURL: "https://fikrajob-c5adb.firebaseio.com",
//     projectId: "fikrajob-c5adb",
//     storageBucket: "fikrajob-c5adb.appspot.com",
//     messagingSenderId: "638394804035"
// };
// firebase.initializeApp(config);

class Formm extends Component {
	render() {
		return (
			<div>
				<div className="main-wrapper-first">
					<header>
						<div class="container">
							<div class="header-wrap">
								<div class="header-top d-flex justify-content-between align-items-center">
									<div class="logo">
										<a href="index.html"><img src="img/logo.png" alt="" /></a>
									</div>
									<div class="main-menubar d-flex align-items-center">
										<nav class="hi\de">
											<a href="index.html">Home</a>
											<a href="generic.html">sceduild post</a>
											<a href="elements.html">start sceduile</a>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</header>
					<div class="banner-area">
						<div class="container">
							<div class="row justify-content-center height align-items-center">
								<div class="col-lg-8">
									<div class="banner-content text-center">
										<span class="text-white top text-uppercase">Welcome :)</span>
										<h1 class="text-white text-uppercase">Start sceduile your posts</h1>
										<a href="#here" class="primary-btn d-inline-flex align-items-center"><span class="mr-10">Get Started</span><span class="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section  id="here" class="featured-area">
					<div class="container">
						<div class="row">


							<div class="col-md-12">
								<div class="single-feature d-flex flex-wrap justify-content-between">
									<div class="icon d-flex align-items-center justify-content-center">
										<span class="lnr lnr-clock"></span>
									</div>
									<div class="desc">
										<h6 class="title text-uppercase">SCEDULE HERE</h6>
										<p>Now you can sceduile your Insta  posts  ,only choose your date :)</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>







				<section class="subscription-area">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-8">
								<div class="section-title text-center">
									<h3>Please enter your information of instagram</h3>
									<span class="text-uppercase">type your active username and password</span>
								</div>
							</div>
						</div>
						<div class="row justify-content-center">
							<div class="col-lg-6">
								<div id="mc_embed_signup">
								<form action="http://localhost:8000/"  class="subscription relative"enctype="multipart/form-data" method="post">
		
										<input type="username" name="username" placeholder="User name"  required />

										<input type="Password" name="password" placeholder="Password" required />


										<input type="text" name="datem" placeholder="ex: Sun Jan 13 2019"  required />
										<input type="text" name="datet" placeholder="ex: 16:52:03"  required />

										<input id="Upload" type="file" multiple="multiple" name="img"/>			
									<textarea type="text"  name="texteara" id="form10" class="md-textarea form-control textarea" placeholder="type your post" rows="3"></textarea>

										<button class="primary-btn hover d-inline-flex align-items-center"><span class="mr-10">Get Started</span><span class="lnr lnr-arrow-right"></span></button>
										<div class="info"></div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</section>
				<footer>
					<div class="container">
						<div class="footer-content d-flex justify-content-between align-items-center flex-wrap">
							<div class="logo">
								<img src="img/logo.png" alt="" />
							</div>
							<div class="copy-right-text">Copyright &copy; 2019  |  All rights reserved to fikra. This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">fikraspace</a></div>
							<div class="footer-social">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								<a href="#"><i class="fa fa-dribbble"></i></a>
								<a href="#"><i class="fa fa-behance"></i></a>
							</div>
						</div>
					</div>
				</footer>
			</div>



		)



	}

}
ReactDOM.render(<Formm />, document.getElementById('root2'))
