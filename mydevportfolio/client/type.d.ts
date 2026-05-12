export type Data =  {
   [key:string]:ProjectData[]
}


export interface DBProjectData {
    id: number,
    projectname: string,
    shortdescription: string,
    startDate: string,
    endDate: string,
    projectdescription: string,
    projectimage: string,
    projecturl: string,
    githuburl: string,
    techstack: string[],
    projecttype: string
}


export type GroupedData = {
    [key:string] : DBProjectData[]
}