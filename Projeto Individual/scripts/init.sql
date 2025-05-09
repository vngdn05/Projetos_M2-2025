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

