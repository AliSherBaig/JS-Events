let tasks = [
    {title: "Create an App", isCompleted: false},
    {title: "Go to Market", isCompleted: false},
];


function rendertasks() {
    document.body.querySelector(".user-input").innerHTML = "";
    const ul = document.createElement('ul');
    tasks.forEach((user, index) => {
        let li = document.createElement('li');
        li.style.marginTop = "10px"
        let closeButton = document.createElement('button');
        closeButton.innerHTML = "&times;"  
        closeButton.style.marginLeft= "10px"
        closeButton.style.padding = "3px 9px"
        li.innerHTML = tasks [index].title;
        const read = document.createElement('button'); 
        read.innerHTML = "&#9989"
        read.style.marginLeft= "10px"
        li.append(read)
        read.onclick = function () {
            if(tasks.isCompleted == false){ 
            li.style.textDecoration = "line-through"
            tasks.isCompleted = true;
            
            }else{
                li.style.textDecoration = "none"
                tasks.isCompleted = false;
               
            }
            console.log(tasks)
        }
       
        closeButton.onclick = function () {  
            tasks.splice(index, 1)
            rendertasks()
        }
        li.append(closeButton)
        ul.append(li)
    });
    document.body.querySelector(".user-input").append(ul)
}
const input = document.createElement('input');
input.style.marginRight = "10px"
const inputButton = document.createElement('button');
inputButton.innerHTML = "ADD"

input.placeholder = "Add new list item ";
input.style.padding = "10px 20px"
inputButton.style.padding = "10px 20px"
document.body.querySelector(".to-do-list").append(input)
document.body.querySelector(".to-do-list").append(inputButton)
inputButton.onclick = function () {
    if (input.value) {
        tasks.push({title: input.value, isCompleted: true })
        input.value = ""
    }
    rendertasks()
}
rendertasks()

