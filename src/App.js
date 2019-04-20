import React, { Component } from 'react';
import myPic from './assets/image/me.jpg';
import './App.css';
import { MDBProgress } from 'mdbreact';




class App extends Component {

  render() {
    return (
      <div class="body">
        <div className="App">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>


          <div class="card container">
            <img class="myPic" src={myPic} />
            <div class="top-1">
              <h3 class="name-text center">Kridtanan Noibaht</h3>
              <p class="job-ooca center">Web developer @ Ooca</p>
              <p class="contact-me center"><i class="fas fa-mobile-alt"></i>084-252-3749 &nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-envelope"></i> Kridtanan.n@Ooca.co &nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-instagram"></i>gx_ap  &nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-square"></i> Kridtanan Noibaht</p>
            </div>

            <div class="row container">
              <div class="col-6 container">
                <h3 class="head-text">Profile</h3>
                <div class="dropdown-divider"></div>
                <p>
                  <i class="fas fa-birthday-cake"></i> 28/08/1994
            </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 125/210 Sorpor srisaman building
                    Banmai Pakkred  Nonthaburi
            </p>
                <p>
                  <i class="fab fa-gitlab"></i> Gitlab.com/gapbana
            </p>
                <p>
                  
            </p>
                <h3 class="head-text">About Me</h3>
                <div class="dropdown-divider"></div>
                <p class="indeed5">
                  I like to solve problem and learn new things.
                  And I like to share knowledge when I learn new things
                  I am happy when I develop and maintain some products that can solve real problem.
            </p>

                <h3 class="head-text">Technical Skill</h3>
                <div class="dropdown-divider"></div>
                <h6>
                  Java Script :
            </h6>
                <MDBProgress className="my-2" material value={70} color="danger" />
                <h6>
                  HTML :
            </h6>
                <MDBProgress className="my-2" material value={80} color="warning" />
                <h6>
                  CSS :
            </h6>
                <MDBProgress className="my-2" material value={66} color="success" />
                <h6>
                  Vue :
            </h6>
                <MDBProgress className="my-2" material value={60} color="default" />

                <h6>
                  Java :
            </h6>
                <MDBProgress className="my-2" material value={55} color="info" />


                <h3 class="head-text">Language Skill</h3>
                <div class="dropdown-divider"></div>
                <h6>
                  Thai Languge :
            </h6>
                <MDBProgress className="my-2" material value={75} color="danger" />
                <h6>
                  English Language :
            </h6>
                <MDBProgress className="my-2" material value={50} color="warning" />
            <p class="b1"></p>

                {/* end left */}
              </div>

              <div class="col-6 container">

                <h3 class="head-text">Education</h3>
                <div class="dropdown-divider"></div>
                <h6><i class="fas fa-graduation-cap"></i>KASETSART UNIVERSITY ,BANGKHEN MAJORING OF COMPUTER SCIENCE</h6>
                <p class="indeed5">In my university life I had the opportunity to learn and study the Java and Python programming language . I Have a chance to practice at GT Technologies at last year. It makes me want to be a web developer.  |  2013-2017</p>


                <h3 class="head-text">Work Experience</h3>
                <div class="dropdown-divider"></div>
                <h6 class="bold"><i class="fas fa-briefcase"></i>TRAINEE WEB DEVELOPER,GT TECHNOLOGIES.CO.,LTD</h6>
                <h6>09/2017 - 04/2018 (10 month)</h6>
                <p class="indeed5">
                  I Have a chance to practice at GT Technologies . I have had the opportunity to write a managed frontend and Backend website on noodle shop website. It makes me want to be a web developer this project is uses Java , Javascript , css , html , Strust Freamework , MySQL , XML
          </p>

                <br />
                <h6 class="bold"><i class="fas fa-briefcase"></i>ASSOCIATED JAVA DEVELOPER  AWARE TECHNOLOGY</h6>
                <h6>05/2018 - 12/2018 (7 month)</h6>
                <p class="indeed5">
                  I had the opportunity to join the sand cronus team , they are a large software development team .Who behind the application and website that used in AIS Company. My job is to create a web application by MEAN Stack like CRONUS Web Management. This web application is responsible for system management within cronus team.</p>
              
                  <br />
                <h6 class="bold"><i class="fas fa-briefcase"></i>Web developer AT OOCA</h6>
                <h6>02/2018 - Now</h6>
                <p class="indeed5">
                  I had the opportunity to join team at Ooca Company , they are a small software development team . But has more Challenges for new framework </p>
              
              </div>
            </div>


            {/* end card */}
          </div>


        </div>
      </div>
    );
  }
}

export default App;
