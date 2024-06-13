const catchTypeError = (obj, propName) => {
  try {
    return obj[propName];
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(`Ошибка: ${error.message}`);
      return null;
    } else {
      throw error;
    }
  }
};

const myObject = {
  name: "Yahor Maksimchyk",
  age: 20,
};

const name = catchTypeError(myObject, "name");
console.log(name);

const address = catchTypeError(myObject, "address");
console.log(address);

const result = catchTypeError(undefined, "name");
console.log(result);
