const array = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ','\r/  ', '\r-  ', '\r\\  ', '\r|  '];
let timer = 100;

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(array[i]);
    if (i === array.length - 1) {
      process.stdout.write('\n');
    }
    timer += 200;
  }, timer)
  timer += 200;
}
