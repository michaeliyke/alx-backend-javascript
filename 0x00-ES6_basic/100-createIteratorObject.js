export default function createIteratorObject(report) {
  const departments = Object.keys(report);
  const employeesList = departments.reduce((acc, key) => {
    const team = Object.values(report[key]);
    return acc.concat(...team);
  }, []);

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employeesList.length) {
            const key = employeesList[index];
            index += 1;
            return {
              value: key,
              done: false,
            };
          }
          return { done: true };
        },
      };
    },
  };
}
