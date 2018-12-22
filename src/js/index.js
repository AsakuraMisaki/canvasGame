let proxy = require("./required/proxy.js");

try {
    let warn = document.getElementById("warn");

    if (proxy.matchPhone()) {
        warn.style.display = 'none';
    }
    
} catch (e) {
    console.warn(e.toString());
}