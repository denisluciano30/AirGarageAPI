'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DisponibilidadeSchema extends Schema {
  up () {
    this.create('disponibilidades', (table) => {
      table.increments()
      table.date('data_inicial')
      table.date('data_final')
      table.float('valor_diaria')
      table.timestamps()

      table.integer('garage_id').unsigned().notNullable()
      table.foreign('garage_id').references('id').inTable('garages')
    })
  }

  down () {
    this.drop('disponibilidades')
  }
}

module.exports = DisponibilidadeSchema
