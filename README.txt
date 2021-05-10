Nesse commit eu coloquei o contador de palavras e de letras digitadas a partir
da função marcadoresDigitados, segunda função ele pega o campo e 
acrescentar um on, que dentro da documentação diz que vc pode colocar 
vários eventos a um elemento eu preciso testar isso melhor, talvez no próximo
commit eu dedique inteiramente a testar isso. Em linhas gerais o campo.on 
acrescentar um evento de input que a cada digitação ele é disparado. Não
lembrava mais desse evento. E temos uma variável conteudo apontado para 
campo.val(), que claro que é o que pega o valor da textarea

no numCaracteresDigitados ele conta a quantidade de letras e no numPalavrasDigitadas
conta as palavras, as letras são contadas com o length e as palavras com a 
ajuda do split. Ambras são printadas automaticamente os valores para o html

E conforme vai digitando os valores vão sendo atualizados