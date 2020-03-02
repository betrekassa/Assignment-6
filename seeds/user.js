  
  exports.seed = async knex => {
  
    await knex('user').del();
    await knex('user_role').del();
    await knex('role').del();
    await knex('login').del();
   
    await knex('user_role').truncate();
    await knex('user').truncate();
    await knex('role').truncate();
    await knex('login').truncate();


    knex.raw('ALTER TABLE user AUTO_INCREMENT = 1');
    knex.raw('ALTER TABLE role AUTO_INCREMENT = 1');
    knex.raw('ALTER TABLE login AUTO_INCREMENT = 1');
  
  await knex('user').insert([
    {
      first_name: 'Alex',
      last_name: 'Andrew',
      created_by:1
    },
    {
      first_name: 'Tlex',
      last_name: 'Drew',
      created_by:1
    },
    {
      first_name: 'Wlex',
      last_name: 'Tndrew',
      created_by:1
    },
    {
      first_name: 'Lex',
      last_name: 'Anrew',
      created_by:1
    },
    {
      first_name: 'Alamz',
      last_name: 'Lee',
      created_by:1
    }
  ]);

  await knex('role').insert([
    {
      role_name: 'manager',
      discription: 'monitor day to day activity',
      created_by:1
    },
    {
      role_name: 'Application developer',
      discription: 'coding',
      created_by:1    
    },
    {
      role_name: 'Analyst',
      discription: 'Gather Requirements',
      created_by:1
    },
    {
      role_name: 'Lead Application developer',
      discription: 'Review coding',
      created_by:1
    }
  ]);
  
  await knex('user_role').insert([
    { fk_user_id: 1, fk_role_id: 4,created_by:1 },
    { fk_user_id: 2, fk_role_id: 3,created_by:1 },
    { fk_user_id: 3, fk_role_id: 2,created_by:1 },
    { fk_user_id: 4, fk_role_id: 2,created_by:1 },
    { fk_user_id: 5, fk_role_id: 1,created_by:1 }
  ]);
};
