import AXIOS_API from "@/utils/axiosAPI"

export async function postImages(CloudName,formData){
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CloudName}/image/upload`,{
        method:"POST",
        body:formData
    })
    const data = res.json()
    const imageUrl = data["secure_url"]
    return imageUrl
}

export async function createNewListing(data,imageUrls){
    console.log(data,imageUrls)
    const {data:newListing} = await AXIOS_API.post('/listing',{...data,imageUrls})
    
    return newListing
}
