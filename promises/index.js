const promise = new Promise((resolver, reject) => {
    resolver(3);

    setTimeout(() => {
      reject('I am an invalid');
    }, 2000);
});


promise.then(value => value + 2).then(value => value + 1).then(console.log);