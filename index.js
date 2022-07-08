function addNewProjectField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute("rows",2);

    let projOb= document.getElementById("proj");
    let projAddButtonOb= document.getElementById("projAddButton");

    projOb.insertBefore(newNode, projAddButtonOb);
}

function addNewEducationField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eduField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute("rows",2);

    let eduOb= document.getElementById("edu");
    let eduAddButtonOb= document.getElementById("eduAddButton");

    eduOb.insertBefore(newNode, eduAddButtonOb);
}

function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute("rows",2);

    let weOb= document.getElementById("we");
    let weAddButtonOb= document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function generateResume(){
    let name=document.getElementById("nameField").value;
    let contact=document.getElementById("contactField").value;
    let address=document.getElementById("addressField").value;
    let email=document.getElementById("emailField").value;
    let link=document.getElementById("linkedinField").value;
    let skills=document.getElementById("skillsField").value;
    let hobbies=document.getElementById("hobbiesField").value;
    let lang=document.getElementById("langField").value;
    document.getElementById("NameT1").innerHTML=name;
    document.getElementById("NameT2").innerHTML=name;
    document.getElementById("ContactT").innerHTML=contact;
    document.getElementById("AddressT").innerHTML=address;
    document.getElementById("EmailT").innerHTML=email;
    document.getElementById("LinkedinT").href=link;
    document.getElementById("SkillsT").innerHTML=skills;
    document.getElementById("HobbiesT").innerHTML=hobbies;
    document.getElementById("langT").innerHTML=lang;

    let edu=document.getElementsByClassName("eduField");
    let str=''

    for(let e of edu){
        let ea=e.value;
        str=str+'<li>' +ea+ '</li>';
    }

    document.getElementById("eduT").innerHTML=str;

    let proj=document.getElementsByClassName("projField");
    let str1=''

    for(let e of proj){
        let ea=e.value;
        str1=str1+'<li>' +ea+ '</li>';
    }

    document.getElementById("projT").innerHTML=str1;

    let we=document.getElementsByClassName("weField");
    let str2=''

    for(let e of we){
        let ea=e.value;
        str2=str2+'<li>' +ea+ '</li>';
    }

    document.getElementById("weT").innerHTML=str2;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}

function PrintResume(){
    window.print();
}

function GoBack(){
    document.getElementById('cv-form').style.display='block';
    document.getElementById('cv-template').style.display='none';
}
