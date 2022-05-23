var cont = document.getElementById("container");
function pbtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Profile";
    var div = document.createElement("div");
    div.setAttribute("id","answer");
    var ques = document.createElement("h3");
    ques.textContent = "How do i get a Windows 7 ultimate product key" + "?";
    var check = document.createElement("h6");
    check.setAttribute("id","check");
    check.textContent = "No answer yet";
    var d1 = document.createElement("div");
    d1.setAttribute("id","ans_div");
    var btn = document.createElement("button");
    btn.textContent = "Answer";
    btn.setAttribute("id","ans_btn");
    d1.append(btn)
    div.append(ques,check,d1);
    var div1 = document.createElement("div2");
    div1.setAttribute("id","answer");
    var q = document.createElement("h3");
    q.textContent = "Do GPS trackers need Wi-Fi" + "?";
    var a = document.createElement("div");
    a.textContent = "No";
    var d2 = document.createElement("div");
    d2.setAttribute("id","vote")
    d2.innerHTML = '<div><button id="vote_btn"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#666" fill="none" stroke-linejoin="round"></path></svg></button><button id="vote_btn1"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" stroke-linejoin="round"></path></svg></button><button id = "vote_btn2"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg></button><button id="vote_btn2"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none"></path></svg></button></div>'
    div1.append(q,a,d2)
    cont.append(heading,div,div1);
}
function abtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Answers";
    var div1 = document.createElement("div2");
    div1.setAttribute("id","answer");
    var q = document.createElement("h3");
    q.textContent = "Do GPS trackers need Wi-Fi" + "?";
    var a = document.createElement("div");
    a.textContent = "No";
    var d2 = document.createElement("div");
    d2.setAttribute("id","vote")
    d2.innerHTML = '<div><button id="vote_btn"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#666" fill="none" stroke-linejoin="round"></path></svg></button><button id="vote_btn1"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" stroke-linejoin="round"></path></svg></button><button id = "vote_btn2"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg></button><button id="vote_btn2"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none"></path></svg></button></div>'
    div1.append(q,a,d2)
    cont.append(heading,div1);
}
function qbtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Questions";
    var div = document.createElement("div");
    div.setAttribute("id","answer");
    var ques = document.createElement("h3");
    ques.textContent = "How do i get a Windows 7 ultimate product key" + "?";
    var check = document.createElement("h6");
    check.setAttribute("id","check");
    check.textContent = "No answer yet";
    var d1 = document.createElement("div");
    d1.setAttribute("id","ans_div");
    var btn = document.createElement("button");
    btn.textContent = "Answer";
    btn.setAttribute("id","ans_btn");
    d1.append(btn)
    div.append(ques,check,d1);
    cont.append(heading,div);
}
function pobtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Posts";
    cont.append(heading);
}
function fsbtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Followers";
    cont.append(heading);
}
function fgbtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Following";
    cont.append(heading);
}
function ebtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Edits";
    cont.append(heading);
}
function acbtn(){
    cont.textContent = "";
    var heading = document.createElement("h4");
    heading.textContent = "Activity";
    cont.append(heading);
}
