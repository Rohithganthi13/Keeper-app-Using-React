import React from "react";
function Footer(){
    var date = new Date();
    var CurrentTime=date.getFullYear();
    return <footer>
        <p>Copyright © {CurrentTime}</p>
    </footer>
}

export default Footer;