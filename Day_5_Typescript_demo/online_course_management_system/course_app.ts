// Step 1: Create Enum for Course Categories
export enum CourseCategory {
    DEVELOPMENT = "Development",
    DESIGN = "Design",
    MARKETING = "Marketing",
    BUSINESS = "Business"
}
// Step 2: Define Interfaces for Course, Instructor, and Student    
export interface Course {
    id: number;
    title: string;
    category: CourseCategory;
    instructorId: number;
    studentIds: number[];
}
export interface Instructor {
    id: number;
    name: string;
    expertise: CourseCategory[];
}
export interface Student {
    id: number;
    name: string;
    enrolledCourses: number[];
}

