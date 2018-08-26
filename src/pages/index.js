import { Rate } from 'antd';
const App=props=>{
  return (
    <div>
      评分标准：
      <Rate allowHalf defaultValue={2.5} />
    </div>
  )
}

export default App;