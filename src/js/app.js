import Person from './Person';
import Team from './Team';

const person1 = new Person('Лучник', 'Bowman');
const person2 = new Person('Маг', 'Magician');
const person3 = new Person('Демон', 'Daemon');

const team = new Team();

team.addAll(person1, person2, person3);

for (const item of team) {
  // eslint-disable-next-line no-console
  console.log(item);
  // break;
}
