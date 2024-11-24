type Input = {
  courseid: number;
  teacherid: number;
  semester: number;
  id: number;
  code: string;
  name: string;
  year: number;
  firstname: string;
  lastname: string;
}[];

type Output = {
  id: number;
  name: string;
  code: string;
  list: {
    id: number;
    teacherId: number;
    firstName: string;
    lastName: string;
    year: number;
    semester: number;
  }[];
};

export const transformData = (input: Input): Output | {} => {
  if (!input?.length) return {};
  const { courseid, name, code } = input[0];

  const list = input.map(({ courseid, name, code, ...others }) => others);

  return {
    courseid,
    name,
    code,
    list,
  };
};
