var app = require("../index.js");
var request = require('supertest');
var should = require('should');

describe('Testing get endpoint', () => {
 describe('call hello', () => {
    it('should get helloworld', (done) => {
      request(app)
          .get('/hello')
          .expect(200)
          .end(function (err, res) {
            res.text.should.eql('Hello World!');
            done();
          });
    })
  });

    describe('call bye', () => {
        it('should get see you', (done) => {
            request(app)
                .get('/bye')
                .expect(200)
                .end(function (err, res) {
                    res.text.should.eql('See you again!');
                    done();
                });
        })
    });
});
