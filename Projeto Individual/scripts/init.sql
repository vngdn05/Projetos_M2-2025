-- Suporte a UUID 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Usuários (para login)
CREATE TABLE IF NOT EXISTS usuarios (
  user_id SERIAL PRIMARY KEY,
  tipo VARCHAR(20) NOT NULL, -- 'academico' ou 'estudante'
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(100)
);

-- Estudantes
CREATE TABLE IF NOT EXISTS estudantes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  matricula VARCHAR(50) UNIQUE NOT NULL,
  curso VARCHAR(100),
  data_nascimento DATE
);

-- Acadêmicos (professores)
CREATE TABLE IF NOT EXISTS academicos (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

-- Disciplinas (para FK de trabalhos)
CREATE TABLE IF NOT EXISTS disciplinas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) UNIQUE NOT NULL
);

-- Trabalhos
CREATE TABLE IF NOT EXISTS trabalhos (
  id SERIAL PRIMARY KEY,
  estudante_id INTEGER NOT NULL REFERENCES estudantes(id) ON DELETE CASCADE,
  disciplina_id INTEGER NOT NULL REFERENCES disciplinas(id) ON DELETE CASCADE,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT,
  data_entrega DATE NOT NULL,
  arquivo_url VARCHAR(255)
);

-- Projetos
CREATE TABLE IF NOT EXISTS projetos (
  id SERIAL PRIMARY KEY,
  professor_id INTEGER NOT NULL REFERENCES academicos(id) ON DELETE CASCADE,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT,
  data_inicio DATE,
  data_termino DATE
);

-- Pesquisas
CREATE TABLE IF NOT EXISTS pesquisas (
  id SERIAL PRIMARY KEY,
  estudante_id INTEGER NOT NULL REFERENCES estudantes(id) ON DELETE CASCADE,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT,
  data_criacao DATE NOT NULL,
  area_conhecimento VARCHAR(100)
);

-- Aulas
CREATE TABLE IF NOT EXISTS aulas (
  id SERIAL PRIMARY KEY,
  professor_id INTEGER NOT NULL REFERENCES academicos(id) ON DELETE CASCADE,
  disciplina VARCHAR(100) NOT NULL,
  data_aula DATE NOT NULL,
  descricao TEXT
);

-- Dados de exemplo
INSERT INTO estudantes (nome, email, matricula, curso, data_nascimento)
  VALUES ('Aluno Teste', 'aluno@teste.com', 'MAT123', 'Curso Teste', '2000-01-01')
  ON CONFLICT (email) DO NOTHING;

INSERT INTO academicos (name, email)
  VALUES ('Professor Teste', 'prof@teste.com')
  ON CONFLICT (email) DO NOTHING;

INSERT INTO disciplinas (nome)
  VALUES ('Disciplina Teste')
  ON CONFLICT (nome) DO NOTHING;

INSERT INTO usuarios (tipo, email, senha)
  VALUES ('academico', 'prof@teste.com', '1234'),
         ('estudante', 'aluno@teste.com', '1234')
  ON CONFLICT (email) DO NOTHING;