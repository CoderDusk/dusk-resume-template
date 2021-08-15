import data from '../init.json'

function initData(){
    const resume = localStorage.getItem('resume')
    if(resume == null){
        localStorage.setItem('resume',JSON.stringify(data))
    }
    
}

initData()