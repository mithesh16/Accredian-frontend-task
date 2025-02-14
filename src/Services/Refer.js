//const base_url='https://appsail-50024995030.development.catalystappsail.in/ref/addref'
const base_url='https://accredian-backend-task-1-mws2.onrender.com/ref/addref'
//const base_url='http://localhost:3000/ref/addref'
export const referFriend=async(refData)=>{
    
    try {
        const response=await fetch(base_url,{
           method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(refData)
        })
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
}