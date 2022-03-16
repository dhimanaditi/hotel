/** @format */

class MyHeader extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <style>
  
  a{
  text-decoration:none;
  }
  .outer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      align-items: center;
  }
  li {
      font-family: cursive;
      font-size: 18px;
  }
  
  .lyt {}
  
  .outer .lyt {
      width: 40%;
  }
  
  .outer .ryt {
      width: 40%;
  }
  
  .outer .center {
      width: 20%;
      text-align: center;
  }
  
  .outer ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
  }
  
  .outer ul li {
      list-style-type: none;
      padding: 10px 20px;
  }
  
  .outer .ryt ul {
      justify-content: end;
  }
  
  </style>
      <div class="outer">
          <div class="lyt">
          <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="destination.html">Destination</a></li>
          <li><a href="service.html">Services</a></li>
          </ul>
          </div>
          <div class="center">
          <img src="oberoi-home-logo.png">
          </div>
          <div class="ryt">
  
          <ul>
          <li><a href="about-us.html">About Us</a></li>
          
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="offers.html" data-toggle = 'modal'
          data-target = "#my_division">Special Offers</a></li>
          </ul>
          </div>
          </div>
  
          
  
      `;
    }
  }
  
  
  customElements.define("my-header", MyHeader);
  
  
  
  class MyFooter extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.innerHTML = `
  
          <style>
          .outer_footer {
              display: flex;
              flex-wrap: wrap;
          background-color: aliceblue;
          }
          .outer_footer .inner_div {
              width: 25%;
          }
          
          .outer_footer .inner_div ul {
              padding: 0;
          }
          
          .outer_footer .inner_div ul li {
              list-style-type: none;
          }
          a{
              text-decoration:none;
          }
          }
          </style>
  
        <div class="outer_footer">
        <div class="fst inner_div">
        <ul>
        <li><a href="about-us.html">About</a></li>
        <li><a href="about-us.html">Our Story</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        </ul>
        </div>
        
        <div class="second inner_div">
        
        <ul>
        <li>Ministry of Tourism Intiatives(India)</li>
        <li><a href="#">NIDHI</a></li>
        <li><a href="#">SATHI</a></li>
        
        </ul>
        </div>
        
        <div class="third inner_div">
        
        <ul>
        <li>More</li>
        <li><a href="#">Social Responsibility</a></li>
        <li><a href="#">Gift Cards</a></li>
        
        </ul>
        </div>
        <div class="four inner_div">
        
        <ul>
        <li>Destination</li>
        <li><a href="jaipur.html">Jaipur</a></li>
        <li><a href="gujarat.html">Gujarat</a></li>
        <li><a href="chennai.html">Chennai</a></li>
        <li><a href="assam.html">Assam</a></li>
        </ul>
        </div>
        </div>
  
  
        `;
    }
  }
  customElements.define("my-footer", MyFooter);