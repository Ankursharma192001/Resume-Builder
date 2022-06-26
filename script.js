// alert("This is a testing website");

// i will write a function on which if user clicked then a section of work experince get added

function addNewWEField()
{
    // console.log("New Experience added");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Another Experience here");

    let weOb=document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButton');
  

    weOb.insertBefore(newNode,weAddButtonOb);

}

function AddNewAQField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Another Academic Qualification here here");

    let aqOb=document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');
  

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

// generating functions

// This function will generate the resume or cv
function generateCV()
{
    // console.log("generating cv");
    

    // This is the value which user entered 
    let nameField=document.getElementById('nameField').value;
     
    // this is place where we want to add the value
    let nameT1=document.getElementById('nameT1');
   
    // And that's how we will change the value in the name field 
    nameT1.innerHTML=nameField;
   
    // shorthand for this 


    document.getElementById('nameT2').innerHTML=nameField;


    //  set data for contacts

    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    // set value for address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    // now we will get important links data
    
    //first we will get github profile 
    
    document.getElementById('giT').innerHTML=document.getElementById('GitField').value;
    
    // then we will get linkedin profile
  
    document.getElementById('liT').innerHTML=document.getElementById('LinkedField').value;

    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    
  
    // now we will get objective

    document.getElementById('objectiveT').innerHTML=document.getElementById('ObjectiveField').value;

   
    //  now we will get work experience as there can be many we possible so we will use loop also data fetched by us will be of type array 
    
    let weArray=document.getElementsByClassName("weField");
    
    let str='';
    
    for(let e of weArray)
    {
        str=str+`<li> ${e.value}<li>`;
    }
    document.getElementById('weT').innerHTML=str;
    //  now we will get academic qualification  as there can be many we possible so we will use loop also data fetched by us will be of type array 
  
  
   let aqArray=document.getElementsByClassName("eqField");

   let strr='';

   for(let e of aqArray)
   {
      strr=strr+`<li> ${e.value}<li>`;
   }
   document.getElementById('aeT').innerHTML=strr;
   
   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display='block';
}
// now as generating is finished lets print the resume

function PrintResume()
{
    window.print();
}