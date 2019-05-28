import React from 'react';
import axios from 'axios'


class RecordingAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      audios: [],
      blob: ''
    };
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    // show it to user
  
    // init recording
    this.mediaRecorder = new MediaRecorder(stream);
    // init data storage for video chunks
    this.chunks = [];
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
  }

  startRecording(e) {
    e.preventDefault();
    // wipe old data chunks
    this.chunks = [];
    // start recorder with 10ms buffer
    this.mediaRecorder.start(10);
    // say that we're recording
    this.setState({recording: true});
  }

  stopRecording(e) {
    e.preventDefault();
    // stop the recorder
    this.mediaRecorder.stop();
    // say that we're not recording
    this.setState({recording: false});
    // save the video to memory
    this.saveAudio();
  }

  saveAudio() {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, {type: 'audio/ogg; code=opus'});
    // generate video url from blob[]

    this.setState({blob: blob.size});
    console.log(blob)
    
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const note = reader.result
      this.setState({audios: note});
    } 
   
    
    
    
  }

  //deleteAudio(audioURL) {
    // filter out current videoURL from the list of saved videos
 //   const audios = this.state.audios.filter(a => a !== audioURL);
   // this.setState({audios});
  //}

  render() {
    const {recording, audios} = this.state;

    return (
      <div className="camera">
      {JSON.stringify(this.state.blob)}
        <audio
        

          style={{width: 400}}
          ref={a => {
            this.audio = a;
          }}>
         <p>Audio stream not available. </p>
        </audio>
        <div>
          {!recording && <button onClick={e => this.startRecording(e)}>Record</button>}
          {recording && <button onClick={e => this.stopRecording(e)}>Stop</button>}
        </div>
        <div>
          <h3>Recorded audios:</h3>
         
            <div >
              <audio controls style={{width: 200}} src={this.state.audios}   />
              
            </div>
        
        </div>
      </div>
    );
  }
}
export default RecordingAPI