DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS students; 

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    city varchar(255),
    company varchar(255),
    email varchar(255),
    pic text,
    skill varchar(255)
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    score integer DEFAULT 0,
    student_id integer REFERENCES students(id) ON DELETE CASCADE
);

--SELECT * FROM grades WHERE student_id = $1;
CREATE INDEX grades_student_id ON grades(student_id);