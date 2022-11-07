class SearchBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    // set clickEvent(event) {
    //   this._clickEvent = event;
    //   this.render();
    // }
   
    // get value() {
    //     return this.shadowDOM.querySelector('#searchElement').value;
    // }
   
    render() {
        this.shadowDOM.innerHTML = `
        <style>
          .searchContainer {
            float: right;
          }

          input[type=text] {
            padding: 6px;
            margin-top: 8px;
            font-size: 17px;
            border: none;
          }
          
          .searchContainer button {
            float: right;
            padding: 6px 10px;
            margin-top: 8px;
            margin-right: 16px;
            background: #ddd;
            font-size: 17px;
            border: none;
            cursor: pointer;
          }
          
          .searchContainer button:hover {
            background: #ccc;
          }

          .searchButton{
            border-radius: 5px;
            background-color: green;
            color: white;
            padding: 10px;
            border: none;
          }

          @media screen and (max-width: 600px) {
            .searchContainer {
              float: none;
            }
            a, input[type=text], .searchContainer button {
              float: none;
              display: block;
              text-align: left;
              width: 100%;
              margin: 0;
              padding: 14px;
            }
            input[type=text] {
              border: 1px solid #ccc;  
            }
          }
        </style>

        <div class="searchContainer">
          <form action="/action_page.php">
            <input type="text" placeholder="Find Name of Movie" name="search">
            <button class="searchButton" type="submit">Search</button>
          </form>
        </div>
      `;
   
      //this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
   
  customElements.define('search-bar', SearchBar);