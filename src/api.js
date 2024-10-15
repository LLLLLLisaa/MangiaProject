export const fetchData = async(URL) => {
    try{
        const response = await fetch(URL)
        const data = await response.json();
        //console.log(data);
        return data;
    }catch(error){
        console.error('Error in fetch:', error);
    }
}

export const postData = async (URL, data) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error('Error in post:', error);
        return null; 
    }
};