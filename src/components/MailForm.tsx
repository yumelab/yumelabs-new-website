
import { FormEvent } from "react"; 
import { Terms } from '@/data/terms';
import Button from "./Button";

const MailForm = () =>{
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <form className="flex flex-col gap-4">
            <input
                type='text'
                id='name'
                name='name'
                required
                placeholder='Name' 
                className="p-4 rounded-lg border"
            /> 
            <input
                type='tel'
                id='phone'
                name='phone'
                pattern='[0-9]{10}'
                placeholder='*Phone Number' 
                maxLength={10}
                className="p-4 rounded-lg border" 
                required
            /> 
            <input
                type='email'
                id='email'
                name='email'
                placeholder='*Email' 
                className="p-4 rounded-lg border" 
                required
            />
        {/* Textarea for Message */}
            <textarea
                id='message'
                name='message'
                rows={5}
                placeholder='*Message' 
                className="p-4 rounded-lg border" 
                required
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
        </form>
    )
}

export default MailForm