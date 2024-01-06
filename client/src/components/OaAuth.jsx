// eslint-disable-next-line no-unused-vars
import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup} from '@firebase/auth';
import { app } from '../firebase';

    const handleGoogleClick=async()=>{

        try{
            //
            const provider= new GoogleAuthProvider();
            const auth=getAuth(app);

            const result=await signInWithPopup(auth,provider);

            const res=await fetch('/api/auth/google',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name:result.user.displayName, email:result.user.email , photo:result.user.photoURL})
            })

            const data=await res.json();
            

            
        }catch(error){
            //
            console.log('Could not sign in with google',error);

        }

    }

function OaAuth() {
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-600 text-white hover:opacity-95 uppercase rounded-lg py-3'>
      Continue With Google
    </button>
  )
}

export default OaAuth
