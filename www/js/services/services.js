angular.module('homepi.services', ['ngResource'])

.factory('Socket', function($rootScope) {

    var service = {};
    var client = {};
    var client1={};

    service.connect = function(host, port, orgId,deviceType,deviceId, password) {

        console.log("Try to connect to MQTT Broker " + host );
        clientId = "d:"+orgId+":"+deviceType+":"+deviceId;


       // client =mqttws31.Client(orgId+".messaging.internetofthings.ibmcloud.com", 1883, clientId);
       client=mqtt.createClient(1883,orgId+".messaging.internetofthings.ibmcloud.com",  {
           "clientId" : clientId,
           "keepalive" : 30,
           "username" : "use-token-auth",
           "password" : password
       });
       // client=mqttws31.createClient(orgId+".messaging.internetofthings.ibmcloud.com", 1883, clientId);
       //client1 = new Paho.MQTT.Client(orgId+".messaging.internetofthings.ibmcloud.com", 1883, clientId);
        /*
        client.connect({

            userName: "use-token-auth",
            password: password
        });
       */
        client.on('connect', function () {
            console.log('Connected');
        });
        client.on('error', function(err) {
            console.log('error!', err);
            client.stream.end();
        });

        client.on('message', function (topic, message) {
            service.callback(topic,message);
        });
    }

    service.publish = function(topic, payload) {
        client.publish(topic,payload, {retain: true});
        console.log('publish-Event sent '+ payload + ' with topic: ' + topic + ' ' + client);
    }
    /*
    service.connect = function(host, port, user, password) {
        var options = {
          username: user,
          password: password
        };
        console.log("Try to connect to MQTT Broker " + host + " with user " + user);
        client = mqtt.createClient(parseInt(port),host,options);


        client.subscribe(user+"/#"); 

        client.on('error', function(err) {
            console.log('error!', err);
            client.stream.end();
        });

        client.on('message', function (topic, message) {
          service.callback(topic,message);
        });
    }

    service.publish = function(topic, payload) {
        client.publish(topic,payload, {retain: true});
        console.log('publish-Event sent '+ payload + ' with topic: ' + topic + ' ' + client);
    }
    */
    service.onMessage = function(callback) {
        service.callback = callback;
    }


    return service;
});
