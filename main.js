// document.write("Hi");
// NOTE: Ajax Request
const request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/AgentBoo");
// request.addEventListener("load", retrieveData);
request.send();

function retrieveData(){
  let gitData = JSON.parse(request.responseText);

  // NOTE: Header: Your Name
  const head = document.querySelector('#myName');
  const myName = document.createElement('h1');
  myName.append(gitData.login)
  head.appendChild(myName);

  // NOTE: The Basics
  const basics = document.querySelector('#theBasics');
  const theBasics = document.createElement('div');
  basics.append(theBasics);
  theBasics.innerHTML =
    `
    <div>
      <span class="f-section--category"> Name: </span>
      <span class="f-section--categoryContent"> ${gitData.name} </span>
    </div>

    <div>
      <span class="f-section--category"> Github URL: </span>
      <span class="f-section--categoryContent f-section--url"> ${gitData.html_url} </span>
    </div>

    <div>
      <span class="f-section--category"> Email: </span>
      <span class="f-section--categoryContent"> ${gitData.email} </span>
    </div>

    <div>
      <span class="f-section--category"> Company: </span>
      <span class="f-section--categoryContent"> ${gitData.company} </span>
    </div>

    <div>
      <span class="f-section--category"> Website: </span>
      <span class="f-section--categoryContent f-section--url"> ${gitData.html_url} </span>
    </div>
    `;


  // NOTE: The Story
  const story = document.querySelector('#theStory');

  // the order of img vs p addition matters
  const story_img = document.createElement('img');
  story.appendChild(story_img);
  story_img.setAttribute("src", gitData.avatar_url);
  story_img.setAttribute("alt", "AgentBoo's avatar")

  const story_p = document.createElement('p');
  story.appendChild(story_p);
  story_p.append(gitData.bio);


}
