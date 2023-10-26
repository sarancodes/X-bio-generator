import React, { useState, useRef, useEffect } from 'react';
import { FaCopy } from "react-icons/fa";
import "./App.css";

function Myheader(){
  return(<nav className="bg-white" style={{'border': '1px solid #EAECF0'}}>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-20 items-center justify-between">
      <div className="flex flex-1 px-2 sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="block h-8 w-auto lg:hidden" src="./biohplogo.png" alt="Your Company"/>
          <img className="hidden h-8 w-auto lg:block" src="./biohplogo.png" alt="Your Company"/>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative ml-3">
          200+ Bios Crafted
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>);
  
}


const submitButton=document.querySelector('#submit')
const outputElement=document.querySelector('#output1')
const outputElement2=document.querySelector('#output2')
const buttonGroup = document.getElementById("button-group");
const buttonGroup4 = document.getElementById("button-group4");
var tone='professional';
var emoji='no emoji';
var hash='';
var plat='twitter';
var q;
function Submitted(){
  var t=document.getElementById('qrytxt');
  q=t.value;
  console.log(q);
}
const buttonGroups = document.querySelectorAll('.button-group');

    buttonGroups.forEach(group => {
      const buttons = group.querySelectorAll('button');
      let previouslySelectedButton = null;

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove the selected class from the previously selected button in the group
          if (previouslySelectedButton) {
            previouslySelectedButton.classList.remove('selected');
          }
          // Add the selected class to the clicked button
          button.classList.add('selected');

          // Update the previously selected button in the group
          previouslySelectedButton = button;
        });
      });
});

function CopyToClipboard() {
  var textToCopy = document.getElementById("output1").innerText;
  var tempInput = document.createElement("input");
  tempInput.setAttribute("value", textToCopy);
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(tempInput);

}

function Copyappear(){
  var hid=document.getElementById("cpy1");
  var pid=document.getElementById("output1");
  pid.classList.remove("hidden");
  hid.classList.remove("hidden");
}

function CopyToClipboard2() {
  var textToCopy = document.getElementById("output2").innerText;
  var tempInput = document.createElement("input");
  tempInput.setAttribute("value", textToCopy);
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(tempInput);

}

function Copyappear2(){
  var hid=document.getElementById("cpy2");
  var pid=document.getElementById("output2");
  pid.classList.remove("hidden");
  hid.classList.remove("hidden");
}

function Copydisappear(){
  var hid=document.getElementById("cpy1");
  hid.classList.add("hidden");
}

function Copydisappear2(){
  var hid=document.getElementById("cpy2");
  hid.classList.add("hidden");
}

function Clr(){
  //outputElement.textContent='';
  //outputElement2.textContent='';
}

/* */ 

var res1='';
var res2='';

async function GetMessage(){
  console.log('clicked')
  console.log(plat)
  document.getElementById("abio").innerHTML="";
  console.log(tone+' '+emoji+' '+hash+' '+plat);
  


       
  let v='Generate 2 '+tone+', attention-grabbing '+plat+' biography. The biography should be within 160 characters with '+emoji+' and '+hash+' hashtags. Also make it unique with a personal touch on the context :'+q;
  //console.log(v);
  const options={
      method: 'POST',
      headers:{
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: v}],
          max_tokens:100         
      })
  }
  try{
      const response=await fetch('https://api.openai.com/v1/chat/completions',options)
      const data=await response.json()
      console.log(data)
      const string = data.choices[0].message.content
      const splitted = string.split('2')
      res1=splitted[0];
      res2='2'+splitted[1];
      
      /*var i = 0;
      var j=0;
      var speed = 50; 
      
      function typeWriter() {
          if (i < res1.length) {
              outputElement.textContent += res1.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
          } 
      }
      function typeWriter2() {
          if (j < res2.length) {
              outputElement2.textContent += res2.charAt(j);
              j++;
              setTimeout(typeWriter2, speed);
          } 
      }*/
      document.getElementById("abio").innerHTML="👇Your Generated Bios👇";
      Copyappear();
      Copyappear2();

     
  }
  catch (error){
      console.error(error)
  }
}



