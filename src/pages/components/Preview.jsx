import React from "react";

const previewStyle = {
    width: '100%',
    height: '50vh',
    backgroundColor: '#cccccc',
    color: 'black',
    padding: '2%',
}


const Preview = (props) => {
    return(
        <div id="preview" style={previewStyle} className="boxShadow" dangerouslySetInnerHTML={{__html: props.children}}></div>
    )
}
export default Preview