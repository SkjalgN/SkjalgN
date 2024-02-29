function DOMContentLoaded() {
}



function changescene(content){
    document.getElementById("slider").classList.remove("active1")
    document.getElementById("slider").classList.remove("active2")
    document.getElementById("slider").classList.remove("active3")
    if(content == "content1"){
        document.getElementById("slider").classList.add("active1")
    }
    else if (content == "content2"){
        document.getElementById("slider").classList.add("active2")

    }
    else if (content == "content3"){
        document.getElementById("slider").classList.add("active3")
    }
    scenes = document.querySelectorAll('#navlist li');
    scenes.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById("nav"+content).classList.add('active');


}