function Body(){

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if(isChecked)
    {
      emoji='no emoji';
    }
    else
    {
      emoji='emoji';
    }
    
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    if(isChecked2)
    {
      hash='';
    }
    else
    {
      hash='no';
    }
    
  };
   
  const buttonGroupPressed = e => { 
  
    const isButton = e.target.nodeName === 'BUTTON';
    
    if(!isButton) {
      return
    }
     tone=e.target.id;
     console.log(emoji+' '+hash);
}

  return( <div className="container mx-auto px-4">
  <div className="grid md:grid-cols-9 md:gap-0 mt-12">
    <div className="col-start-3 col-span-5 text-center">
      <p className="md:text-4xl sm:text-4xl font-bold leading-10 tracking-tight">Craft Your Perfect Twitter and LinkedIn Bio with
        Specially trained GPT writer.</p>

      <div className="grid grid-cols-12 gap-0 md:my-8 my-4" id="button-group4">
        <div className="col-start-2 col-span-5 md:col-start-3 md:col-span-4">
          <button id="twitter"
            className="flex flex-nowrap items-center justify-center w-full rounded-l  px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-[#4CA30D] border border-[#4CA30D] leading-5"><img
              className="h-5 w-5 ml-4 mr-2" src="./twitter.svg" /><span className="leading-5" id="twitter">Twitter Profile
              Bio</span></button>
        </div>
        <div className="col-start-7 col-span-5 md:col-start-7 md:col-span-4">
          <button id="linkedin"
            className="flex flex-nowrap items-center justify-center w-full rounded-r bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm border border-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 leading-5"><img
              className="h-5 w-5 ml-4 mr-2" src="./linkedin.svg" /><span className="leading-5" id="linkedin">LinkedIn
              Headline</span></button>
        </div>
      </div>
    </div>
  </div>
  <p className="text-center mt-2 pt-5 font-semibold">
    Paste your current twitter bio or express yourself in few words
  </p>
  <div className="flex justify-center pt-3">
    <textarea id="qrytxt" className="border rounded-md w-1/2 p-2 md:p-4 pb-10 resize-none"
      placeholder="Paste or write..."></textarea>
  </div>

  <div className="grid grid-cols-12 sm:gap-4 sm:mt-4 md:my-8 my-4">
    <div className="col-start-1 col-span-10 md:col-start-4 md:col-span-4" >
      <p className="text-base font-bold text-left leading-6 text-[#344054]">Choose a tone</p>
      <div className="flex button-group bg-gray-50 rounded-md h-9 p-1" aria-label="Tabs" id="button-group">
        <button onClick={buttonGroupPressed}
          className="flex flex-wrap hover:text-white hover:bg-[#4CA30D] text-gray-700 px-2 py-3 rounded-md text-sm font-medium item-center justify-center content-center"
          id="Professional">Professional</button>
        <button onClick={buttonGroupPressed}
          className="flex flex-wrap hover:text-white hover:bg-[#4CA30D] text-gray-700 px-2 py-3 rounded-md text-sm font-medium item-center justify-center content-center"
          id="Informal">Informal</button>
        <button onClick={buttonGroupPressed}
          className="flex flex-wrap hover:text-white hover:bg-[#4CA30D] text-gray-700 px-2 py-3 rounded-md text-sm font-medium item-center justify-center content-center"
          id="Humorous">Humorous</button>
        <button onClick={buttonGroupPressed}
          className="flex flex-wrap hover:text-white hover:bg-[#4CA30D] text-gray-700 px-2 py-3 rounded-md text-sm font-medium item-center justify-center content-center"
          id="Question">Question</button>
        <button onClick={buttonGroupPressed}
          className="flex flex-wrap hover:text-white hover:bg-[#4CA30D] text-gray-700 px-2 py-3 rounded-md text-sm font-medium item-center justify-center content-center"
          id="Sarcastic">Sarcastic</button>
      </div>
    </div>
    <div className="col-start-1 col-span-5 mt-2 md:mt-0 md:col-start-4 md:col-span-3" >
      <p className="text-base font-bold text-left leading-6 text-[#344054]">Decorate Your Tweet</p>
      
      <div className="grid grid-cols-3 pt-3">
        <div className="flex col-start-1 col-span-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer"  checked={isChecked} onChange={handleCheckboxChange}/>
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">😎Emoji</span>
            </label>
        </div>
        <div className="flex flex-wrap">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={isChecked2} onChange={handleCheckboxChange2} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">#Hashtags</span>
            </label>
        </div>        
    </div>

    </div>
  </div></div>);
}


