import { Form } from 'antd'


function createForm (targetComponent) {
  return Form.create()(targetComponent)
}

export default createForm
