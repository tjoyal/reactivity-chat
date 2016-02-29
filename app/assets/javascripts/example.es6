class Example {
  constructor() {
    this.reactivity = new Reactivity( () => this.setup() );
  }

  setup () {
    var base = this;

    // Registration
    var collection = this.reactivity.getCollection('message');

    // Callback
    collection.onChange(function(data) {
      return base.update();
    });

    var changeHandle = collection.onChange(function(data) {
      return console.log("Change handle");
    });

    setTimeout( function() {
      changeHandle.stop();
    }, 5500);

    // Subscribe
    // var subscriptionHandle = collection.subscribe({ pos_x: { lt: 5 }});
    var subscriptionHandle = collection.subscribe({ });
    //setTimeout( function() {
    //  subscriptionHandle.stop();
    //}, 5000);

    // var i = 0;
    // var handles = [];
    // return (() => {
    //   var result = [];
    //   while (i < 10) {
    //     var handle = collection.subscribe({ pos_x: { gt: 25 }});
    //     handles.push(handle);
    //
    //     setTimeout( function() {
    //       handles.shift().stop();
    //       console.log("Remaining", handles.length);
    //     }, i * 500);
    //
    //     result.push(i += 1);
    //   }
    //   return result;
    // })();
  }

  update() {
    var debug = "";

    debug += "[Collections]\n";
    var keys = Object.keys(this.reactivity.collections);
    if (keys.length > 0) {
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var collection = this.reactivity.collections[key];
        debug += `  ${collection.name}:\n`;

        var objectKeys = Object.keys(collection.objects);
        debug += `    Objects: ${objectKeys.length}\n`;
        debug += `    Network: ${collection.networkOperations}\n`;

        var line = "";
        for (var k = 0; k < objectKeys.length; k++) {
          line += `${collection.objects[ objectKeys[k] ].data.id}, `
        }
        debug += `    Keys: ${line}\n`;
      }
    } else {
      debug += `  There are collections registered yet\n`;
    }
    debug += `\n`;

    $('#debug').html(debug);
  }
}
