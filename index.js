let myLeads = []
let deleteel
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteallBtn = document.getElementById("deleteall-btn") 

const tabBtn = document.getElementById("tab-btn")
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


const mynewleads = JSON.parse(localStorage.getItem("myLeads"))

if (mynewleads){
    myLeads = mynewleads
    render(myLeads)
}

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(Leads) {
    console.log(Leads)
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${Leads[i]}" >
                ${Leads[i]}
            </a>
        </li>`
        
    }
    ulEl.innerHTML = listItems
    // <button id="delete-btn">X</button>

}

inputBtn.addEventListener("click", ()=> {
    // myLeads.push(inputEl.value)
    if (inputEl.value == "") {
        
    }
    else {
    myLeads.push(inputEl.value)
    }
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})


deleteallBtn.addEventListener("dblclick", () => {
    myLeads = []
    render(myLeads)
    localStorage.clear()
})

inputEl.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
});

// deleteBtn.addEventListener("click", () => {
//     console.log(this.id)
    
// });
// console.log(document.body.children[4].childNodes[1].nextElementSibling.firstElementChild.textContent)
// console.log(deleteBtn)