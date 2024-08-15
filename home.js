homeBG()

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

function openExercise(evt, exercise) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(exercise).style.display = "block";
  evt.currentTarget.className += " active";
} 

function HikingBG() {
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/appalachian-trail-nc-tn-roan-mountain-tranquility-robert-stephens.jpg')";
  document.body.style.backgroundSize = "1700px 1000px";
}
 
function RunningBG() {
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/person-jogging-forest_797506-212.jpg')";
  document.body.style.backgroundSize = "1700px 1000px";
}

function PushupBG(){
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/58501b0cf5e23149e5589e12/1585601917653-J791ZN5ZWSK565NIZSS1/1_WZmDgcJO40Va5mVgdfbz7g%402x.jpeg')";
  document.body.style.backgroundSize = "1700px 1000px";
}

function PlankBG(){
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('https://media.phillyvoice.com/media/images/051312_Plank_Core_Workouts.2e16d0ba.fill-735x490.jpg')";
  document.body.style.backgroundSize = "1700px 1000px";
}

function StretchBG(){
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('https://qph.cf2.quoracdn.net/main-qimg-18b8db19279c6609f50f680381da90dd-pjlq')";
  document.body.style.backgroundSize = "1700px 1000px";
}

function homeBG(){
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/06/06/54/92/360_F_606549277_BMzgu4QoNfqHDkmUgngJrFHuxZXvkS7d.jpg')";
  document.body.style.backgroundSize = "1700px 1000px";
}

let answers = {};
let places = ["Meadow Path; Rocky Mountain National Park, Colorado", "Alpe Di Siusi; Dolomitti, Italy", "Alpine Plateu Trek; San Juan Mountains, Colorado", "Pine Grove Loop; Acadia National Park, Maine", "Forest Floor Trail; Shenandoah National Park, Virginia", "Woodland Walk; Redwood National and State Parks, California", "Desert Sands Path; Joshua Tree National Park, California", "Oasis Route; Anza-Borrego Desert State Park, California", "Desert Expedition; Death Valley National Park, California", "Hill Slope Trail; Great Smoky Mountains National Park, Tennessee/North Carolina", "Rolling Hills Path; Appalachian Trail, various locations", "Mountain Traverse; Olympic National Park, Washington", "Streamside Walk; Yosemite National Park, California", "Gradual Grove Trail; Cuyahoga Valley National Park, Ohio", "Forest Ascent; Great Smoky Mountains National Park, Tennessee/North Carolina", "Desert Dune Path; White Sands National Park, New Mexico", "Rolling Desert Trail; Saguaro National Park, Arizona", "Desert Highlands Trek; Big Bend National Park, Texas", "Seceda; Dolomitti, Italy", "Ridge Climb; Zion National Park, Utah", "Peak Conquest; Mount Rainier National Park, Washington", "Forest Ridge Trail; Hiking in the Adirondacks, New York", "Mountain Forest Path; White Mountains, New Hampshire", "Woodland Summit; Great Smoky Mountains National Park, Tennessee/North Carolina", "Canyon Climb; Grand Canyon National Park, Arizona", "Mesa Trail; Canyonlands National Park, Utah", "The Subway; Zion National Park, Utah"]
let index = 0

function selectAnswer(question, answer) {
    answers[question] = answer;
    console.log(`Answered ${question}: ${answer}`);
  if(question === "q1"){                 document.getElementById('flat').removeAttribute('disabled');
    document.getElementById('gradual').removeAttribute('disabled');
    document.getElementById('steep').removeAttribute('disabled');
    if(answer === "A"){
      document.getElementById('flat').setAttribute('disabled', 'true');
    }
    if(answer === "B"){
      document.getElementById('gradual').setAttribute('disabled', 'true');
    }
    if(answer === "C"){
      document.getElementById('steep').setAttribute('disabled', 'true');
    }
  }
  if(question === "q2"){                 document.getElementById('MN').removeAttribute('disabled');
    document.getElementById('FT').removeAttribute('disabled');
    document.getElementById('DT').removeAttribute('disabled');
    if(answer === "A"){
      document.getElementById('MN').setAttribute('disabled', 'true');
    }
    if(answer === "B"){
      document.getElementById('FT').setAttribute('disabled', 'true');
    }
    if(answer === "C"){
      document.getElementById('DT').setAttribute('disabled', 'true');
    }
  }
  if(question === "q3"){                 document.getElementById('1').removeAttribute('disabled');
    document.getElementById('3').removeAttribute('disabled');
    document.getElementById('5').removeAttribute('disabled');
    if(answer === "A"){
      document.getElementById('1').setAttribute('disabled', 'true');
    }
    if(answer === "B"){
      document.getElementById('3').setAttribute('disabled', 'true');
    }
    if(answer === "C"){
      document.getElementById('5').setAttribute('disabled', 'true');
    }
  }
}

