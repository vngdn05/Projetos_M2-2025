Nessa aula eu aprendi que para que serve o inner join, que seria para criar uma intersecção entre duas tabelas criando uma outra tabela com essas informações que foram interseccionadas, aprendi que o left/right join intersecta duas tabelas criando outra, se for o right a terceira tabela vai ter informações tabela da direita e a intersecção e se for o left vai ser com as informações da tabela da esquerda e a intersecção, e por último eu aprendi que o full join relaciona duas tabelas por completo e de novo criando outra


AULA 15/05/2025

-- O endpoint seria o computador da pessoa que pode fazer uma requisição

-- O controller processa a requisição criada pelo endpoint e utiliza do model para manipular dados e entregar uma resposta ao endpoint

-- O models é aonde vai ser absorvido informações do banco de dados e através do CRUD ele manipula o banco de dados 


AULA 20/05/2025

-- 1ª: O model é aonde fica conectado com o banco de dados e aonde fica armazenada a ação que vai ser utilizada com os dados no banco de dados. O controller vai pegar as ações que o model armazena e vai coloca-las em ação e vai enviar para o view. O view é aonde o novo dado, modificado pela ação sugerida, vai ser exibido no site

-- 2ª: No endpoint o user vai enviar uma ação para o servidor (clicando em um botão, por exemplo), a ação do usuario vai enviar um arquivo JSON que envia a ação que vai ser imposta sobre um dado do banco de dados e envia para o model

-- 3ª: O HTML é importânte porque é uma maneira de estruturar uma pagina web e nessa pagina vão ter métodos de fazer alterações no banco de dados, então ele se liga ao back-end criando maneiras de mudar informações