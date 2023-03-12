const FIELDS = [
  document.querySelector('.js-datepicker'),
  document.querySelector('.js-amount'),
  document.querySelector('.js-value'),
];

const TABLE_BODY = document.querySelector('.js-tbody');

const clearFields = (fields) => {
  fields.forEach((field, index) => {
    const newField = field;
    newField.value = '';

    if (index === 0) return newField.focus();
    return field;
  });
};

const createTable = () => {
  const tr = document.createElement('tr');

  FIELDS.forEach((field) => {
    const td = document.createElement('td');

    td.textContent = field.value;
    tr.appendChild(td);
  });

  const tdSize = document.createElement('td');

  tdSize.textContent = FIELDS[1].value * FIELDS[2].value;
  tr.appendChild(tdSize);

  TABLE_BODY.appendChild(tr);

  clearFields(FIELDS);
};

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  createTable();
});
