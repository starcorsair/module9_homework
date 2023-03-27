const parser = new DOMParser();
const XMLString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const studentsList = [];
const obj = parser.parseFromString(XMLString, "text/xml");

const students = obj.querySelectorAll("student");

students.forEach((node) => {
  let student = {
    name: `${node.querySelector("first").textContent} ${
      node.querySelector("second").textContent
    }`,
    age: node.querySelector("age").textContent,
    prof: node.querySelector("prof").textContent,
    lang: node.querySelector("name").getAttribute("lang"),
  };
  studentsList.push(student);
});
console.log(studentsList);
