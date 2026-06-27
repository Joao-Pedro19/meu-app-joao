function GetFatch(){
    
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())   // converte
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

export { GetFatch }