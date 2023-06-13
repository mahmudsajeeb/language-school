 
import { useForm } from 'react-hook-form';
 
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hook/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD;

const AddaClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, instructor, seats} = data;
                const newClass = {name, price: parseFloat(price), instructor, seats, image:imgURL}
                console.log("new classs",newClass)
                axiosSecure.post('/classes', newClass)
                .then(data => {
                    console.log('after posting new classes', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    
    return (
        <div className="w-full px-10">
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Name*</span>
                    </label>
                    <input type="text" placeholder="Country Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                 
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor </span>
                    </label>
                    <textarea {...register("instructor", { required: true })} className="input input-bordered  " placeholder="instructor name"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Seats </span>
                    </label>
                    <input type='number' {...register("seats", { required: true })} className="input input-bordered" placeholder="Available Seats "></input>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type='number' {...register("price", { required: true })} className="input input-bordered" placeholder="price "></input>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add a Class" />
            </form>
        </div>
    );
};

export default AddaClass;