import { memo, React } from "react"

function Content({ onIncrease }) {

  console.log('re -render');
  return (
    <>
      <h2>Hello anh em</h2>
      <button onClick={onIncrease}>Increase</button>
    </>
  )
}

export default memo(Content)