function showResult() {
    let resultText = '';
    if (Object.keys(answers).length < 3) {
        resultText = 'Please answer all the questions!';
    }else{
      
      // Checking if the first answer is 'A'
      if(answers['q1'] === "A"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "A"){
            resultText = '[MAJESTIC MOUNTAIN] Hiker preferring easy, scenic mountain walks.'
            index = 0
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "B"){
            resultText = '[MAJESTIC MOUNTAIN] Hiker enjoying longer, flat mountain trails.'
            index = 1
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "C"){
            resultText = '[MAJESTIC MOUNTAIN] Hiker seeking a full-day flat mountain hike.'
            index = 2
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "A"){
            resultText = '[NATURE LOVER] Hiker enjoying easy forest trails.'
            index = 3
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "B"){
            resultText = '[NATURE LOVER] Hiker ready for a medium-length flat forest hike.'
            index = 4
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "C"){
            resultText = '[NATURE LOVER] Hiker prepared for an all-day flat forest hike.'
            index = 5
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "A"){
            resultText = '[DUNE WALKER] Hiker enjoying easy desert walks.'
            index = 6
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "B"){
            resultText = '[DUNE WALKER]  Hiker looking for a longer flat desert hike.'
            index = 7
          }
        }
      }
      if(answers['q1'] === "A"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "C"){
            resultText = '[DUNE WALKER] Hiker prepared for an all day flat desert hike.'
            index = 8
          }
        }
      }
      // Check if first is B
      if(answers['q1'] === "B"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "A"){
            resultText = '[MAGNIFIC MOUNTAIN] Hiker preferring gentle mountain inclines.'
            index = 9
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "B"){
            resultText = '[MAGNIFIC MOUNTAIN] Hiker enjoying moderate-length mountain hikes with gentle slopes.'
            index = 10
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "C"){
            resultText = '[MAGNIFIC MOUNTAIN] Hiker seeking a full day mountain hike with gradual inclines.'
            index = 11
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "A"){
            resultText = '[NATURE MASTER] Hiker enjoys easy, gently inclined forest hikes.'
            index = 12
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "B"){
            resultText = '[NATURE MASTER] Hiker ready for a longer, gentle forest hike.'
            index = 13
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "C"){
            resultText = '[NATURE MASTER] Hiker seeking an all-day forest hike with gentle inclines.'
            index = 14
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "A"){
            resultText = '[SANDCASTLE] Hiker enjoying easy, gradual desert hikes.'
            index = 15
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "B"){
            resultText = '[SANDCASTLE] Hiker ready for a medium-length gradual desert hike.'
            index = 16
          }
        }
      }
      if(answers['q1'] === "B"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "C"){
            resultText = '[SANDCASTLE] Hiker seeking a full-day desert hike with gentle slopes.'
            index = 17
          }
        }
      }
      // Check if first is C, finally
      if(answers['q1'] === "C"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "A"){
            resultText = '[GRAND SUITE OF THE MOUNTAIN] Hiker preferring short, steep mountain hikes.'
            index = 18
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "B"){
            resultText = '[GRAND SUITE OF THE MOUNTAIN] Hiker ready for a challenging, medium-length steep hike.'
            index = 19
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "A"){
          if(answers['q3'] === "C"){
            resultText = '[ULTIMATE MOUNTAIN] Hiker seeking a full-day steep mountain challenge.'
            index = 20
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "A"){
            resultText = '[BIRD CALLER] Hiker enjoying steep, short forest hikes.'
            index = 21
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "B"){
            resultText = '[BIRD CALLER] Hiker ready for a medium-length, steep forest hike.'
            index = 22
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "B"){
          if(answers['q3'] === "C"){
            resultText = '[KING OF THE CARDINALS] Hiker seeking an all-day, steep forest hike.'
            index = 23
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "A"){
            resultText = '[SANDWORM]  Hiker enjoying short, steep desert hikes.'
            index = 24
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "B"){
            resultText = '[SANDWORM]  Hiker ready for a challenging, medium-length desert hike.'
            index = 25
          }
        }
      }
      if(answers['q1'] === "C"){
        if(answers['q2'] === "C"){
          if(answers['q3'] === "C"){
            resultText
              = '[SHAI HULUD]  Hiker seeking a full-day, steep desert hike.'
            index = 26
          }
        }
      }
    }
    document.getElementById('result').innerText = resultText;
}

function redirectHiking(){
  
}
