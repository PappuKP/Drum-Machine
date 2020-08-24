function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

const audios = {
  Q: {
    keypad: "Q",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    displayText: "Heater 1" },

  W: {
    keypad: "W",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    displayText: "Heater 2" },

  E: {
    keypad: "E",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    displayText: "Heater 3" },

  A: {
    keypad: "A",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    displayText: "Heater 4" },

  S: {
    keypad: "S",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    displayText: "Clap" },

  D: {
    keypad: "D",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    displayText: "Open HH" },

  Z: {
    keypad: "Z",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    displayText: "Kick n' Hat" },

  X: {
    keypad: "X",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    displayText: "Kick" },

  C: {
    keypad: "C",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    displayText: "Closed HH" } };



const DrumPad = props => {
  const padId = props.keypad.displayText.replace(/\s/g, "-");
  return (
    React.createElement("div", { onClick: props.onClick, id: padId, className: "drum-pad" },
    React.createElement("audio", { src: props.keypad.audio, id: props.keypad.keypad, className: "clip" }),
    props.keypad.keypad));


};

const PadBank = props => {
  return React.createElement("div", { id: "container-bank" }, props.children);
};

const InterfaceBank = props => {
  return React.createElement("div", { id: "container-interface" }, props.children);
};

const Display = props => {
  return React.createElement("h1", { id: "display" }, props.display);
};

class DrumMachine extends React.Component {
  constructor() {
    super();_defineProperty(this, "handleKeyPress",











    event => {
      const keypress = event.key.toUpperCase();
      const elementPressed = document.getElementById(keypress).parentElement;
      elementPressed.click();
    });_defineProperty(this, "handleClick",
    event => {
      const element = event.target;
      const audio = element.querySelector("audio");
      const display = audios[audio.id].displayText;
      element.classList.toggle("drum-pad-active");
      setTimeout(() => element.classList.toggle("drum-pad-active"), 100);
      this.handleDisplay(display);
      this.handlePlay(audio);
    });_defineProperty(this, "handleDisplay",
    display => {
      this.setState({
        display: display });

    });_defineProperty(this, "handlePlay",
    audio => {
      audio.currentTime = 0;
      audio.volume = this.state.volume;
      audio.play();
    });this.state = { display: "", volume: 1 };}componentDidMount() {document.addEventListener("keydown", this.handleKeyPress);}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyPress);}
  render() {
    const drumPads = Object.values(audios).map((audio) =>
    React.createElement(DrumPad, { keypad: audio, key: audio.keypad, onClick: this.handleClick }));

    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement(PadBank, null, drumPads),
      React.createElement(InterfaceBank, null,
      React.createElement(Display, { display: this.state.display }))));



  }}


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("root"));