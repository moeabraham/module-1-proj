//constant variables
var userTeam='';
let team;
// let pageTeamName = document.getElementById('pageTeamName');
let $pageTeamName = $('#pageTeamName')
// state variables-data that changes
let arrFacts;


// cached element references - parts of the dom we need to touch



// event listeners - capture and respond to events i.e. user clicks on something

document.getElementById('form').addEventListener('submit',function(e){
    

  
    e.preventDefault();
    var userTeam = document.querySelector('.form-control').value.toLowerCase();
    var teamInput = toUpperCas(userTeam);

    // console.log(teamInput)
   
    
    let link = 'https://thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604'


    $.ajax(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${userTeam}`).then(function(data){
if(data.teams === null) return alert('team not found');
    team = data.teams;
  console.log(data);
    getTeam(teamInput);

    // console.log(team)
  

    console.log(team);
    // console.log(teamInput);
    
    getFacts(teamInput);
    getDescription(teamInput)
    // stadiumInfo(teamInput)
        // console.log(data)

    },function(error){
        console.log(error)
    });


});

// function stadiumInfo(teamInput){

//     let stadiumInfo = team.filter(team => team.strTeam===teamInput)
//     .map(team => {
        // return [team.strStadium,team.strStadiumLocation,team.strStadiumThumb]
//     })
//     console.log(stadiumInfo)


// }

function getDescription(teamInput){

    let teamDisc = team.filter(team => team.strTeam===teamInput)
    .map(team => {
        return [team.strDescriptionEN,team.strTeamBadge,team.strStadium,team.strStadiumLocation,team.strStadiumThumb]



    })

    // const stadThumb = teamDisc[1].toString();;
    // console.log(stadThumb);




    console.log(teamDisc)

    const neededDisc = teamDisc[0][0].toString();

    const discription = document.querySelector('.card-text');
    discription.textContent = `${neededDisc}`;
    console.log( `${discription.toString().length}`)



        const stadInfo = teamDisc[0][4].toString();
        console.log(stadInfo)
        // const stadImg = 
        // const stadImg= stadInfo
        var stadImg= document.createElement('img');
        stadImg.src = `${stadInfo}`;
        stadImg.className = 'img-fluid';
        const stadParentElement = document.querySelector('.stadInfo')
        stadParentElement.innerHTML='';

        stadParentElement.appendChild(stadImg);

    // console.log(neededDisc)
    // console.log(teamDisc[0][1])
    const imgTeam = teamDisc[0][1];
    // console.log(img)
    var img = document.createElement('img'); 
    img.src=`${imgTeam}`
    img.className = 'card-img-top'
    const parentElement = document.querySelector('.card');
    // parentElement.innerHTML = '';

    parentElement.appendChild(img);






    // const divDisc = document.getElementById('brief');
    // const disc = document.createElement('p');
    // package.className='para'
    // divDisc.appendChild(document.createTextNode(`${neededDisc}`));
    // divDisc.appendChild(disc)

    // render();
}


function getFacts(teamInput){
    // console.log(teamInput)
    // console.log(team)
    let teamFacts = team.filter(team => team.strTeam===teamInput).map(team => {
        return [team.strAlternate,team.strCountry,team.intFormedYear,team.strLeague,team.strWebsite]
    })

    // for(i=0;i<teamFacts.length;i++){
    //     console.log(teamFacts)
    // }


    // console.log(teamFacts)
    const neededFacts = teamFacts[0];
    // console.log(neededFacts)
    const div=document.getElementById('fiveFacts');
    const list = document.getElementById('factsList');
    list.innerHTML = '';


    for(i=0; i<neededFacts.length;i++){
        // render(teamFacts)
        // var arrFacts=[AKA,country,formedSince,leagueName,website]
        const li=document.createElement('li');
        li.className='factPoint';
    
        li.appendChild(document.createTextNode(` ${neededFacts[i]}`))
        // const fact = li.createTextNode(` country: ${teamFacts[0][1]}`)
        list.appendChild(li);
    
    // how to stop after Each team ?

    }



}

function getTeam(teamInput){
// console.log(team)

    // for(i=0; i < data.length ; i++){
    //     console.log(data.)
    // }
  let newTeam =  team.filter(team => team.strTeam === teamInput).map(team => {
      return team.strTeam;
  })
// console.log(newTeam[0])
let pageTeam = newTeam[0];
// console.log(newTeam)
// console.log(pageTeam)

  render(pageTeam);
  

}


// function-code that represents actions taked/carried out 
// helper function !!

function toUpperCas(str){
    return  str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(" ");
}

function render(pageTeam){
    $pageTeamName.text(pageTeam)

}

// fetch(api)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){

//     team = data.teams;
//     getTeam(teamInput);

    
// }).catch(function(error){
//     console.log(error);
// })    fetch(`link`)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){

//     team = data.teams;
//     getTeam(teamInput);

    
// }).catch(function(error){
//     console.log(error);
// })


// $('document').ready(function(){
//     var showChar = 50;
//     var ellipsesText= "...";
//     var moreText = "more";
//     var lessText = "less";

//     $('.more').each(function(){

//         var content = $(this).html();
//         if(content.length > showChar){
//             var c = content.substr(0, showChar);
//             var h = content.substr(showChar-1, content.length- showChar);
//             var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
//             $(this).html(html)
//         }
//     });
// $('.morelink').click(function(){
//     if($(this).hasClass('less')){
//         $(this).removeClass('less');
//         $(this).html(moreText);
//     } else {
//         $(this).addClass('less');
//         $(this).html(lessText);

//     }
//     $(this).parent().prev().toggle();
//     $(this).prev().toggle();
//     return false;

// })


// })

