function enviarValor(valor) {
    const url = window.location.href; // URL da própria página
    
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' // tipo do conteúdo é JSON
      },
      body: JSON.stringify({ valor: valor }) 
    };
    
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ocorreu um erro ao enviar a requisição.');
        }
        console.log('Requisição enviada com sucesso!');
      })
      .catch(error => {
        console.error('Erro:', error);
      });
}
