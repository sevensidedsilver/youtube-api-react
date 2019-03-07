import React from 'react'
const CameraIcon = () => {
  	  const imgStyle={
      	height: '100%',
      }
	  return <img style={imgStyle} src="https://static.thenounproject.com/png/6105-200.png" />
}

const Control = () => {
  	const controlStyle = {
     	borderRadius: "4px",
      	width: "200px"
    }
 	return <button>Stop Recording</button>
}


class Lamp extends React.Component {

  		constructor(props) {
          super(props);
          this.state = {
            isRecording: true
          };
      }

	  recordToggle  = () => {
        console.log('cow')
      	// this.setState(prevState => ({
        //   check: !prevState.isRecording
        // }));
      }

      render() {

        const style = {
             width: '100px',
             height: '100px',
             backgroundColor: this.props.color,
             opacity: this.props.lit ? 1 : 0,
             borderRadius: '50px',
             transition: '.9s',
             display: this.state.isRecording ? 'flex' : 'none',
             alignItems: 'center',
             justifyContent: 'center',
             fontSize: '1.3em',

        }
        const containStyle={
         display: 'flex',
         height: '100px'
        }




     return (
       <div style={containStyle}>
             <div style={style}>Recording</div>
         	 <CameraIcon/>
			 <Control onClick={() => this.recordToggle()}/>
       </div>

       )
      }

}
export default Lamp
