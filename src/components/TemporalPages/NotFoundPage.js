import React from 'react'
import { Button, Result } from 'antd';

const NotFoundPage = () => {
  return (
    <div className='relative top-24'>
 <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
    
  />
    </div>
  )
}

export default NotFoundPage