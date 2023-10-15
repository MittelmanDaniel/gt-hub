let courses = []

fetch('https://gt-scheduler.github.io/crawler-v2/202102.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})

fetch('https://gt-scheduler.github.io/crawler-v2/202102.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})
fetch('https://gt-scheduler.github.io/crawler-v2/202105.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})
fetch('https://gt-scheduler.github.io/crawler-v2/202108.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})

fetch('https://gt-scheduler.github.io/crawler-v2/202202.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})
fetch('https://gt-scheduler.github.io/crawler-v2/202205.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})
fetch('https://gt-scheduler.github.io/crawler-v2/202208.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})

fetch('https://gt-scheduler.github.io/crawler-v2/202302.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})
fetch('https://gt-scheduler.github.io/crawler-v2/202305.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})
fetch('https://gt-scheduler.github.io/crawler-v2/202308.json').then((response)=> response.json()).then(response=>{courses.push(response['courses'])})

const textbox = document.getElementById('className');
const button = document.getElementById('submit');

function thing(classname){
   ans = 0
   for(let i=0;i<courses.length;i++){ 
    if(classname in courses[i]){
        
           ans++
       }
   }
   return ans
}

button.addEventListener('click',()=>{
   txt = textbox.value
   document.getElementById("output").innerHTML = "This class has been offered in " + thing(txt) + " of the 10 most recent semesters.";
})