function countString(){
    
    let content = document.getElementById('text').value;


    if(content.length > 10){
       
        content =content.substring(0,10);
        document.getElementById('text').value = content;
    }

 document.getElementById('count').innerHTML = `(${content.length}/200)`;
}


countString();