CREATE TABLE alunos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  turma TEXT NOT NULL,
  curso TEXT NOT NULL,
  data_nascimento DATE
);

CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  duracao_anos INT
);

CREATE TABLE matriculas (
  id SERIAL PRIMARY KEY,
  aluno_id INT REFERENCES alunos(id) ON DELETE CASCADE,
  curso_id INT REFERENCES cursos(id) ON DELETE CASCADE,
  data_matricula DATE DEFAULT CURRENT_DATE
);

INSERT INTO alunos (nome, curso, data_nascimento)
VALUES ('Vinicius Ciardi', 'Engenharia Software', '2004-07-05'),
       ('Rodrigo', 'ADM TECH', '2003-08-15');
       ('Vinicius Rangel', 'Engenharia Software', '2004-09-25'),
       ('Mike', 'ADM TECH', '2003-03-23'),
       ('Gabriel Leon', 'Engenharia Software', '2004-07-05'),
       ('Felipe', 'Engenharia de Comp', '2003-02-18'),
       ('Matheus', 'Engenharia Software', '2004-07-05'),
       ('Rafael', 'Engenharia de Comp', '2003-08-15');
       ('Enzo', 'Ciencia da Computação', '2004-09-25'),
       ('Lucas', 'Engenharia de Comp', '2003-03-23'),

INSERT INTO cursos (nome, duracao_anos)
VALUES ('Engenharia Software', 4),
       ('ADM TECH', 4);
       ('Engenharia de Comp', 4);
       ('Sistemas de Informação', 4)

INSERT INTO matriculas (aluno_id, curso_id)
VALUES  (1, 1),
        (2, 2);
        (3, 1),
        (4, 2),
        (5, 1),
        (6, 3),
        (7, 1),
        (8, 3);
        (9, 4),
        (10, 3);

SELECT a.nome AS aluno, c.nome AS curso, m.data_matricula
FROM matriculas m
JOIN alunos a ON m.aluno_id = a.id
JOIN cursos c ON m.curso_id = c.id;