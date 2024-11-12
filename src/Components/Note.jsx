import React from "react";
function Note(){
    return <div className="note">
        <h1 contentEditable="true" spellCheck="false">This is the Title</h1>
        <p contentEditable="true">This is the Content</p>
    </div>
}
export default Note;