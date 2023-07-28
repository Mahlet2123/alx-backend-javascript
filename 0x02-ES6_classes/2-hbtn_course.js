/**
 * Represents a class named HolbertonCourse
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (typeof value !== 'object') {
      throw new TypeError('Students must be an array of strings');
    }
    
    if (value.some((item) => typeof item !== 'string')) {
      throw new Error('Students must be an array of strings');
    }
    this._students = value;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
