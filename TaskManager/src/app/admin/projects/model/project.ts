export class Project
{
    id : number;
    projectID: number;
    projectName: string;
    dateOfStart: string;
    teamSize: number;

    constructor()
    {
        this.id = 0;
        this.projectID = 0;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = 0;
    }
}
