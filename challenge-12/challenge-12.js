(function(){/*
	envolva todo o conteúdo desse arquivo em uma IIFE.
	*/
	
	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	var person = {
		name: 'jeferson',
		lastname: 'baixo',
		age: 28
	}
	
	
	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log(Object.keys(person));
	
	/*
	Crie um array vazio chamado `books`.
	*/
	var books = [];
	
	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	
	books.push({name: 'O código da Vinci', pages: 50}, {name: 'Anjos e Demônios', pages: 100}, {name: 'O Símbolo Perdido', pages: 150});
	/*
	Mostre no console todos os livros.
	*/
	console.log('\nLista de livros:');

	for(i = 0; i < books.length; i++){
		console.log(books[i].name);
	}
	/*
	Remova o último livro, e mostre-o no console.
	*/
	var lastBook = books.pop();
		
	console.log( '\nLivro que está sendo removido: ' + lastBook); 
	/*
	Mostre no console os livros restantes.
	*/
	console.log('\nRestaram os livros: ');
	for(i = 0; i < books.length; i++){
		console.log(books[i].name);
	}
	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	console.log( '\nLivros em formato string:' );
	
	books = JSON.stringify(books);
	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(books);
	
	/*
	Converta os livros novamente para objeto.
	*/
	books = JSON.parse(books);
	console.log( '\nAgora os livros são objetos novamente:' );
	
	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	
	for(var i = 0; i < books.length; i++){
		for(var prop in books[i]){
			console.log(prop + ': ' + books[i][prop]);
		}
	}
	
	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	// ?
	console.log( '\nMeu nome é:' );
		var myName = person.name.split('');
	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	// ?
	
	console.log(myName);
	console.log( '\nMeu nome invertido é:' );
	
	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log(myName.reverse().join());
	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log(myName.sort());
})();
