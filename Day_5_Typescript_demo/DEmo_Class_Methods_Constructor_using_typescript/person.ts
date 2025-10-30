// person.ts - Defines Person and Student classes demonstrating OOP concepts in TypeScript.

export class Person {
    private static counter: number = 0;
    private readonly id: number;

    constructor(
        public name: string,
        public age: number,
        readonly institute: string
    ) {
        this.id = ++Person.counter;
    }

    public greet(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}. My ID is ${this.id}.`;
    }

    protected getAge(): number {
        return this.age;
    }

    public showId(): number {
        return this.id;
    }

    public static getCounter(): number {
        return Person.counter;
    }
}

export class Student extends Person {
    private skills: string[];

    constructor(name: string, age: number, institute: string, skills: string[] = []) {
        super(name, age, institute);
        this.skills = skills;
    }

    public getStudentDetails(): string {
        return `${this.greet()} I currently have ${this.skills.length} skill(s).`;
    }

    public addSkill(skill: string): void {
        this.skills.push(skill);
        console.log(`Skill "${skill}" added successfully.`);
    }

    public display(): void {
        console.log(`My age is ${this.getAge()} years and my skills are: ${this.skills.join(", ")}.`);
    }

    public override greet(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}. I have the following skills: ${this.skills.join(", ")}.`;
    }
}
