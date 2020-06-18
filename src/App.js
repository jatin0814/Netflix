import React from 'react';
import plus from './images/plus.png';
import main from './images/main.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div id="bg"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" 
        alt="main" id="logo"/>
        <button id="signin">Sign In</button>
        <img src={main} alt="main" id="image1"/>
        <div id="container1Inside">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime</h2>
          <input type="email" placeholder="Email address"/>
          <button>TRY IT NOW</button>
        </div>
        <div id="container2Inside">
          <div id="text">
          <p>
          <h1>Enjoy on your TV.</h1>
          <h3>Watch on smart TVs, PlayStation, Xbox,<br/>Chromecast, Apple TV, Blu-ray players and more</h3>
          </p>
          <button id="button2">TRY IT NOW</button>
          </div>
          <div id="media">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="tv" id="tv"/>
            <div id = 'v1'>
              <video autoPlay playsinline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
              </video>
            </div>
          </div>  
        </div>
    <div id = 'container3Inside'>
      <div id="media2">
          <img id = 'st' alt = 'st' src = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'/>
            <div id="book1">
            <img id="book" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
            <p style={{color:'#0071EB',alignSelf:'center'}}>Downloading...</p>
            <img id = 'gif' alt = 'gif' src = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'/>
          </div>
      </div>
        <div id="text2">
          <h1>Download your shows to watch on the go.</h1><h2>Save your data and watch all your favourites offline.</h2>
          <button id="button2">TRY IT NOW</button>
        </div>
    </div>
    <div id = 'container4Inside'>
        <div id="text3">
          <h1>Watch everywhere.</h1>
          <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
          <button id="button2">TRY IT NOW</button>
        </div>
        <div id="media3">
          <img alt = 'rc' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"/>
          <div id = 'v2'>
            <video autoPlay playsinline muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/>
            </video>
          </div>
        </div>
  </div>
  <div id = 'faq'>
    <h1 style={{'textAlign':'center','fontSize':'40px'}}>Frequently Asked Questions</h1>
    <div id='ques'>
    <div>
        <span>What is Netflix?
        <img src={plus} onClick={()=>{
          var x = document.getElementById("ans1");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
              x.style.display = "none";
          }}
        }/>
        </span>
        <p id="ans1" style={{display:"none"}}><hr/>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
          anime, documentaries and more - on thousands of internet-connected devices.
          You can watch as much as you want, whenever you want, without a single 
          ad - all for one low monthly price. There's always something new to discover,
          and new TV shows and movies are added every week!</p>
    </div>

    <div>
       <span> How much does Netflix cost?
        <img src={plus} onClick={()=>{
          var x = document.getElementById("ans2");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
              x.style.display = "none";
          }}
        }/></span>
        <p id="ans2" style={{display:"none"}}><hr/>Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device,
         all for one low fixed monthly fee. Plans start from Rs.199 a month. No extra 
         costs or contracts.</p>
    </div>

    <div>
        <span>Where can I watch?
        <img src={plus} onClick={()=>{
          var x = document.getElementById("ans3");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
              x.style.display = "none";
          }}
        }/></span>
        <p id="ans3" style={{display:"none"}}><hr/>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your 
        Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers
         the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your
          favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet 
          connection. Take Netflix with you anywhere.</p>
    </div>

    <div>
        <span>How do I cancel?
        <img src={plus} onClick={()=>{
          var x = document.getElementById("ans4");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
              x.style.display = "none";
          }}
        }/></span>
       <p id="ans4" style={{display:"none"}}><hr/> Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.
         There are no cancellation fees - start or stop your account anytime.</p>
    </div>

    <div>
       <span> What can I watch on Netflix?
        <img src={plus} onClick={()=>{
          var x = document.getElementById("ans5");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
              x.style.display = "none";
          }}
        }/></span>
        <p id="ans5" style={{display:"none"}}><hr/>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. 
        Watch as much as you want, anytime you want.</p>
    </div>
    </div>
    <br/>
    <br/>
    <button>
      TRY IT NOW
    </button>
    <br/>
  </div>
  <div id  = 'footer'>
      <span>Questions? Call 000-800-040-1843</span>
      <div>
      <ul>
        <li>FAQ</li>
        <li>Help Centre</li> 
        <li>Account</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Netflix Originals</li>
      </ul>
      </div>
      <span>Netflix India</span>
  </div>
   </div>
  );
}

export default App;
