export const referFriend=async(refData)=>{
    try {
        const response=await fetch('http://localhost:3000/ref/addref',{
           method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':' http://192.168.1.4:3000',
            },
            body: JSON.stringify(refData)
        })
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
}