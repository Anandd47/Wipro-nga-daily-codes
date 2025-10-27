document.getElementById("runDemo").addEventListener("click", () => {


  const instituteName = "Trinity Institute";
  let courseName = "Web Development";



  const coreSubjects = ["HTML", "CSS", "JavaScript"];
  const advancedSubjects = ["React", "Node.js"];
  const allSubjects = [...coreSubjects, ...advancedSubjects]; 



  const greet = (name) => `Welcome ${name} to ${courseName} at ${instituteName}!`;


    class Student {
    constructor(name, age, skills) {
      this.name = name;
      this.age = age;
      this.skills = skills;
    }



    display() {
      return `Name: ${this.name}, Age: ${this.age}, Skills: ${this.skills.join(", ")}`;
    }
  }


  const student1 = new Student("Anand", 23, ["HTML", "CSS", "JS"]);
  const student2 = new Student("Barry", 21, ["Python", "JS", "React"]);


  const grades = new Map();
  grades.set(student1.name, "A");
  grades.set(student2.name, "B+");


  const allSkills = new Set([...student1.skills, ...student2.skills]);


  let output = `
    <h3>${greet(student1.name)}</h3>
    <p><b>Course:</b> ${courseName}</p>
    <p><b>Institute:</b> ${instituteName}</p>
    <p><b>All Subjects:</b> ${allSubjects.join(", ")}</p>

    <h4>Student Details:</h4>
    <ul>
      <li>${student1.display()}</li>
      <li>${student2.display()}</li>
    </ul>

    <h4>Grades:</h4>
    <ul>
  `;

  
  grades.forEach((grade, name) => {
    output += `<li>${name}: ${grade}</li>`;
  });

  output += `
    </ul>
    <h4>Unique Skills:</h4>
    <p>${[...allSkills].join(", ")}</p>
  `;

  
  document.getElementById("output").innerHTML = output;
});
