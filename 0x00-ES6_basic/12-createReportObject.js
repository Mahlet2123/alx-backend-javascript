export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };

  return reportObj;
}
