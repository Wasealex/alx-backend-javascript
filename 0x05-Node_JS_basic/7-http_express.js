const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 1; i < lines.length; i += 1) {
          if (lines[i]) {
            const field = lines[i].toString().split(',');
            length += 1;

            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        const count = length;
        output += `Number of students: ${count}\n`;
        for (const [key, value] of Object.entries(fields)) {
          output += `Number of students in ${key}: ${value}. `;
          output += `List: ${students[key].join(', ')}\n`;
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(`This is the list of our students\n${output}`);
  }).catch(() => {
    response.send('Cannot load the database');
  });
});
app.listen(port, () => {
});

module.exports = app;
