import {ProjectDetails} from '@/types'
import InlineSection from './InlineSection';

interface Props{
    details:ProjectDetails; 
}

const Details = (props:Props) =>{
    const {details} = props
    return(
        <section className='flex flex-col gap-16 md:py-32 py-24'>
             <InlineSection title='Problem Statement' description={details.problem} /> 
             <InlineSection title='Project Scope' description={details.scope} />  
        </section>
    )
}

export default Details