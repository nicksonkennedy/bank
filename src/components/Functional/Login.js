import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert';
import MainNav from '../MainNav';
import TopFooter from '../TopFooter';

const Login = () => {
  const navigate = useNavigate()

  const [AccountNumber, setAccountNumber] = useState('')
  const [Loading, setLoading] = useState(false)
  const [Error, setError] = useState(false)

  const submitHandler = async(e) =>{
    e.preventDefault()
    setLoading(true)
   setTimeout(() => {
    if(AccountNumber === '0000011111'){
      navigate('/dashboard')
    }else{
      setLoading(false)
      setError('Account Number Or Pin Is Incorrect, Try Again!!!')
    }
   }, 3000);
    
  }
  return (
   <>
   <MainNav />
    <div className='container relative top-16'>
            <div className='max-w-lg p-5'>
            {Error && <div className='mb-2'><Alert severity="error">{Error}</Alert></div>}
                <span className='text-3xl font-bold'>Login</span>
                <form className='mt-7' onSubmit={submitHandler}>
                <TextField 
                id="standard-basic" 
                label="Account Number(User ID)" 
                variant="standard" 
                className='w-full' 
                value={AccountNumber}
                onChange={e=>setAccountNumber(e.target.value)}
                />

                <div className='mt-3 flex space-x-2'>
                  {Loading ?
                    <input type='submit' className='bg-blueblue text-white font-semibold px-4 py-2 rounded-md text-lg cursor-not-allowed' value='Login' disabled />:
                    <input type='submit' className='bg-blueblue text-white font-semibold px-4 py-2 rounded-md text-lg' value='Login'  />}
                { Loading &&  <CircularProgress />}
                  </div>
                
                <div className='mt-3'>
                    <h5 className='text-lg font-light '>First time logging in? <Link to='/register' className='text-blue-700 text-semibold'>Enroll Now</Link></h5>
                <h5 className='text-md font-light mt-2 md:text-lg'><Link to=''>Forgot Password</Link> or need other assistance? <Link to=''>Contact Us</Link> </h5>
                </div>
                
                </form>
            </div>
    </div>

    <TopFooter />
   </>
  )
}

export default Login