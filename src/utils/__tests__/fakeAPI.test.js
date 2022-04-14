import fakeAPI from '../fakeAPI'

const times = [1, 2]
// test('fake API forEach', async () => {
//   let response
//   times.forEach(async (item) => {
//     response = await fakeAPI()
//   })

//   console.log(response)
// })

// test('fake API for', async () => {
//   let response
//   for (let i = 0; i < times.length; i += 1) {
//     response = await fakeAPI()
//     console.log({ response })
//   }
//   console.log(response)
// })

test('while', async () => {
  let response
  let i = 0
  while (i < times.length) {
    response = await fakeAPI()
    i += 1
    console.log({ response })
  }
  console.log(response)
})
