import Parent from './Parent'
import SetMap from './SetMap'
import UseReducerDemo from './UseReducerDemo'

function BasicComponent() {
  return (
    <fieldset>
      <legend>Basic</legend>
      <Parent />
      <UseReducerDemo />
      <SetMap />
    </fieldset>
  )
}

export default BasicComponent
