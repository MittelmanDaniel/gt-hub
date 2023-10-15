let courses = Array(10)
let semesters = ['Fall 2020',
'Spring 2021','Summer 2021','Fall 2021',
'Spring 2022','Summer 2022','Fall 2022',
'Spring 2023','Summer 2023','Fall 2023']



fetch('https://gt-scheduler.github.io/crawler-v2/202008.json').then((response)=> 
   response.json()).then(response=>
   {
   courses[0] = (response['courses'])
   }
   )

fetch('https://gt-scheduler.github.io/crawler-v2/202102.json').then((response)=> response.json()).then(response=>
{
   courses[1] = (response['courses'])
   
})
fetch('https://gt-scheduler.github.io/crawler-v2/202105.json').then((response)=> response.json())
.then(response=>
   {
      courses[2] = (response['courses'])
      
   })


fetch('https://gt-scheduler.github.io/crawler-v2/202108.json').then((response)=> response.json())
.then(response=>
   {
      courses[3] = (response['courses'])
      
   })

fetch('https://gt-scheduler.github.io/crawler-v2/202202.json').then((response)=> response.json())
.then(response=>
   {
      courses[4] = (response['courses'])
     
   })
fetch('https://gt-scheduler.github.io/crawler-v2/202205.json').then((response)=> response.json())
.then(response=>
   {
      courses[5] = (response['courses'])
      
   })
fetch('https://gt-scheduler.github.io/crawler-v2/202208.json').then((response)=> response.json())
.then(response=>
   {
      courses[6] = (response['courses'])
      
   })

fetch('https://gt-scheduler.github.io/crawler-v2/202302.json').then((response)=> response.json())
.then(response=>
   {
      courses[7] = (response['courses'])
      
   })
fetch('https://gt-scheduler.github.io/crawler-v2/202305.json').then((response)=> response.json())
.then(response=>
   {
      courses[8] = (response['courses'])
      
   })
fetch('https://gt-scheduler.github.io/crawler-v2/202308.json').then((response)=> response.json())
.then(response=>
   {
      courses[9] = (response['courses'])
   })

const textbox = document.getElementById('className');
const button = document.getElementById('submit');
const sems = document.getElementById('list') 
function thing(classname){
   ans = 0
   sems.innerHTML = ""
   for(let i=0;i<courses.length;i++){ 
    if(classname in courses[i]){
         sems.innerHTML += "<li>"+ semesters[i] +"</li>"
         ans++
       }
   }
   return ans
}

button.addEventListener('click',()=>{
   txt = textbox.value
   document.getElementById("output").innerHTML = "This class has been offered in " + thing(txt) + " of the 10 most recent semesters.";
   thing(txt)
})