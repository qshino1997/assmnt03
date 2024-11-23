'use strict';

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* Hide block information when load web */
addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('info').style.display = "none";
    document.getElementById('experience').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('work').style.display = "none";
    document.getElementById('hobby').style.display = "none";
    document.getElementById('language').style.display = "none";
    document.getElementById('skill').style.display = "none";
});

/* Add enter event when type mail */
document.getElementById("lemail").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        handleChange();
    }
});

/* Check mail */
function handleChange() {
    let valueOfChange = document.getElementById('lemail').value;
    if(regex.test(valueOfChange)){
        document.getElementById('confirmInfo').style.display = "none";
        document.getElementById('info').style.display = "";    
    } else {
        document.getElementById('confirmInfo').style.display = "";
        document.getElementById('info').style.display = "none";
        alert("Nhap sai vui long nhap lai");
    }
}

var exp = document.getElementById("experience");
var education = document.getElementById("education");
var work = document.getElementById("work");
var hobby = document.getElementById("hobby");
var language = document.getElementById("language");
var skill = document.getElementById("skill");

/* Event click to show */
function handleShowS(classStr) {
    if(classStr == "item1" && exp.style.display == "none"){
        exp.style.display = "";
        document.getElementById('btnExperienceS').style.display = "none";
        document.getElementById('btnExperienceH').style.display = "block";
    } else if (classStr == "item3" && education.style.display == "none") {
        education.style.display = "";
        document.getElementById('btnEducationS').style.display = "none";
        document.getElementById('btnEducationH').style.display = "block";
    } else if (classStr == "item2" && work.style.display == "none") {
        work.style.display = "";
        document.getElementById('btnWorkS').style.display = "none";
        document.getElementById('btnWorkH').style.display = "block";
    } else if (classStr == "item5" && hobby.style.display == "none") {
        hobby.style.display = "";
        document.getElementById('btnHobbyS').style.display = "none";
        document.getElementById('btnHobbyH').style.display = "block";
    } else if (classStr == "item6" && language.style.display == "none") {
        language.style.display = "";
        document.getElementById('btnLanguageS').style.display = "none";
        document.getElementById('btnLanguageH').style.display = "block";
    } else if (classStr == "item4" && skill.style.display == "none") {
        skill.style.display = "";
        document.getElementById('btnSkillS').style.display = "none";
        document.getElementById('btnSkillH').style.display = "block";
    }
    
}

/* Event click to hide */
function handleShowH(classStr) { 
    if(classStr == "item1" && exp.style.display == ""){
        exp.style.display = "none";
        document.getElementById('btnExperienceS').style.display = "";
        document.getElementById('btnExperienceH').style.display = "none";
    } else if (classStr == "item3" && education.style.display == "") {
        education.style.display = "none";
        document.getElementById('btnEducationS').style.display = "";
        document.getElementById('btnEducationH').style.display = "none";
    } else if (classStr == "item2" && work.style.display == "") {
        work.style.display = "none";
        document.getElementById('btnWorkS').style.display = "";
        document.getElementById('btnWorkH').style.display = "none";
    } else if (classStr == "item5" && hobby.style.display == "") {
        hobby.style.display = "none";
        document.getElementById('btnHobbyS').style.display = "";
        document.getElementById('btnHobbyH').style.display = "none";
    } else if (classStr == "item6" && language.style.display == "") {
        language.style.display = "none";
        document.getElementById('btnLanguageS').style.display = "";
        document.getElementById('btnLanguageH').style.display = "none";
    } else if (classStr == "item4" && skill.style.display == "") {
        skill.style.display = "none";
        document.getElementById('btnSkillS').style.display = "";
        document.getElementById('btnSkillH').style.display = "none";
    }
}