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

// Function to render the table dynamically
function renderTable() {
  const tableBody = document.querySelector('tbody');

  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });
}

// Call the renderTable function to display the table on page load
window.onload = renderTable;

