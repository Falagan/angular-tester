interface IBoard {
    name: string;
    dateLastActivity: Date,
    prefs: {
        bacgroundColor: string
    }
    url:string,
    memberships: [],
    id: string
}

export default IBoard;
export {IBoard};