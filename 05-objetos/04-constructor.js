// {id:1, recuperarClave: function(){}}
function Usuario (){
    this.id = 1;
    this.recuperarClave = function (){
        console.log('recuperando clave');
    }
}

let user = new Usuario();

console.log(user);