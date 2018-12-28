import React from 'react'
import { withRouter } from 'next/router'
import api from 'api'
import createForm from 'utils/createForm'
import {
  Form,
  Icon,
  Input,
  Button,
  message,
} from 'antd'


const emailRules = [
  { required: true, whitespace: true, message: '请输入邮箱！' },
  { type: 'email', message: '邮箱格式不正确！' },
]

const passwordRules = [
  { required: true, whitespace: true, message: '请输入密码！' },
  { min: 8, message: '密码不得小于8位！' },
  { max: 16, message: '密码不得大于16位！' },
  { pattern: /^[\w]+$/, message: '密码只允许包含字母/数字/下划线！' },
]

@withRouter
@createForm
class Login extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault()
    const callback = (err, values) => {
      if (err) return

      api.login(values).then(resp => {
        if (resp.data.code === 'SUCCESS') {
          message.success('登录成功~', 1)
          this.props.router.push('/admin')
        }
      })
    }

    this.props.form.validateFields(callback)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <div className="login-form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: emailRules,
                validateFirst: true,
                validateTrigger: 'onBlur',
              })(
                <Input prefix={<Icon type="user" />} placeholder="Email" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: passwordRules,
                validateFirst: true,
                validateTrigger: 'onBlur',
              })(
                <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
             登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    )
  }
}

export default Login
