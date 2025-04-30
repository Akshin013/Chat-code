const messagesDiv = document.getElementById("messages-div")
const inp = document.getElementById("input")    
const  sendBtn = document.getElementById("send-btn")
let messArr = []
const peopleAddBtn = document.getElementById("people-add-btn")
const role = document.getElementById("roleChangeInp")



const sendMeess = () => {
    console.log(inp.value);
    let m = inp.value
    axios.post((ENDPOINT), {
        message: m
    })
    inp.value=""
    messagesDiv.innerHTML=""
    getMessages()
}



sendBtn.addEventListener("click", sendMeess)



const ENDPOINT = "http://localhost:3000/messages    "
console.log(ENDPOINT);

const getMessages = () => {
    axios.get(ENDPOINT).then(({data}) => {
        data.forEach(({id,message}) => {
            console.log(id +":  "+ message);
            messagesDiv.innerHTML+= `
                <div id="message">${message}</div>
            `
        });
    })
} 

getMessages()
