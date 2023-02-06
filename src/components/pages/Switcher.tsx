import React, {useState} from 'react';

export const Switcher = () => {
    const [button, setButton] = useState<boolean | undefined>(undefined)
    const onHandler = () => {
      setButton(true)
    }
    
    const offHandler = () => {
      setButton(false)
    }
    
  const style = {
    default: {
      backgroundColor: 'grey'
    },
    container: {
      margin: '20px',
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      margin: '10px',
      width: '25px',
      height: '25px',
      borderRadius: '50%',
    },
   
    off: {
      backgroundColor: 'red'
    },
    on: {
      backgroundColor: 'green'
    }
  }
    
    return (
        <div style={style.container}>
          <button style={button ? style.on: style.default} onClick={onHandler}>On</button>
          <button style={button ? style.default : style.off}  onClick={offHandler}>Off</button>
          <button style={button ? {...style.button,...style.on}: {...style.button, ...style.off}}></button>
        </div>
    );
};

