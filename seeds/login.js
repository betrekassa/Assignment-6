exports.seed = async knex => {
  await knex('login').truncate();
  await knex('login').insert([
    { username: 'kalse', password: '456',start_date:'2020-01-01',expiration_date:"2050-05-01",created_by:1},
    { username: 'alvy', password: '123',start_date:'2020-01-01',expiration_date:"2050-04-01",created_by:1 },
    { username: 'test', password: '134',start_date:'2020-01-01',expiration_date:"2050-01-01",created_by:1 }
  ]);
};

