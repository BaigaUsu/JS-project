function printStrings(arr, num) {
  for (let i = 1; i <= num; i++) {
    arr.forEach(str => {
      console.log(`${str} ${i}`);
    });
  }
}

printStrings(["floor", "vagon"], 3);