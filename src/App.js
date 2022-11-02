import React from "react";
import { useForm } from "react-hook-form";

const App = () => {

  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        //console.log(value);
        if (value instanceof FileList){
            formData.append(key, value.item(0));
        }
        else{
            formData.append(key, value);
        }
        
    });

    fetch(`http://192.168.0.122:8000/api/client/information/store`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-5">
        <span>Name :</span>
          <input
            className="m-2"
            {...register("customer_id")}
            type="text"
            name="customer_id"
            placeholder="customer_id"
          />{" "}
          <br />
          <span>ID :</span>
          <input
            className="m-2"
            {...register("customer_name")}
            type="text"
            name="customer_name"
            placeholder="customer_name"
          />{" "}
          <br />
          <span>Email :</span>
          <input
            className="m-2"
            {...register("customer_email")}
            type="text"
            name="customer_email"
            placeholder="customer_email"
          />{" "}
          <br />
          <span>Customer Image :</span>
          <input
            className="m-2"
            {...register("customer_image")}
            type="file"
            name="customer_image"
            multiple="multiple"
            
          />
          <br />
          <span>Nominee Image :</span>
          <input
            className="m-2"
            {...register("customer_nominee_image")}
            type="file"
            name="customer_nominee_image"
            multiple="multiple"

          />
          <br />
          <span>Customer Documents :</span>
          <input
            className="m-2"
            {...register("customer_document")}
            type="file"
            name="customer_document"
            multiple="multiple"

          />
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;