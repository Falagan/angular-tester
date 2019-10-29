interface IBoard {
    name: string;
    dateLastActivity: Date,
    prefs: {
        backgroundColor: string
    }
    url:string,
    memberships: [],
    id: string
}

export default IBoard;
export {IBoard};