let username = 'Max Brown';
let names=document.cookie;

// Set a Cookie
function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        names = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Apply setCookie
setCookie('username', username, 30);
let name=document.cookie;


//console.log(document.cookie);

if (name!="username=Max Brown") {
    
    console.log(document.cookie);
}