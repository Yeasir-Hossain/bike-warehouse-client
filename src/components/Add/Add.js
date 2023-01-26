import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddService = () => {
    const [user] = useAuthState(auth)
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        const url = `https://bike-warehouse.onrender.com/item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success('item added successfully')
            });
    };
    return (
        <div className="w-50 mx-auto my-5 border rounded shadow-lg p-5" style={{ minHeight: '100vh' }}>
            <h2>Please add an item: </h2>
            <form className="d-flex flex-column rounded" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" {...register("name")} placeholder="Name" required />
                <input
                    className="mb-2 rounded"
                    {...register("price")}
                    placeholder="Price"
                    type="number"
                    required />
                <input
                    className="mb-2 rounded"
                    {...register("quantity")}
                    placeholder="Quantity"
                    type="number"
                    required />
                <textarea
                    className="mb-2 rounded"
                    {...register("description")}
                    placeholder="Description"
                    required />
                <input
                    className="mb-2 rounded"
                    {...register("image")}
                    placeholder="Image url"
                    type="text"
                    required />
                <input
                    className="mb-2 rounded"
                    {...register("email")}
                    value={user.email}
                    type="text"
                    readOnly />
                <input
                    className="mb-2 rounded"
                    {...register("supplier_name")}
                    placeholder="Supplier Name"
                    type="text"
                    required />
                <input
                    className="mb-2 rounded"
                    {...register("sold")}
                    placeholder="Supplier Name"
                    value={0}
                    type="text"
                    required hidden />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;