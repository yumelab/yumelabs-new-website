export type DefaultType = {
    title:string;
    description:string;
}


export type ProjectType = {
    tags:string[];
    title:string;
    description:string;
    cover:string;
    url:string;
}

export type BlogInfo = {
    label:string; 
    value:string;
}

export type ProjectDetails = {
    problem:string; 
    scope:string;
}

export type ProjectIntroduction = {
    company:string; 
    title:string; 
    summary:string;
}

export type SectionType = {
    title: string;
    description:string;
    section:string;
}

export type ProblemType = {
    detail: string; 
    image:string;
}


export type ProblemDetails = {
    image:string;
    title:string;
    description:string;
}