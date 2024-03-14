import AXIOS_API from "@/utils/axiosAPI"

export async function postImages(cloudName,formData){
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{
        method:"POST",
        body:formData
    })
    const data = await res.json()
    const imageUrl = data["secure_url"]
    return imageUrl
}

export async function createNewListing(data,imageUrls){  
    const {data:newListing} = await AXIOS_API.post('/listing',{ ...data,imageUrls})
    console.log(newListing)
    return newListing
   
}
