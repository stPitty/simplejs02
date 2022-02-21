function simpleNums (qty) {
  const simple = [];
  let i = 2;
  while (simple.length < qty) {
    let isSimple = true;
    for (let num of simple) {
      if (i % num === 0) isSimple = false;
    }
    if (isSimple) simple.push(i);
    i++;
  }
  return simple;
}

nums = simpleNums(process.argv[2]);
console.log(nums)

