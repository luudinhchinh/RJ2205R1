

const student = [
    {
        id:0,
        name: 'nguyễn văn A',
        age: 30,
        adress: 'hà nội'
    },
    {
        id:1,
        name: 'nguyễn văn B',
        age: 20,
        adress: 'hà nam'
    },
    {
        id:2,
        name: 'nguyễn văn nam',
        age: 23,
        adress: 'quảng nam'
    }
]
function TableInfoStudent(){
    return(
        <div>
            <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} >
               <thead>
               <tr >
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>adress</th>
                </tr>
               </thead>
                {
                    student.map(res=>(
                        <tbody key={res.id}>
                            <tr >
                               <td>{res.id}</td>
                               <td>{res.name}</td>
                               <td>{res.age}</td>
                               <td>{res.adress}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}
export default TableInfoStudent