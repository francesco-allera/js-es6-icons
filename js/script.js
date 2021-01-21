// MILESTONE 1
const prefix = 'fas fa-';
const family = 'icon';
const arrayOfObjects = [
  {
    name: 'cat',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'crow',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'dog',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'dove',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'dragon',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'horse',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'hippo',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'fish',
    prefix,
    type: 'animal',
    family,
  },
  {
    name: 'carrot',
    prefix,
    type: 'food',
    family,
  },
  {
    name: 'apple-alt',
    prefix,
    type: 'food',
    family,
  },
  {
    name: 'lemon',
    prefix,
    type: 'food',
    family,
  },
  {
    name: 'pepper-hot',
    prefix,
    type: 'food',
    family,
  },
  {
    name: 'user-astronaut',
    prefix,
    type: 'person',
    family,
  },
  {
    name: 'user-graduate',
    prefix,
    type: 'person',
    family,
  },
  {
    name: 'user-ninja',
    prefix,
    type: 'person',
    family,
  },
  {
    name: 'user-secret',
    prefix,
    type: 'person',
    family,
  },
];

const iconContainer = document.getElementById('container');

// arrayOfObjects.forEach((item) => {
//   iconContainer.innerHTML += `
//   <div class="box-icon">
//     <i class="${item.prefix}${item.name} style="color: black"></i>
//     <div>${item.name.toUpperCase()}</div>
//   </div>
//   `
// });

// MILESTONE 2
const arrayOfColours = ['green', 'brown', 'black'];

arrayOfObjects.forEach((item) => {
  let iconColor;
  if (item.type === 'animal') {
    iconColor = arrayOfColours[1];
  }
  if (item.type === 'food') {
    iconColor = arrayOfColours[0];
  }
  if (item.type === 'person') {
    iconColor = arrayOfColours[2];
  }

  iconContainer.innerHTML += `
  <div class="box-icon">
    <i class="${item.prefix}${item.name}" style="color:${iconColor}"></i>
    <div>${item.name.toUpperCase()}</div>
  </div>
  `
});
