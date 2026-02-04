function toggleshare(){
    if(window.innerWidth>=640){
        document.getElementById("sm_share_box").classList.toggle("hidden")
    }
    else{
        document.getElementById("author_box").classList.toggle("hidden")
        document.getElementById("share_box").classList.toggle("hidden")
    }
}