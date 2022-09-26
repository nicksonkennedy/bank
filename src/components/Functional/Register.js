import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { EyeOutlined ,EyeInvisibleOutlined} from '@ant-design/icons';
import MainNav from '../MainNav';
import TopFooter from '../TopFooter';

const Register = () => {
    const [AccountNumber, setAccountNumber] = useState('')
    const [Pin, setPin] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const [viewPassword, setViewPassword] = useState(false)
const togglePass = () =>{
setViewPassword(!viewPassword)
}
  return (
<>
<MainNav />
<div className='container relative top-16'>
            <div className='max-w-lg p-5'>
                <span className='text-xl md:text-3xl font-bold'>User Information</span>
                <form className='mt-7'>
                <TextField id="standard-basic" 
                label="Account Number | User ID"
                 variant="standard" className='w-full'
                 color="warning" 
                  required
                 />

                <TextField
                 id="standard-basic"
                  label="PIN" variant="standard"
                   className='w-full mt-2' 
                   color="warning" 
                   />

                   <TextField
                 id="standard-basic"
                  label="Email Address" variant="standard"
                   className='w-full mt-2' 
                   color="warning" 
                   />

                   <TextField
                 id="standard-basic"
                  label="Mobile Phone" variant="standard"
                   className='w-full mt-2' 
                   color="warning" 
                   />

                   <div className='mt-2 relative'>
                   <TextField
                 id="standard-basic"
                  label="Create Password" 
                  variant="standard"
                   className='w-full relative' 
                   color="warning" 
                   type={viewPassword ? `text` : `password`}
                   />
                   {viewPassword ? <span className='absolute cursor-pointer' onClick={togglePass}><EyeInvisibleOutlined className='text-lg' /></span>:
                    <span className='absolute cursor-pointer' onClick={togglePass}><EyeOutlined className='text-lg' /></span>}
                   
                   </div>

                   <div className='mt-2 relative'>
                   <TextField
                 id="standard-basic"
                  label="Confirm Password" 
                  variant="standard"
                   className='w-full relative' 
                   color="warning" 
                   type={viewPassword ? `text` : `password`}
                   />
                   {viewPassword ? <span className='absolute cursor-pointer' onClick={togglePass}><EyeInvisibleOutlined className='text-lg' /></span>:
                    <span className='absolute cursor-pointer' onClick={togglePass}><EyeOutlined className='text-lg' /></span>}
                   
                   </div>

                <div className='mt-3'><buttton type='submit' className='bg-blueblue text-white font-semibold px-4 py-2 rounded-md text-lg'>Login</buttton></div>
                
                <div className='mt-3'>
                    <h5 className='text-lg font-light '>Already Have An Account? <Link to='/login' className='text-blue-700 text-semibold'>Login Now!</Link></h5>
                <h5 className='text-md font-light mt-2 md:text-lg'>Need  Assistance? <Link to=''>Contact Us</Link> </h5>
                </div>
                </form>
            </div>
    </div>
    <TopFooter />
    </>
  )
}

export default Register