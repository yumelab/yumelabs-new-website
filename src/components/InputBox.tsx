
interface Props{
    type:'text'|'tel'|'email';
    placeholder:string;
    required:boolean;
    name:string;
    onClick:()=>void;
}

const InputBox = (props:Props) =>{
 const {name,type,placeholder,required} = props

 return <input 
            type={type}
            className="p-4 rounded-lg border flex-1"   
            name={name}
            placeholder={placeholder}  
            required={required}
            // onChange={(e) => {
            //     const inputValue = e.target.value;
            //     setFirstName(inputValue);
            // }}
             />
}

export default InputBox