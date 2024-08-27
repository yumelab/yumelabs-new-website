'use client'
import { FormEvent, useState } from "react"; 
import { Terms } from '@/data/terms';
import Button from "@/components/Button";


const MailForm = () =>{
    
    const [result, setResult] =  useState('') 
    const [loading, setLoading] = useState<boolean>(false)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [submit, setSubmit] = useState(false);
    

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
        
        await fetch('https://default-etnurt5qda-uc.a.run.app',{
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
            if (data.status === 200) { 
                setSubmit(false);
                setFirstName('');
                setLastName('');
                setCompany('');
                setPhone('');
                setEmail('');
                setMessage('');
                setResult('Form Submitted Successfully!');
            } else { 
                setResult('Form Submitted Failed!');
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
                    placeholder='*Country' 
                    maxLength={10}
                    className="p-4 rounded-lg border flex-1" 
                    required
                    onChange={(e) => {
                        const inputValue = e.target.value.replace(/\D/g, '');
                        setCountry(inputValue);
                    }}
                /> 
                <input
                    type='tel'
                    id='phone'
                    name='phone'
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
                <div className='flex justify-end'>
                <Button
                    label="Submit"
                    variant="text"
                    style="outline"
                    size="lg"
                    type="submit" 
                    /> 
                </div>  
                <p className={`${loading?'block':'hidden'}`}>{result}</p>
            </form> 
    )
}

export default MailForm