function Output(){

  const [text, setText] = useState('');
  const fullText = 'Hello, world!';
  const delay = 100;
  let currentIndex = 0;
  

    const typewriter = setInterval(() => {
      setText((prevText) => prevText + fullText[currentIndex]);
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(typewriter);
      }
    }, delay);

  return( <> <div className="grid grid-cols-12">
  <div className="col-start-2 col-span-9 md:col-start-4 md:col-span-6 md:mt-8">
    <button onClick={() =>{Submitted();GetMessage();Copydisappear();Copydisappear2();Clr();}}
      className="flex flex-nowrap items-center justify-center w-full rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-[#4CA30D]"
      id="submit"
    >
      <img className="h-5 w-5 ml-4 mr-2" src="./stars-02.svg" />
      <span className="leading-5">Create New Bio</span>
    </button>
  </div>
</div>
<div className="flex flex-col justify-center items-center">
  <p
    className="text-center mt-2 pt-10 font-semibold text-3xl pb-3"
    id="abio"
  />
  <div className="flex justify-center pt-3 w-2/4">
    <div>
      
      <p
        className="hidden border-1 box-border shadow p-2 mt-2 rounded-xl" 
        id="output1" 
      >{res1}</p>
    </div>
    <button
      className="hidden m-2 p-2 bg-gray-200 rounded-md hover:bg-gray-300 relative justify-center align-center"
      id="cpy1" 
      onClick={CopyToClipboard}
    >
      <FaCopy/>
    </button>
  </div>
  <div className="flex justify-center pt-3 pb-2 w-2/4">
    <div>
      
      <p
        className="hidden box-border shadow p-2 mt-2 rounded-xl pb-3"  
        id="output2"
      >{res2}</p>
    </div>
    <button
      className="hidden m-2 p-2 bg-gray-200 rounded-md hover:bg-gray-300 relative justify-center align-center"
      id="cpy2"
      onClick={CopyToClipboard2}
    >
      <FaCopy/>
    </button>
  </div>
</div></>
);
}


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-white my-2 shadow-sm">
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-gray-400 h-6 w-6 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-2 border-gray-600 overflow-hidden max-h-0 duration-500 transition-all ${isOpen ? 'max-h-[500px] p-3 text-gray-900' : ''}`}
      >
        <p>{content}</p>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <div className="grid grid-cols-12 my-2 pt-4 mt-10">
      <div className="col-start-2 col-span-10 text-center pt-3">
        <h1 className="md:text-4xl sm:text-4xl font-semibold text-gray-900">Frequently asked questions</h1>
        <p className="text-xl m-5 text-gray-600">Everything you need to know about the product and billing.</p>
      </div>

      <main className="col-start-1 col-span-12 bg-light-blue">
        <div className="flex justify-center items-start my-2">
          <div className="w-full sm:w-10/12 md:w-1/2 my-1">
            <ul className="flex flex-col">
              <Accordion title="Is there a free trial available?" content="Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." />
              <Accordion title="Can I change my plan later?" content="O" />
              <Accordion title="What is your cancellation policy?" content="We" />
              <Accordion title="Can other info be added to an invoice?" content="Changes e." />
              <Accordion title="How does billing work?" content="For" />
              <Accordion title="How do I change my account email?" content="Any method of payments acceptable by you. For example: We accept MasterCard, Visa, etc." />
            </ul>
          </div>
        </div>
      </main>

      <div className="flex col-start-1 col-span-12 justify-center item-center md:mb-14 md:mt-4 pb-2">
        <img className="" src="./growthstore.svg" alt="Logo" />
      </div>
    </div>
  );
};



function App() {
 
  return (
    <><Myheader /><Body /><Output/><FAQ/></>
  );
}

export default App;
