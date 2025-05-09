# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O projeto individual do módulo 2 será uma pagina que estudantes e professores de química possam se organizar da melhor maneira possível gerando uma produtividade elevada para a conclusão de projetos, trabalhos, provas e conseguir tirar duvidas acessando informações organizadas no site. Sendo assim, o meu projeto visa seguir a primeira opção Um agente de inteligencial artificial (IA) auxiliriará estudantes e profissinais com duvidas de matéria de química. 

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

![Persona](/Assets/Persona1.png)

### 2.2. User Stories (Semana 01)


US01- Como professora, queria criar materiais acadêmicos mais interessantes para meus alunos
</br>
US02- Como professora, queria ganhar mais tempo corrigindo avaliações e dar respostas mais completas para meus alunos
</br>
US03- Como profissional na área de química, queria conseguir fazer pesquisas e projetos completos
</br>

**Análise INVEST da US02**


I - Independente: Essa US pode ser utilisada de forma independente
</br>

N - Negociável: Não, pois ela precisa melhorar a qualidade de seus trabalhos
</br>

V - Valiosa: Permite que a professora ganhe mais tempo e aumente a qualidade dos seus materiais
</br>

E - Estimável: É curto, porque a IA faria esse trabalho em poucos minutos
</br>

S - Pequena: Essa US é suficientemente pequena para a sprint 
</br>

T - Testável: O usuário pode fazer login com e-mail e senha. Login falha com senha incorreta e exibe mensagem de erro
</br>

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

<div align="center">
<img src="assets/Estrutura do Banco de dados" alt="Imagem do Banco de Dados" border="0" width=100% height=100%>
</div>

´´´sql
-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de usuários com UUID como chave primária
CREATE TABLE IF NOT EXISTS user (
  userId UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  academico BOOLEAN NOT NULL DEFAULT FALSE,
  email_a VARCHAR(100) UNIQUE NOT NULL,
  senha_a VARCHAR(100) NOT NULL,
  estudante BOOLEAN NOT NULL DEFAULT FALSE,
  email_e VARCHAR(100) UNIQUE NOT NULL,
  senha_e VARCHAR(100) NOT NULL,
);

CREATE TABLE IF NOT EXISTS academico (
  academicoId PRIMARY KEY DEFAULT,
  aulasAcademico BOOLEAN NOT NULL DEFAULT FALSE,
  projetosAcademico BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (academicoId) REFERENCES user(userId) ON DELETE CASCADE,
);

CREATE TABLE IF NOT EXISTS aulas (
  aulaId PRIMARY KEY DEFAULT,
  nomeAula VARCHAR(100) NOT NULL,
  tipoAula VARCHAR(50) NOT NULL,
  aula VARCHAR(100) NOT NULL,
  FOREIGN KEY (aulaId) REFERENCES academico(aulasAcademico) ON DELETE CASCADE,
);

CREATE TABLE IF NOT EXISTS projetos (
  projetoId PRIMARY KEY DEFAULT,
  nomeProjeto VARCHAR(100) NOT NULL,
  tipoProjeto VARCHAR(50) NOT NULL,
  projeto VARCHAR(100) NOT NULL,
  FOREIGN KEY (projetoId) REFERENCES academico(projetosAcademico) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS estudante (
  estudanteId PRIMARY KEY DEFAULT,
  pesquisasEstudante BOOLEAN NOT NULL DEFAULT FALSE,
  trabalhosEstudante BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (estudanteId) REFERENCES user(estudante) ON DELETE CASCADE,
);

CREATE TABLE IF NOT EXISTS pesquisas (
  pesquisaId PRIMARY KEY DEFAULT,
  nomePesquisa VARCHAR(100) NOT NULL,
  tipoPesquisa VARCHAR(50) NOT NULL,
  pesquisa VARCHAR(100) NOT NULL,
  FOREIGN KEY (pesquisaId) REFERENCES estudante(pesquisasEstudante) ON DELETE CASCADE,
);

CREATE TABLE IF NOT EXISTS trabalhos (
  trabalhoId PRIMARY KEY DEFAULT,
  nomeTrabalho VARCHAR(100) NOT NULL,
  tipoTrabalho VARCHAR(50) NOT NULL,
  trabalho VARCHAR(100) NOT NULL,
  FOREIGN KEY (trabalhoId) REFERENCES estudante(trabalhosEstudante) ON DELETE CASCADE,
);


´´´

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
