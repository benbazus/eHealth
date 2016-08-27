'use strict';

describe("Test suite for ehealth angular-pouchDB app", function(){
    var pouchDB;
    var db;
    var retrievedItem;

    beforeEach(function(){
        window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        var $injector = angular.injector(['ng', 'app']);
        pouchDB = $injector.get('pouchDB');

        db = pouchDB('testDb');
    });
        var item = {
                    '_id': 'benjamin',
                    'lastname': 'Uboegbu'
                };

        beforeEach(function(done){
            db.put(item)
            .then(function(response){
                db.get(response.id)
                .then(function(resource){
                    retrievedItem = resource;
                    done();
                });
            });
        });

        it('validate response recieved is what was submitted', function(){
            expect(retrievedItem._id).toEqual(item._id);
            expect(retrievedItem.lastname).toEqual(item.lastname);
            console.log(retrievedItem);
        });   

        afterEach(function(){
        db.destroy();
    });
});