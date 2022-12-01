import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../store/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

const CardDetails = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  const [inputData, setinputData] = useState(data.title);
  const [textAreaData, settextAreaData] = useState(data.body);

  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.preventDefault();

    setToggle(!toggle);
  };

  const divStyle = {
    display: toggle ? "none" : "block",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    let formSubmit = true;

    if (!inputData) {
      formSubmit = false;
      setError("Please enter the title");
      return false;
    }

    if (!textAreaData) {
      formSubmit = false;
      setError("Please enter the description");
      return false;
    }

    if (formSubmit) {
      setError("");
      let formData = {
        id: data.id,
        title: inputData,
        body: textAreaData,
      };
      dispatch(updatePost(formData));
      setToggle(!toggle);
    }
  };

  return (
    <div className=' col-md-3 col-lg-4 mb-4'>
      <div className='card  h-100'>
        <div className='card-header'>
          <FontAwesomeIcon
            onClick={handleOnClick}
            icon={faEdit}></FontAwesomeIcon>
        </div>
        <div className='card-body'>
          {(toggle && (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className='alert alert-danger' role='alert'>
                  {error}
                </div>
              )}
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'>
                  Title
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  onChange={(e) => setinputData(e.target.value)}
                  value={inputData}
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label'>
                  Description
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  onChange={(e) => settextAreaData(e.target.value)}
                  rows='3'
                  value={textAreaData}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Update
              </button>
            </form>
          )) || (
            <>
              <p>{data.title}</p>
              <h5 className='card-title'>Description</h5>
              <p className='card-text' style={divStyle}>
                {data.body}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
