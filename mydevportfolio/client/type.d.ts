export type Data =  {
   [key:string]:DBProjectData[]
}


export interface DBProjectData {
    id: number,
    projectname: string,
    shortdescription: string | null,
    projectdescription: string,
    projectimage: string,
    projecturl: string,
    githuburl: string,
    techstack: string[],
    projecttype: string,
    enddate: string | null,
    startdate : string | null
}


export type GroupedData = {
    [key:string] : DBProjectData[]
}
