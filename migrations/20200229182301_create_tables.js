exports.up = async knex => {
    await knex.schema.dropTableIfExists('login');
    await knex.schema.createTable('login', table => {
      table.increments();
      table.string('username', 100).unique().notNullable();
      table.string('password', 25).unique().notNullable();
      table.timestamp('start_date').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('expiration_date');
      table.integer('created_by').notNullable();
      table.timestamp('created_on').defaultTo(knex.fn.now()).notNullable();
    });
    await knex.schema.dropTableIfExists('user');
    await knex.schema.createTable('user', table => {
      table.increments();
      table.string('last_name', 100).notNullable();
      table.text('first_name').notNullable();
      table.integer('created_by').notNullable();
      table.timestamp('created_on').defaultTo(knex.fn.now()).notNullable();
    });

    await knex.schema.dropTableIfExists('role');
    await knex.schema.createTable('role', table => {
      table.increments();
      table.string('role_name', 100).notNullable();
      table.text('discription').notNullable();
      table.integer('created_by').notNullable();
      table.timestamp('created_on').defaultTo(knex.fn.now()).notNullable();
      });
    
   await knex.schema.dropTableIfExists('user_role');
   await knex.schema.createTable('user_role', table => {
        table.increments();
        table.string('fk_user_id', 100).notNullable();
        table.string('fk_role_id').notNullable();
        table.integer('created_by').notNullable();
        table.timestamp('created_on').defaultTo(knex.fn.now()).notNullable();
        });
      };

exports.down = async knex => {
  await knex.schema.dropTableIfExists('user');
  await knex.schema.dropTableIfExists('login');
  await knex.schema.dropTableIfExists('role');
  await knex.schema.dropTableIfExists('user_role');
  
};
 