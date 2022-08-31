export const QuestionGenerate = (process) => {
  let values = {}
  if (process === "toplama") {              // -*-*-*-*-*-*====> TOPLAMA
    let x = Math.ceil(Math.random() * 49),
      y = Math.ceil(Math.random() * 50),
      z = x + y,
      fakeAnswer1 = z + Math.ceil(Math.random() * 3),
      fakeAnswer2 = z - Math.ceil(Math.random() * 4)
    values = { randomOne: x, randomTwo: y, operator: "+", answer: z, fakeAnswer1: fakeAnswer1, fakeAnswer2: fakeAnswer2 }
  }
  else if (process === "cikarma") {        // -*-*-*-*-*-* ===> ÇIKARMA

    let z = 0,
      fakeAnswer1,
      fakeAnswer2,
      x = Math.ceil(Math.random() * 99),
      y = Math.ceil(Math.random() * 99)
    if (x > y) {
      z = x - y
      fakeAnswer1 = z + Math.ceil(Math.random() * 3)
      fakeAnswer2 = z - Math.ceil(Math.random() * 3)
      values = { randomOne: x, randomTwo: y, operator: "-", answer: z, fakeAnswer1: fakeAnswer1, fakeAnswer2 }
    }
    else {
      z = y - x
      fakeAnswer1 = z + Math.ceil(Math.random() * 3)
      fakeAnswer2 = z - Math.ceil(Math.random() * 3)
      values = { randomOne: y, randomTwo: x, operator: "-", answer: z, fakeAnswer1: fakeAnswer1, fakeAnswer2 }
    }
  }
  else if (process === "carpma") {         //-*-*-*-*-* ======> ÇARPMA
    let x = Math.ceil(Math.random() * 10),
      y = Math.ceil(Math.random() * 10),
      z = x * y
    values = { randomOne: x, randomTwo: y, operator: "x", answer: z }
  }
  else if (process === "bolme") {          // -*-*-*-*-*-*-* ======= BÖLME
    let x = Math.ceil(Math.random() * (100 - 10 + 1)),
      y = Math.ceil(Math.random() * 9),
      z = 0
    if (x % y === 0) {
      z = x / y
      values = { randomOne: x, randomTwo: y, operator: "/", answer: z }
    }
  }
  return values
}