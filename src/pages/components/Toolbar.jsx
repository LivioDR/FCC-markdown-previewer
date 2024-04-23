import React from "react";
import { Press_Start_2P } from "next/font/google"
const pressStart = Press_Start_2P({weight: '400', subsets: ["latin"]})

const toolbarStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey',
    color: 'black',
    height: '1.5em',
    borderRadius: '3px 3px 0px 0px',
}

const btnContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '45px',
}

const button = {
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    marginLeft: '5px',
}

const toolbarTitleStyle = {
    width: '95%',
    textAlign: 'center',
}

const Toolbar = (props) => {
    return(
        <div style={toolbarStyle} className={pressStart.className}>
            <div id="btnContainer" style={btnContainerStyle}>
                <div style={{...button, backgroundColor: '#c85959' }}></div>
                <div style={{...button, backgroundColor: 'darkgray' }}></div>
                <div style={{...button, backgroundColor: '#00da00' }}></div>
            </div>
            <div style={toolbarTitleStyle}>
                {props.children}
            </div>
        </div>
    )
}
export default Toolbar