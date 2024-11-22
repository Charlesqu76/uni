DROP TABLE IF EXISTS course_teacher;

DROP TABLE IF EXISTS course;

DROP TABLE IF EXISTS teacher;

DROP TABLE IF EXISTS semester;

CREATE TABLE
    course (
        id SERIAL PRIMARY KEY,
        code varchar(50) UNIQUE,
        name varchar(255) NOT NULL
    );

CREATE TABLE
    teacher (
        id SERIAL PRIMARY KEY,
        first_name varchar(50) NOT NULL,
        last_name varchar(50) NOT NULL
    );

CREATE TABLE
    semester (
        id SERIAL PRIMARY KEY,
        year int,
        semester int,
        UNIQUE (year, semester)
    );

CREATE TABLE
    course_teacher (
        course_id int REFERENCES course,
        teacher_id int REFERENCES teacher,
        semester int REFERENCES semester,
        PRIMARY KEY (course_id, teacher_id, semester)
    );