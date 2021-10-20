let saveBtn = document.getElementById("input-button")
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-button")
let deleteBtn = document.getElementById("delete-button")
let tabBtn = document.getElementById("tab-btn")
let ulEl = document.getElementById("ul-el")
let mySites = []

const sitesFromLocalStorage = JSON.parse(localStorage.getItem("mySites"))

if(sitesFromLocalStorage){
    mySites = sitesFromLocalStorage
    sites(mySites)
}

function sites(lists) {
    let listItems = ""
    for (let i = 0; i < mySites.length; i++) {
        listItems += `<li><a target = '_blank' href = ${lists[i]}> ${lists[i]} </a></li>`
    }
    ulEl.innerHTML = listItems
}
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        mySites.push(tabs[0].url)
        localStorage.setItem("mySites", JSON.stringify(mySites))
        sites(mySites)

    })

})

 deleteBtn.addEventListener("click",function(){
     localStorage.clear()
     mySites = []
     sites(mySites)
 })

 
saveBtn.addEventListener("click", function () {
    mySites.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("mySites", JSON.stringify(mySites))
    sites(mySites)

})


