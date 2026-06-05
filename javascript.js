const paginas = document.querySelectorAll('.pagina'); 
let paginaAtual = 0; function mostrarPagina(indice) { 
    
    paginas.forEach(pagina => { 
        
        pagina.classList.remove('ativa'); 
    
    });
    
    paginas[indice].classList.add('ativa'); 

} 

function proximaPagina() { 
    
    if (paginaAtual < paginas.length - 1) {

         paginaAtual++; mostrarPagina(paginaAtual); 

        } 

} 

function paginaAnterior() {
    
    if (paginaAtual > 0) {
        
        paginaAtual--; mostrarPagina(paginaAtual); 
    
    } 

}