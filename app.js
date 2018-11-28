class App extends React.Component{
   constructor(props){
     super(props);
     const color="rgb(167, 17, 208)"
     this.state = {
       whenIsActivated : "rgb(255, 20, 147)",
       whenIsDeactivated: color,
       event : "",
       display : "play_something",
       button1 : {
         name : "Kick",
         soundUrl :  "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/22[kb]DR110KIK.wav.mp3",
         letter : 90,
         color : color,
         keyLetter: "Z",
       },
     button2 : {
        name : "Clap",
        soundUrl: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/57[kb]DR110CLP.wav.mp3",
        keyLetter: "Q",
        letter:81,
        pressed: false,
        color : color,
      },
       button3 : {
         name : "Closed_HH",
         soundUrl : "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/33[kb]DR110CHT.wav.mp3",
         letter: 88,
         pressed: false,
         color : color,
         keyLetter: "X",
       },
       button4 : {
         name : "Open_HH",
         soundUrl : "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/95[kb]DR110OHT.wav.mp3",
         letter: 67,
         pressed: false,
         color : color,
         keyLetter: "C",
       },
       button5 : {
         name : "Snare",
         soundUrl : "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/32[kb]DR110SNR.wav.mp3",
         letter: 87,
         pressed : false,
         color : color,
         keyLetter: "W",
       },
       button6 : {
         name : "Cymbal",
         soundUrl : "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/116[kb]DR110CYM.wav.mp3",
         letter: 69,
         pressed: false,
         color : color,
         keyLetter: "E",
       },
      button7 : {
        name : "Left_Tom",
        soundUrl : "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/16[kb]ETOM_H.aif.mp3",
        letter:65,
        pressed: false,
        color : color,
        keyLetter: "A",
        },
      button8 : {
        name : "Right_Tom",
        soundUrl : "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/18[kb]ETOM_M.aif.mp3",
        letter:83,
        pressed: false,
        color : color,
        keyLetter: "S",
       },
      button9 : {
        name : "Floor_Tom",
        soundUrl : "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/27[kb]ETOM_L.aif.mp3",
        letter:68,
        pressed : false,
        color : color,
        keyLetter: "D",
      } 
       
     }
 this.displayController =  this.displayController.bind(this)
 }
 displayController(e){
  this.setState({
   display : e.name,
    
  });
 }

componentDidMount(){
const playSound=(src)=>{
  const sound = new Audio;
  sound.src = src;
  return sound.play();
}
 document.addEventListener("keydown",(e)=>{ 
 for(let i in this.state){
  if(e.keyCode == this.state[i].letter){
  let newObj = this.state[i]
  newObj.color = 
    this.state.whenIsActivated;
  
   playSound(this.state[i].soundUrl)
   this.setState({
     ...this.state, newObj,
      display: newObj.name,
     
   })
  
  }
 }
 });
 document.addEventListener("mousedown",(e)=>{
 
for(let i in this.state){
if(e.target.id ==    
   this.state[i].name){
  
    playSound(this.state[i].soundUrl);
    let newObj = this.state[i]
    newObj.color = this.state.whenIsActivated;
    this.setState({
     ...this.state, newObj,
      display: newObj.name,
      })
   }
 }
 });
 document.addEventListener("mouseup",(e)=>{
for(let i in this.state){
if(e.target.id ==      
   this.state[i].name){
    let newObj = this.state[i]
    newObj.color = 
      this.state.whenIsDeactivated;
    this.setState({
     ...this.state, newObj
     
   })
   }
 }
 });
document.addEventListener("keyup",(e)=>{
 for(var i in this.state){ 
  if(e.keyCode == this.state[i].letter){
   const newObj = this.state[i]
   newObj.color = this.state.whenIsDeactivated;
   this.setState({
    ...this.state,
    
      newObj
     }) 
  }
}
});
}
render(){
 return(
  <div id="drum-machine">
   <Display 
    display={this.state.display}/>
    {
     [
      this.state.button1,
      this.state.button2,
      this.state.button3,
      this.state.button4,
      this.state.button5,
      this.state.button6,
      this.state.button7,
      this.state.button8,
      this.state.button9
      ].map((btn, index)=>{
        return(
          <Button id={btn.name} 
           imgSrc={btn.img}
           key={index}
           name={btn.keyLetter}
           src={btn.soundUrl}
           display={this.displayController}
           letterCode = {btn.letter}
           color={btn.color}
           />
       )})
    }
    
 </div>
      
    );
  }
}
const Button =props=>{
   const style = {
     backgroundColor : props.color,
   }
   
return(
  <button  
    id={props.id } 
    style={style}
    className="drum-pad">
    {props.name} 
  </button>
      
    );
 }
 const Display=props=>(
    <div id="display" className="disp">
     {props.display}
   </div>
 );
 ReactDOM.render(<App/>,
               document.getElementById("App"))
