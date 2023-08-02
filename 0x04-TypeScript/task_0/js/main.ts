export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "Rediet";
  lastName: "Seifu";
  age: 19;
  location: "Addis Ababa";
};

const student2: Student = {
  firstName: "Daniel";
  lastName: "Seifu";
  age: 23;
  location: "Addis Ababa";
};

const studentsList = Array<Student>;
studentsList = [student1, student2];
