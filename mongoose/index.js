import { createConnection } from "./config/db.js";
import { Student } from "./model/student.js";

createConnection();

const student1 = new Student({ name: "immad", age: 30 });
student1.save();
