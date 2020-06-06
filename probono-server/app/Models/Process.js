'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Process extends Model {
    client () {
        return this.belongsTo('App/Models/Client')
      }
}

module.exports = Process
