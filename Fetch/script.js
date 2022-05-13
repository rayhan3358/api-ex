const getUsers = async function(){
    try {
        let response = await fetch ('https://jsonplaceholder.typicode.com/users')
    if (response.ok) {
        let data = await response.json();
        console.log (data)
    }else{
        console.error('retour du serveur:', response.status)
    }
    }catch (e) {
        console.log(e)
    }
    
}
const insertposts = async function(data){
let response = await fetch ('https://jsonplaceholder.typicode.com/posts',{
    method :'',
    headers: {
      'Content-type': 'application/json'  
    },
    body: JSON.stringify(data)
 })
}

insertposts({
    name : 'Jean',
    age  : 29
})