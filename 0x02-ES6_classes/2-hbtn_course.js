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
      throw new Error ('name must be a string')
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error ('length must be a number')
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      if (value.some((item) => typeof item !== 'string')) {
        throw new Error ('students must be an array of strings')
      }
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
