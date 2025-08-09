import React from 'react'

function StudentSelfinfo() {
    const studentResult = [
        {
            name : 'ihsan',
            age  : 18,
            grad : 'A',
            obtendMarks : 500,
            totalMarks : 600
        },

         {
            name : 'Aziz',
            age  : 20,
            grad : 'B+',
            obtendMarks : 450,
            totalMarks : 600
        },

         {
            name : 'Abid',
            age  : 22,
            grad : 'A+',
            obtendMarks : 550,
            totalMarks : 600
        },

         {
            name : 'Asad',
            age  : 23,
            grad : 'A1',
            obtendMarks : 590,
            totalMarks : 600
        },

         {
            name : 'Asmat',
            age  : 19,
            grad : 'B',
            obtendMarks : 400,
            totalMarks : 600
        }
    ]
  return (
    
    <div>
        <table border={1}>
            <thead>
           <tr>
            <td>name</td>
            <td>age</td>
            <td>grad</td>
            <td>obtendMarks</td>
            <td>totalMarks</td>
           
           </tr>
            </thead>
            <tbody>
                {
                        studentResult.map((user)=> (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.grad}</td>
                                <td>{user.obtendMarks}</td>
                                <td>{user.totalMarks}</td>
                                  
                                
                            </tr>
                        ) )                   
                    }                
                        
                        
                
            </tbody>
        </table>
      
    </div>
  )
}

export default StudentSelfinfo
