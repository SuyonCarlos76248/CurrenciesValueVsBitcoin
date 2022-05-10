/*variables*/
let id = 1;
let currency;
 
let button;

function addCurrency(){
    let inputName = document.getElementById('inputName');
	let inputValue = document.getElementById('inputValue');
	// Falta validar que inputValue no sea "" y que sea un nro != 0
    if (inputName.value !== ''){
        //Creo los elementos dinamicamente con el metodo createElement
        task = document.createElement('div');
         
        button = document.createElement('input');
        let list = document.getElementById('list');
        //Agrego atributos al elemento creado
        let name = inputName.value;
		let value = inputValue.value;
        task.innerText = `${id} ${name} ${value}`;
        task.setAttribute('id', id );//+ inputName.value);
        task.setAttribute('class', 'taskUnselected');
        //Agrego metodos para el comportamiento
        task.setAttribute('onmouseover', 'onMouseOver(this);');
        task.setAttribute('onmouseout', 'onMouseOut(this);');
        //Agrego el elemento creado a la lista
        list.appendChild(task);         
        button.setAttribute('value', "Delete");
        button.type = 'button';
        button.setAttribute('class', 'control buttonDelete');
        button.setAttribute('onclick', 'onClick(this);');
        task.appendChild(button);
        id += 1;
    }
    else {
        alert('Para agregar una moneda debe ingresar su nombre y su valor en relacion al Bitcoin.');
    }
}
function readCurrencies()
{
	let modelo = //
	for (var i =0; i< modelo.length;i++)
	{
		task = document.createElement('div');     
        button = document.createElement('input');
        let list = document.getElementById('list');
        //Agrego atributos al elemento creado
        let name = modelo[i].value;
		let value = inputValue.value;
        task.innerText = `${id} ${name} ${value}`;
        task.setAttribute('id', id );//+ inputName.value);
        task.setAttribute('class', 'taskUnselected');
        //Agrego metodos para el comportamiento
        task.setAttribute('onmouseover', 'onMouseOver(this);');
        task.setAttribute('onmouseout', 'onMouseOut(this);');
        //Agrego el elemento creado a la lista
        list.appendChild(task);         
        button.setAttribute('value', "Delete");
        button.type = 'button';
        button.setAttribute('class', 'control buttonDelete');
        button.setAttribute('onclick', 'onClick(this);');
        task.appendChild(button);
        id += 1;       
		
}

/*Eventos*/

/*control es una referencia al control que llama al metodo*/
function onMouseOver(control){
    control.setAttribute('class', 'taskSelected');
}

function onMouseOut(control){
    control.setAttribute('class', 'taskUnselected');
}

function onClick(control){
    control.parentElement.remove();
}

