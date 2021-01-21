const prefix = 'fas fa-';
const type = 'icon';
const arrayOfObjects = [
  {
    name: 'cat',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'crow',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'dog',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'dove',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'dragon',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'horse',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'hippo',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'fish',
    prefix,
    type,
    family: 'animal',
  },
  {
    name: 'carrot',
    prefix,
    type,
    family: 'food',
  },
  {
    name: 'apple-alt',
    prefix,
    type,
    family: 'food',
  },
  {
    name: 'lemon',
    prefix,
    type,
    family: 'food',
  },
  {
    name: 'pepper-hot',
    prefix,
    type,
    family: 'food',
  },
  {
    name: 'user-astronaut',
    prefix,
    type,
    family: 'person',
  },
  {
    name: 'user-graduate',
    prefix,
    type,
    family: 'person',
  },
  {
    name: 'user-ninja',
    prefix,
    type,
    family: 'person',
  },
  {
    name: 'user-secret',
    prefix,
    type,
    family: 'person',
  },
];

const iconContainer = document.getElementById('container');

arrayOfObjects.forEach((item) => {
  iconContainer.innerHTML += `
  <div class="box-icon">
    <i class="${item.prefix}${item.name} style="color: black"></i>
    <div>${item.name.toUpperCase()}</div>
  </div>
  `
});
