import React,{useState, useEffect} from "react";
import Preview from "./Preview";
import DOMPurify from 'dompurify';
import Toolbar from "./Toolbar";
// import { flushSync } from "react-dom";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '80%',
    margin: '0 auto',
}

const editorStyle = {
    margin: '0% auto 4% auto',
    width: '60%',
    backgroundColor: 'grey',
}

const textareaStyle = {
    width: '99%',
    resize: 'vertical',
    padding: '1%',
    height: '100%',
    margin: '0% .5%',
}

const Editor = () => {

    const onFirstLoadText = `# Header (H1 Size)

## Sub Header (H2 Size)
    
[Link to Google](https://www.google.com)
    
Inline \`code\`

\`\`\` python
def greet():
print("Hello, world!")
\`\`\`
    
- List item

> Blockquote

![Image](https://cdn-icons-png.flaticon.com/128/3459/3459528.png)

**Bolded text**`

    const [typedText, setTypedText] = useState(onFirstLoadText)

    const setMarkDownOnHook = () => {
        // flushSync(()=>{
            const editorField = document.getElementById('editor')
            const text = DOMPurify.sanitize(marked.parse(editorField.value))        
            setTypedText(text)
        // })
    }
    
    useEffect(()=>{
        const editorField = document.getElementById('editor')
        editorField.value = onFirstLoadText
        editorField.addEventListener('keyup',setMarkDownOnHook)
        editorField.addEventListener('keydown',setMarkDownOnHook)
        editorField.addEventListener('paste',setMarkDownOnHook)
        setMarkDownOnHook()
    },[])

    return(
        <div id="wrapper" style={containerStyle}>
            <div style={editorStyle} className="boxShadow">
            <Toolbar>
                Editor
            </Toolbar>
            <textarea name="editor" id="editor" cols="30" rows="15" style={textareaStyle}>

            </textarea>
            </div>
            <Toolbar>
                Preview
            </Toolbar>
            <Preview>
                {typedText}
            </Preview>
        </div>
    )
}
export default Editor