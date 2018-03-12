'use strict'

const test = require('japa')
const { ioc } = require('@adonisjs/fold')
const ServiceProvider = require('../providers/MongooseProvider')

test.group('IoC', function () {
  // Setup
  ioc.fake('Mongoose', () => require('mongoose'))

  const BaseModel = require('../src/Model/Base')

  const prov = new ServiceProvider(ioc)
  prov._registerModel()

  test('model should be instanciated property', function (assert) {
    const Model = use('MongooseModel')
    assert.exists(Model)
    assert.equal(Model, BaseModel)
  })
})
