// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

function myTag(...args) {
  console.log('myTag', args)
  return args[1]
}

const guy = 'Harvey'
const age = 30
test('Tagged templates', () => {
  const result = myTag`hi,${guy} ${age}`
  console.log({ result })
})
