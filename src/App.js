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
        <img src={plus}/>
        </span>
    </div>

    <div>
       <span> How much does Netflix cost?
        <img src={plus}/></span>
    </div>

    <div>
        <span>Where can I watch?
        <img src={plus}/></span>
    </div>

    <div>
        <span>How do I cancel?
        <img src={plus}/></span>
    </div>

    <div>
       <span> What can I watch on Netflix?
        <img src={plus}/></span>
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
