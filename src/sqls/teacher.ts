export const allTeachers = "select * from teacher";

export const insertTeacher =
  "insert into teacher(firstname, lastname) values ($1, $2)";

export const relatedCourse = `
    select * from roll 
        natural join course 
        natural join semester 
        natural join teacher 
    where teacherId = $1`;
