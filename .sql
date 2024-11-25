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

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    email_verified BOOLEAN DEFAULT FALSE,
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

CREATE TABLE
    comment (
        commentId SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        content text NOT NULL,
        rollId int NOT NULL REFERENCES roll (rollId),
        userId int NOT NULL REFERENCES users
    );