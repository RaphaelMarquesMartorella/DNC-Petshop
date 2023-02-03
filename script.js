
let newData = {

'nome':document.getElementById('nome').value,
'raca': document.getElementById('raca').value,
'nomeDono': document.getElementById('dono').value,
'telefone': document.getElementById('tel').value,
'id': 1, 
'remove': 'remover'   
}

dados = [newData]
var td = document.querySelector('td');
botao = document.getElementById('botao')


function registrar(){
    botao.addEventListener('click' , ()=>{
        for(let i=0 ; i < dados.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell() 
            let td_nome = tr.insertCell() 
            let td_raca = tr.insertCell() 
            let td_nomeDono = tr.insertCell() 
            let td_telefone = tr.insertCell() 
            let td_remove = tr.insertCell()
            

            td_id.innerText = dados[i].id
            td_nome.innerText = dados[i].nome
            td_raca.innerText = dados[i].raca
            td_nomeDono.innerText = dados[i].nomeDono
            td_telefone.innerText = dados[i].telefone 
            td_remove.innerText = dados[i].remove


        }}
    )
}


