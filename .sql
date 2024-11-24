DROP TABLE IF EXISTS course_teacher;

DROP TABLE IF EXISTS course;

DROP TABLE IF EXISTS teacher;

DROP TABLE IF EXISTS semester;

CREATE TABLE
    course (
        courseId SERIAL PRIMARY KEY,
        code varchar(50) UNIQUE NOT NULL,
        name varchar(255) NOT NULL
    );

CREATE TABLE
    teacher (
        teacherId SERIAL PRIMARY KEY,
        firstName varchar(50) NOT NULL,
        lastName varchar(50) NOT NULL
    );

CREATE TABLE
    semester (
        semesterId SERIAL PRIMARY KEY,
        year int NOT NULL,
        semester int NOT NULL,
        UNIQUE (year, semester)
    );

CREATE TABLE
    roll (
        rollId SERIAL UNIQUE,
        courseId int REFERENCES course,
        teacherId int REFERENCES teacher,
        semesterId int REFERENCES semester,
        PRIMARY KEY (courseId, teacherId, semesterId)
    );

CREATE TABLE
    comment (
        commentId SERIAL PRIMARY KEY,
        create_time timestamp default NOW (),
        content text NOT NULL,
        rollId int NOT NULL REFERENCES roll (rollId)
    );