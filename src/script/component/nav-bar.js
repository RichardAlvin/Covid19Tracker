class NavBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-color: white;
            color: black;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            overflow: hidden;
          }
          :host a{
            float: left;
            display: block;
            color: black;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }
          :host a:hover{
            background-color: #ddd;
            color: black;
          }
          :host a.active{
            background-color: #04AA6D;
            color: white;
          }
          :host .icon{
            display:none;
          }
          h2 {
            padding: 16px;
          }

          :host .searchContainer {
            float: right;
          }

          :host input[type=text] {
            padding: 6px;
            margin-top: 8px;
            font-size: 17px;
            border: none;
          }
          
          :host .searchContainer button {
            float: right;
            padding: 6px 10px;
            margin-top: 8px;
            margin-right: 16px;
            background: #ddd;
            font-size: 17px;
            border: none;
            cursor: pointer;
          }
          
          :host .searchContainer button:hover {
            background: #ccc;
          }

          .searchButton{
            border-radius: 10px;
            background-color: green;
            color: white;
            padding: 10px;
            border: none;
          }

          @media screen and (max-width: 600px) {
            :host .searchContainer {
              float: none;
            }
            :host a, :host input[type=text], :host .searchContainer button {
              float: none;
              display: block;
              text-align: left;
              width: 100%;
              margin: 0;
              padding: 14px;
            }
            :host input[type=text] {
              border: 1px solid #ccc;  
            }
          }
        </style>
        
        <a href="/">RAP_Movie</a>
        <a href="/" class="active">Home</a>
        <a href="favorites.html">Favorite</a>

        <div class="searchContainer">
          <form action="/action_page.php">
            <input type="text" placeholder="Find Name of Movie" name="search">
            <button class="searchButton" type="submit">Search</button>
          </form>
        </div>
      `;
    }
  }
   
  customElements.define('nav-bar', NavBar);