function listaUsuarios(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then((response)=> {
        console.log(response)
        return response.json();
    }).then((data) => {
        
        let lista = document.getElementById('lista');
        data.map((item) => {
            console.log(item)
            lista.innerHTML += `<li>${item.name}</Li>`
        })
    })
}
listaUsuarios();