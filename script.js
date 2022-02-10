let activeClass = "underlineAbout";

let object = {
    underlineAbout: "active1",
    underlineProjects: "active3",
    underlineContact: "active2",
    underlineLastly: "active4",
}

function about() {
    let underline = document.getElementById("underlineAbout")
    underline.classList.add("active1");
    activeClass = "underlineAbout";
    scroll("about")
    removeAllOtherActives();
}
function contact() {
    let underline = document.getElementById("underlineContact")
    underline.classList.add("active2");
    activeClass = "underlineContact";
    scroll("contact")
    removeAllOtherActives();
}
function projects() {
    let underline = document.getElementById("underlineProjects")
    underline.classList.add("active3");
    activeClass = "underlineProjects";
    scroll("projects")
    removeAllOtherActives();
}
function lastly() {
    let underline = document.getElementById("underlineLastly")
    underline.classList.add("active4");
    activeClass = "underlineLastly";
    scroll("lastly")
    removeAllOtherActives();
}

function removeAllOtherActives() {
    let otherUnderlines = document.getElementsByClassName("underline");
    for (let element of otherUnderlines) {
        if (element.id != activeClass) {
            element.classList.remove(object[element.id]);
        }
    }
}

function scroll(e){
    let yOffset = undefined;
    if (e == "projects"){
        yOffset = -100; 
        console.log("Executed")
    }
    else{
        yOffset = -200;
        console.log(yOffset)
    }
    
    const element = document.getElementById(e);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
}
