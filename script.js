function listaUsuarios(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then((response)=> {
        console.log(response)
        return response.json();
    }).then((data) => {
        console.log(data)/*Testa no console no inspecionar*/
        let lista =  document.getElementById('lista');
        data.map((item) => {
            lista.innerHTML += `<li>${item.name}</Li>`
        })
    }).catch((error)=> error) 
}
listaUsuarios();