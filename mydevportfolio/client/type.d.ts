
export type Data =  {
   [key:string]:ProjectData[]
}
export interface ProjectData {
    id: number,
    name: string,
    short_description: string,
    date: string,
    description: string,
    img: string,
    url: string,
    techStack: string[],
}

