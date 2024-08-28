'use client'
import Image from "next/image";
import { FormEvent, useState } from "react"; 
import { Terms } from '@/data/terms';
import Button from "@/components/Button";

import Gifloader from '@/assets/loading.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MailForm = () =>{
     
    const [loading, setLoading] = useState<boolean>(false)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState(''); 
 

    const postURL = {
        dev:'http://127.0.0.1:5001/yume-labs-70d8f/us-central1/default',
        prod:'https://default-etnurt5qda-uc.a.run.app'
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setLoading(true); 

        const formData = {
            firstName, 
            lastName, 
            country,
            phone, 
            company, 
            email, 
            message,
            terms: (e.target as any).terms.checked
        };
        
        await fetch(postURL.prod,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(res=> res)
        .then(data => {   
            console.log(data.status, data)
            
            setFirstName('');
            setLastName('');
            setCompany('');
            setPhone('');
            setEmail('');
            setMessage('');

            if (data.status === 200) {  
                toast('Form Submitted Successfully!'); 
                setLoading(false); 
            } else { 
                toast('Form Submitted Failed!');
            }
        }) 
    }


    return( 
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={firstName}
                        placeholder='FirstName' 
                        className="p-4 rounded-lg border flex-1"
                        required
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            setFirstName(inputValue);
                        }}
                    /> 
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={lastName}
                        placeholder='LastName' 
                        className="p-4 rounded-lg border flex-1"
                        required
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            setLastName(inputValue);
                        }}
                    /> 
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                <input
                    type='text'
                    id='country'
                    name='country' 
                    value={country}
                    placeholder='*Country'  
                    className="p-4 rounded-lg border flex-1" 
                    required
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        setCountry(inputValue);
                    }}
                /> 
                <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={phone}
                    pattern='[0-9]{10}'
                    placeholder='*Phone Number' 
                    maxLength={10}
                    className="p-4 rounded-lg border flex-1" 
                    required
                    onChange={(e) => {
                        const inputValue = e.target.value.replace(/\D/g, '');
                        setPhone(inputValue);
                    }}
                /> 
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type='text'
                        id='company'
                        name='company'
                        value={company}
                        placeholder='*Company Name' 
                        className="p-4 rounded-lg border flex-1" 
                        required
                        onChange={(e) => {
                            const inputValue = e.target.value.replace(/\s/g, '');
                            setCompany(inputValue);
                        }}
                    />
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='*Email' 
                        className="p-4 rounded-lg border flex-1" 
                        required
                        onChange={(e) => {
                            const inputValue = e.target.value.replace(/\s/g, '');
                            setEmail(inputValue);
                        }}
                    />
                </div>
            {/* Textarea for Message */}
                <textarea
                    id='message'
                    name='message'
                    rows={5}
                    value={message}
                    placeholder='*Message' 
                    className="p-4 rounded-lg border" 
                    required
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        setMessage(inputValue);
                    }}
                />
                {/* Checkbox for Terms and Conditions */}
                <label className="flex gap-4 items-start">
                    <input type='checkbox' name='terms' className="mt-2" required /> 
                    <span className="text-xs">{Terms.form.terms}</span>
                </label>
                <div className='flex gap-4 items-center justify-end'>  
                    {
                        (!loading)?
                        <Button
                            label="Submit"
                            variant="text"
                            style="outline"
                            size="lg"
                            type="submit" 
                            />
                            :<div className="h-20 w-20"><Image src={Gifloader} width={20} height={20} alt="loader"/></div> 
                    }
                </div>  
                <ToastContainer position="bottom-center" theme="dark"/>
            </form> 
    )
}

export default MailForm