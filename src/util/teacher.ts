type Input = {
  courseid: number;
  teacherid: number;
  semesterid: number;
  rollid: number;
  code: string;
  name: string;
  year: number;
  semester: number;
  firstname: string;
  lastname: string;
}[];

type Output = {
  teacherid: number;
  firstname: string;
  lastname: string;
  list: {
    rollid: number;
    courseid: number;
    name: string;
    code: string;
    year: number;
    semester: number;
  }[];
};

export const transformData = (input: Input): Output | {} => {
  if (!input?.length) return {};

  const list = input.map(
    ({ teacherid, firstname, lastname, ...others }) => others
  );
  const { firstname, lastname, teacherid } = input[0];
  return {
    firstname,
    lastname,
    teacherid,
    list,
  };
};
