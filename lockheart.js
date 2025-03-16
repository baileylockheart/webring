var tag = document.getElementById("lockheartlink");

var imageUrls = [ // remember to put a comma before new entries!
    "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/portfolio-btn.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/lockheartlove_button.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/pastelprince88x31-2.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/baileylockheart.gif"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/maddsBbutton.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/puppypilled-button.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/st0rm-button.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/tumblrbtn.png"
];
var imageLinks = [
    "https://baileylockheart.github.io/"
  , "https://lockheart.love/"
  , "https://pastelprince.lockheart.love/"
  , "https://bailey.lockheart.love/"
  , "https://maddsbuckleyfansite.meowandsparkle.party/"
  , "https://puppypilled.netlify.app/"
  , "https://st0rmscribbles.netlify.app/"
  , "https://baileylockheart.tumblr.com/"
];

function getImageHtmlCode() {
 var dataIndex = Math.floor(Math.random() * imageUrls.length);
 var img = '<a href=\"' + imageLinks[dataIndex] + '" target=\"_blank\"><img src="';        
 img += imageUrls[dataIndex];
 img += '\" alt=\"Lockheart\"/></a>';
 return img;
}

tag.insertAdjacentHTML('afterbegin', `
    <style>
    @font-face {
      font-family: "Comic Mono";
      src: url("https://file.garden/ZrZSgsrYfQXsO7QH/fonts/ComicMono-Bold.ttf");
    }
    #lockheartbtn{
      background-color: #804EBD;
      color: #F7EBF7;
      width: 88px;
      height:15px;
      font-family: "Comic Mono", serif;
      font-size: 14px !important;
      font-weight: 500;
      letter-spacing: -1px;
      border:0;
      border-radius: 0 !important
    }
    #lockheartlabel{
      height:15px;
    }
    #lockheartlabel a{
      text-decoration:none
    }
    #lockheartlink img{
      border-radius:0px !important
    }
    #lockheartlink button:hover{
      transition: none;
      transform: none;
    }
    </style>
    <div id="lockheartlabel">
      <a href="https://baileylockheart.github.io/webring/" title="lockheart"><button id="lockheartbtn">Lockheart&lt;3</button></a>
    </div>
`);

document.write(getImageHtmlCode());